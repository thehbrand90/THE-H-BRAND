#!/usr/bin/env python3
"""Build hero slide WebP sets from approved full-resolution PNGs.

Desktop: 1600x900 (16:9), WebP q84 -> slide-0N.webp
Mobile : 720x1280 (9:16 centre crop, LANCZOS), WebP q82 -> slide-0N-m.webp
"""
import os
from PIL import Image, ImageFilter

SRC_DIR = "downloads"
OUT_DIR = "projects/the-h-brand/public/media/hero"

# Per-slide crop bias for the 9:16 mobile frame, (horizontal, vertical).
# 0.5 = centre. A slide is biased only when the centre window cuts its main
# subject: 03 (dining table sits right of centre) and 05 (sink + shower + window
# sit right of centre).
MOBILE_BIAS = {
    1: (0.5, 0.5),
    2: (0.5, 0.5),
    3: (0.72, 0.5),
    4: (0.5, 0.5),
    5: (0.62, 0.5),
}


def centre_crop(im: Image.Image, ratio: float, bias=(0.5, 0.5)) -> Image.Image:
    w, h = im.size
    bx, by = bias
    target_ratio = ratio  # width / height
    if w / h > target_ratio:
        new_w = int(round(h * target_ratio))
        left = int(round((w - new_w) * bx))
        left = max(0, min(w - new_w, left))
        return im.crop((left, 0, left + new_w, h))
    new_h = int(round(w / target_ratio))
    top = int(round((h - new_h) * by))
    top = max(0, min(h - new_h, top))
    return im.crop((0, top, w, top + new_h))


def main() -> None:
    os.makedirs(OUT_DIR, exist_ok=True)
    for i in range(1, 6):
        src = os.path.join(SRC_DIR, f"hero-real-{i:02d}.png")
        im = Image.open(src).convert("RGB")

        # Desktop: 16:9 at 1600px wide.
        desk = centre_crop(im, 16 / 9).resize((1600, 900), Image.LANCZOS)
        desk_path = os.path.join(OUT_DIR, f"slide-{i:02d}.webp")
        desk.save(desk_path, "WEBP", quality=84, method=6)

        # Mobile: 9:16 at 720x1280, upscaled with LANCZOS, then a light unsharp
        # to recover micro-contrast lost in the upscale.
        mob = centre_crop(im, 9 / 16, MOBILE_BIAS[i]).resize((720, 1280), Image.LANCZOS)
        mob = mob.filter(ImageFilter.UnsharpMask(radius=1.2, percent=55, threshold=2))
        mob_path = os.path.join(OUT_DIR, f"slide-{i:02d}-m.webp")
        mob.save(mob_path, "WEBP", quality=82, method=6)

        for p in (desk_path, mob_path):
            chk = Image.open(p)
            print(f"{os.path.basename(p):18s} {chk.size[0]}x{chk.size[1]} "
                  f"{os.path.getsize(p) / 1024:7.1f} KB")


if __name__ == "__main__":
    main()

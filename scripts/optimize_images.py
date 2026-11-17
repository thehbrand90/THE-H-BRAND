#!/usr/bin/env python3
"""Build the site's local, optimized image set (public/media).

Why this exists
---------------
Portfolio and section photos used to be hot-linked from Supabase Storage /
postimg as full-size PNGs (0.6–1.8 MB each). The portfolio index alone pulled
~20 MB of images. Everything visible above the fold or in a grid now lives in
`public/media` as WebP at two widths (800w / 1600w) and is served from our own
origin with `srcset`.

Usage
-----
    python3 scripts/optimize_images.py            # rebuild everything
    python3 scripts/optimize_images.py --only hero

Requires Pillow (`pip install pillow`) and network access to the source URLs
listed below. Output is deterministic: same source, same file names.

Adding a new portfolio project
------------------------------
1. Upload the original to Supabase Storage (PORTFOLIO bucket) as before.
2. Add the item to `pages/Portfolio.tsx` with
   `image: '/media/projects/p<ID>-<slug>-1600.webp'`.
3. Add the source URL to PROJECT_SOURCES below and run this script.
"""
from __future__ import annotations

import argparse
import json
import os
import subprocess
import sys

try:
    from PIL import Image
except ImportError:  # pragma: no cover
    sys.exit("Pillow is required: pip install pillow")

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
OUT = os.path.join(ROOT, "public", "media")
CACHE = os.path.join(ROOT, ".image-cache")

# Local source images (already in the repo / produced by the design pass)
LOCAL_BRAND = {
    "hero": ("assets-src/hero-clean.jpg", (1920, 1280, 768), 78),
    "hero-mobile": ("assets-src/hero-mobile.jpg", (941, 600), 78),
    "band": ("assets-src/band.jpg", (1920, 1280), 80),
}

# Remote section images (postimg) -> local WebP
REMOTE_SECTION = {
    "review-cta": ("https://i.postimg.cc/c1D3Wvfb/review.jpg", 1400, 80),
    "about-a1": ("https://i.postimg.cc/9fNRC8X8/a1.jpg", 1400, 80),
    "about-a3": ("https://i.postimg.cc/CK6BSPM6/a3.jpg", 1400, 80),
    "about-a3b": ("https://i.postimg.cc/YSyGMn2P/a3(1).jpg", 1400, 80),
    "about-a2": ("https://i.postimg.cc/fbgtD2WF/a2.jpg", 1400, 80),
    "about-a4": ("https://i.postimg.cc/LXYqXthb/a4.jpg", 1400, 80),
    "about-a4b": ("https://i.postimg.cc/KzkKzP4p/a4(1).jpg", 1400, 80),
    "about-hall": ("https://i.postimg.cc/JzNvfvqp/6.jpg", 1400, 80),
    "about-office": ("https://i.postimg.cc/FHDPjLVj/Kakao-Talk-20260112-175428559-02.jpg", 1400, 80),
    "about-team": ("https://i.postimg.cc/gjWq9zKk/teaam.png", 1400, 80),
    "about-min": ("https://i.postimg.cc/6qQ9HRvx/20.jpg", 1400, 80),
    "about-theh": ("https://i.postimg.cc/NjKFyd2J/THE-H.png", 1400, 80),
    "contact-map": ("https://i.postimg.cc/XqpY4cCR/image.png", 900, 82),
}

SUPABASE = "https://exdhgwkudejynccxqdhm.supabase.co/storage/v1/object/public/PORTFOLIO"


def project_sources() -> dict[str, str]:
    """p<ID>-<slug> -> original URL, parsed from pages/Portfolio.tsx history."""
    manifest = os.path.join(ROOT, "scripts", "portfolio-sources.json")
    if os.path.exists(manifest):
        with open(manifest) as fh:
            return json.load(fh)
    return {}


def fetch(url: str, dest: str) -> str:
    os.makedirs(CACHE, exist_ok=True)
    if os.path.exists(dest) and os.path.getsize(dest) > 0:
        return dest
    subprocess.run(["curl", "-sSL", "--max-time", "90", "-o", dest, url], check=True)
    return dest


def save_webp(im: Image.Image, path: str, width: int, quality: int) -> int:
    if im.mode not in ("RGB", "L"):
        im = im.convert("RGB")
    if im.width > width:
        im = im.resize((width, round(im.height * width / im.width)), Image.Resampling.LANCZOS)
    im.save(path, "WEBP", quality=quality, method=6)
    return os.path.getsize(path)


def emit(src: str, out_dir: str, base: str, widths, quality: int) -> None:
    os.makedirs(out_dir, exist_ok=True)
    with Image.open(src) as im:
        im.load()
        for w in widths:
            path = os.path.join(out_dir, f"{base}-{w}.webp")
            size = save_webp(im, path, w, quality)
            print(f"  {os.path.relpath(path, ROOT):58s} {size / 1024:7.1f} KB")


def main() -> None:
    ap = argparse.ArgumentParser()
    ap.add_argument("--only", help="hero | brand | section | projects")
    args = ap.parse_args()

    if args.only in (None, "hero", "brand"):
        for base, (src_rel, widths, q) in LOCAL_BRAND.items():
            src = os.path.join(ROOT, src_rel)
            if not os.path.exists(src):
                print(f"skip {base}: missing {src_rel}")
                continue
            print(base)
            emit(src, os.path.join(OUT, "brand"), base, widths, q)

    if args.only in (None, "section"):
        for base, (url, width, q) in REMOTE_SECTION.items():
            print(base)
            src = fetch(url, os.path.join(CACHE, base + os.path.splitext(url)[1].split("?")[0]))
            emit(src, os.path.join(OUT, "brand"), base, (width,), q)

    if args.only in (None, "projects"):
        for base, url in project_sources().items():
            print(base)
            src = fetch(url, os.path.join(CACHE, base + os.path.splitext(url)[1]))
            emit(src, os.path.join(OUT, "projects"), base, (1600, 800), 80)


if __name__ == "__main__":
    main()

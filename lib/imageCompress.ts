/**
 * Client-side image compression for admin uploads.
 *
 * Review photos are stored as base64 inside the `reviews.image_urls` column,
 * so an unprocessed phone photo (4–8 MB) used to make a single row bigger than
 * the Supabase statement timeout. Every upload is now downscaled to at most
 * 1600 px on the long edge and re-encoded as WebP (JPEG fallback) at q≈0.82,
 * which lands around 120–350 KB per photo.
 */

export interface CompressOptions {
  /** Longest edge in px. Default 1600. */
  maxSize?: number;
  /** 0–1. Default 0.82. */
  quality?: number;
}

export interface CompressedImage {
  dataUrl: string;
  originalBytes: number;
  bytes: number;
  width: number;
  height: number;
  mimeType: string;
}

const readAsDataUrl = (file: Blob): Promise<string> =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(String(reader.result));
    reader.onerror = () => reject(reader.error ?? new Error('파일을 읽지 못했습니다.'));
    reader.readAsDataURL(file);
  });

const loadImage = (src: string): Promise<HTMLImageElement> =>
  new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve(img);
    img.onerror = () => reject(new Error('이미지를 불러오지 못했습니다.'));
    img.src = src;
  });

const dataUrlBytes = (dataUrl: string): number => {
  const base64 = dataUrl.split(',')[1] ?? '';
  return Math.floor((base64.length * 3) / 4);
};

export async function compressImageFile(
  file: File,
  { maxSize = 1600, quality = 0.82 }: CompressOptions = {}
): Promise<CompressedImage> {
  const source = await readAsDataUrl(file);
  const img = await loadImage(source);

  const scale = Math.min(1, maxSize / Math.max(img.width, img.height));
  const width = Math.max(1, Math.round(img.width * scale));
  const height = Math.max(1, Math.round(img.height * scale));

  const canvas = document.createElement('canvas');
  canvas.width = width;
  canvas.height = height;

  const ctx = canvas.getContext('2d');
  if (!ctx) throw new Error('이 브라우저에서는 이미지 압축을 지원하지 않습니다.');

  ctx.imageSmoothingEnabled = true;
  ctx.imageSmoothingQuality = 'high';
  ctx.drawImage(img, 0, 0, width, height);

  // WebP is ~30% smaller than JPEG at the same quality; fall back when the
  // browser silently returns a PNG (older Safari).
  let dataUrl = canvas.toDataURL('image/webp', quality);
  let mimeType = 'image/webp';
  if (!dataUrl.startsWith('data:image/webp')) {
    dataUrl = canvas.toDataURL('image/jpeg', quality);
    mimeType = 'image/jpeg';
  }

  // Keep the original if re-encoding somehow produced a bigger file.
  if (dataUrlBytes(dataUrl) >= file.size && scale === 1) {
    return {
      dataUrl: source,
      originalBytes: file.size,
      bytes: file.size,
      width: img.width,
      height: img.height,
      mimeType: file.type || 'image/jpeg',
    };
  }

  return {
    dataUrl,
    originalBytes: file.size,
    bytes: dataUrlBytes(dataUrl),
    width,
    height,
    mimeType,
  };
}

export const formatBytes = (bytes: number): string => {
  if (!bytes || bytes < 0) return '0 KB';
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${Math.round(bytes / 1024)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
};

/** Total base64 payload size of a set of data URLs, in bytes. */
export const payloadBytes = (dataUrls: string[]): number =>
  dataUrls.reduce((sum, url) => sum + dataUrlBytes(url), 0);

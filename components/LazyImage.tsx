import React, { useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react';
import { ImageOff } from 'lucide-react';

const useIsomorphicLayoutEffect = typeof window !== 'undefined' ? useLayoutEffect : useEffect;

interface LazyImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  className?: string;
  containerClassName?: string;
  priority?: boolean; // eager + high fetchpriority for above-the-fold images
  srcSet?: string;
  sizes?: string;
  /** Skip the fade-in / skeleton (used for tiny thumbnails already decoded) */
  instant?: boolean;
}

/**
 * Image wrapper used across the site.
 *
 * - native lazy loading + async decoding for everything below the fold
 * - optional responsive `srcSet` / `sizes`
 * - soft warm skeleton instead of a grey flash, and a graceful error state
 * - cache-hit safe: an image that is already in the browser cache can finish
 *   loading before React attaches `onLoad`, so we also probe `img.complete` /
 *   `naturalWidth` on mount and on every `src` change (before paint) instead of
 *   getting stuck at `opacity-0` behind the skeleton.
 */
const LazyImage: React.FC<LazyImageProps> = ({
  src,
  alt,
  className = '',
  containerClassName = '',
  priority = false,
  srcSet,
  sizes,
  instant = false,
  ...props
}) => {
  const [isLoading, setIsLoading] = useState(!instant);
  const [hasError, setHasError] = useState(false);
  const [currentSrc, setCurrentSrc] = useState(src);
  const imgRef = useRef<HTMLImageElement | null>(null);

  const revealIfComplete = useCallback(() => {
    const img = imgRef.current;
    if (img && img.complete && img.naturalWidth > 0) {
      setIsLoading(false);
    }
  }, []);

  // Runs on mount (cached image already decoded) and whenever the node changes.
  const setImgRef = useCallback(
    (node: HTMLImageElement | null) => {
      imgRef.current = node;
      revealIfComplete();
    },
    [revealIfComplete]
  );

  useEffect(() => {
    setIsLoading(!instant);
    setHasError(false);
    setCurrentSrc(src);
  }, [src, instant]);

  // Covers `src` changes that are served straight from cache, before paint so
  // not even a single frame stays at opacity-0.
  useIsomorphicLayoutEffect(() => {
    revealIfComplete();
  }, [currentSrc, revealIfComplete]);

  return (
    <div className={`relative overflow-hidden bg-brand-stone/60 ${containerClassName}`}>
      {isLoading && !hasError && (
        <div className="absolute inset-0 z-10 bg-gradient-to-br from-brand-stone/70 via-brand-bg to-brand-stone/50 animate-pulse" />
      )}

      {hasError && (
        <div className="absolute inset-0 z-20 flex flex-col items-center justify-center bg-brand-stone/70 text-brand-gray p-4">
          <ImageOff size={20} className="mb-2 opacity-40" strokeWidth={1.2} />
          <span className="font-montserrat text-[9px] uppercase tracking-[0.2em] text-center">
            Image unavailable
          </span>
        </div>
      )}

      <img
        ref={setImgRef}
        src={currentSrc}
        srcSet={srcSet}
        sizes={sizes}
        alt={alt}
        className={`w-full h-full object-cover transition-[opacity,transform] duration-700 ease-out ${
          isLoading ? 'opacity-0' : 'opacity-100'
        } ${className}`}
        loading={priority ? 'eager' : 'lazy'}
        fetchPriority={priority ? 'high' : 'auto'}
        decoding="async"
        onLoad={() => {
          setHasError(false);
          setIsLoading(false);
        }}
        onError={() => {
          setIsLoading(false);
          setHasError(true);
        }}
        {...props}
      />
    </div>
  );
};

export default LazyImage;

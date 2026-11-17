import React, { useState, useEffect } from 'react';
import { ImageOff } from 'lucide-react';

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

  useEffect(() => {
    setIsLoading(!instant);
    setHasError(false);
    setCurrentSrc(src);
  }, [src, instant]);

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
        onLoad={() => setIsLoading(false)}
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

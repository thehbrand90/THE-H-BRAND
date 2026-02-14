import React, { useState, useEffect } from 'react';
import { ImageOff } from 'lucide-react';

interface LazyImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  className?: string;
  containerClassName?: string;
  priority?: boolean; // If true, uses loading="eager"
}

const LazyImage: React.FC<LazyImageProps> = ({ 
  src, 
  alt, 
  className = "", 
  containerClassName = "",
  priority = false,
  ...props 
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [currentSrc, setCurrentSrc] = useState(src);

  useEffect(() => {
    // Reset state when src changes
    setIsLoading(true);
    setHasError(false);
    setCurrentSrc(src);
  }, [src]);

  const handleLoad = () => {
    setIsLoading(false);
  };

  const handleError = () => {
    setIsLoading(false);
    setHasError(true);
  };

  return (
    <div className={`relative overflow-hidden bg-gray-100 ${containerClassName}`}>
      {/* Skeleton / Loading State */}
      {isLoading && (
        <div className="absolute inset-0 z-10 flex items-center justify-center bg-gray-200 animate-pulse">
          {/* Optional: Add a subtle logo or icon here if desired */}
        </div>
      )}

      {/* Error State */}
      {hasError && (
        <div className="absolute inset-0 z-20 flex flex-col items-center justify-center bg-gray-200 text-gray-400 p-4">
          <ImageOff size={24} className="mb-2 opacity-50" />
          <span className="text-[10px] uppercase tracking-widest text-center">Image Unavailable</span>
        </div>
      )}

      {/* Actual Image */}
      <img
        src={currentSrc}
        alt={alt}
        className={`w-full h-full object-cover transition-opacity duration-700 ease-out ${
          isLoading ? 'opacity-0' : 'opacity-100'
        } ${className}`}
        loading={priority ? "eager" : "lazy"}
        decoding="async"
        onLoad={handleLoad}
        onError={handleError}
        {...props}
      />
    </div>
  );
};

export default LazyImage;
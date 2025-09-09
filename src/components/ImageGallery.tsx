import { useState } from 'react';
import { ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ImageGalleryProps {
  images: string[];
  productName: string;
  className?: string;
}

export const ImageGallery = ({ images, productName, className = "" }: ImageGalleryProps) => {
  const [currentImage, setCurrentImage] = useState(0);
  const [isZoomed, setIsZoomed] = useState(false);

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className={`space-y-4 ${className}`}>
      {/* Main Image */}
      <div className="relative group">
        <div className={`relative overflow-hidden rounded-lg bg-muted aspect-square ${
          isZoomed ? 'cursor-zoom-out' : 'cursor-zoom-in'
        }`}>
          <img
            src={images[currentImage]}
            alt={`${productName} - Image ${currentImage + 1}`}
            className={`w-full h-full object-cover transition-transform duration-500 ${
              isZoomed ? 'scale-150' : 'scale-100'
            }`}
            onClick={() => setIsZoomed(!isZoomed)}
          />
          
          {/* Navigation Arrows */}
          {images.length > 1 && (
            <>
              <Button
                variant="secondary"
                size="sm"
                onClick={prevImage}
                className="absolute left-3 top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <Button
                variant="secondary"
                size="sm"
                onClick={nextImage}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
            </>
          )}

          {/* Zoom Icon */}
          <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
            <Button variant="secondary" size="sm">
              <ZoomIn className="h-4 w-4" />
            </Button>
          </div>

          {/* Image Counter */}
          {images.length > 1 && (
            <div className="absolute bottom-3 right-3 bg-background/80 backdrop-blur-sm px-2 py-1 rounded text-sm font-medium">
              {currentImage + 1} / {images.length}
            </div>
          )}
        </div>
      </div>

      {/* Thumbnail Grid */}
      {images.length > 1 && (
        <div className="grid grid-cols-4 gap-2">
          {images.map((image, index) => (
            <button
              key={index}
              onClick={() => setCurrentImage(index)}
              className={`aspect-square rounded-lg overflow-hidden border-2 transition-all duration-200 ${
                currentImage === index
                  ? 'border-primary ring-2 ring-primary/20'
                  : 'border-border hover:border-border-hover'
              }`}
            >
              <img
                src={image}
                alt={`${productName} thumbnail ${index + 1}`}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
};
"use client";
import { CldImage } from 'next-cloudinary';

// By default, the CldImage component applies auto-format and auto-quality to all delivery URLs for optimized delivery.
export default function CloudinaryImage({ src, width = 500, height = 500, alt = "Cloudinary image" }: { src: string; width?: number; height?: number; alt?: string }) {
  return (
    <CldImage
      src={src} // Use this sample image or upload your own via the Media Library
      width={width} // Transform the image: auto-crop to square aspect_ratio
      height={height}
      crop="fill"
      gravity="auto"
      alt={alt}
    />
  );
}
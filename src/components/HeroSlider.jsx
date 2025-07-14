// interface HeroSliderProps extends React.HTMLAttributes<HTMLDivElement> {
//   images: {
//     src: string
//     alt: string
//   }[]
//   interval?: number // Interval in milliseconds for auto-sliding
// }

import { useEffect, useState } from "react";

export function HeroSlider({ images, interval = 5000, className, ...props }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    if (images.length <= 1) return; // No need for interval if only one image

    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, interval);

    return () => clearInterval(timer);
  }, [images.length, interval]);

  return (
    <div
      className={`relative h-screen w-full overflow-hidden ${className}`}
      {...props}
    >
      {images.map((image, index) => (
        <img
          key={image.src}
          src={image.src || "/placeholder.svg"}
          alt={image.alt}
          sizes="100vw"
          priority={index === 0} // Prioritize loading the first image
          className={`absolute inset-0 object-cover transition-opacity duration-1000 ease-in-out h-screen w-full
            ${index === currentImageIndex ? "opacity-100" : "opacity-0"} `}
        />
      ))}
      <div className="absolute inset-0 bg-black/50 z-10" />
      {/* Overlay for text readability */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            className={`
              h-2 w-2 rounded-full bg-white transition-all
              ${index === currentImageIndex ? "w-6" : "opacity-50"} `}
            aria-label={`Go to slide ${index + 1}`}
            onClick={() => setCurrentImageIndex(index)}
          />
        ))}
      </div>
    </div>
  );
}

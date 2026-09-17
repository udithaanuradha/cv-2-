"use client";

import { useState } from "react";
import Image from "next/image";

export default function Carousel({ images }: { images: string[] }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!images || images.length === 0) return (
    <div className="carousel-placeholder-empty">
      [Images will appear here once uploaded]
    </div>
  );

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="carousel-container">
      <div 
        className="carousel-images" 
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((src, index) => (
          <div className="carousel-slide" key={index}>
            <div className="carousel-image" style={{ backgroundImage: `url('${src}')` }} />
          </div>
        ))}
      </div>
      {images.length > 1 && (
        <>
          <button className="carousel-btn prev-btn" onClick={handlePrev} aria-label="Previous image">‹</button>
          <button className="carousel-btn next-btn" onClick={handleNext} aria-label="Next image">›</button>
          <div className="carousel-dots">
            {images.map((_, index) => (
              <button 
                key={index} 
                className={`carousel-dot ${index === currentIndex ? 'active' : ''}`} 
                onClick={() => setCurrentIndex(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

// src/ImageSlider.js
import React, { useState, useEffect } from "react";

const images = [
  "https://via.placeholder.com/600/92c952",
  "https://via.placeholder.com/600/771796",
  "https://via.placeholder.com/600/24f355",
  "https://via.placeholder.com/600/d32776",
];

const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      nextImage();
    }, 3000); // Change image every 5 seconds

    return () => clearInterval(intervalId); // Cleanup on unmount
  }, []);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  const goToImage = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="relative w-full max-w-[80%] h-[400px] mx-auto">
      <img
        src={images[currentIndex]}
        alt={`Slide ${currentIndex + 1}`}
        className="w-full h-auto rounded-lg"
      />
      <button
        onClick={prevImage}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 text-white bg-black bg-opacity-50 rounded-full p-2"
      >
        &#10094;
      </button>
      <button
        onClick={nextImage}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 text-white bg-black bg-opacity-50 rounded-full p-2"
      >
        &#10095;
      </button>
      <div className="flex justify-center mt-4">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goToImage(index)}
            className={`w-3 h-3 mx-1 rounded-full ${
              currentIndex === index ? "bg-blue-600" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;

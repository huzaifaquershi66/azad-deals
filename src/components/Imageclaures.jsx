import React, { useState, useEffect } from "react";

const ImageCarousel = () => {
  // List of images to display
  const images = [
    "https://enews.hamariweb.com/wp-content/uploads/2023/06/iphone-14-review-lead-social-1663099148.jpg",
    "https://enews.hamariweb.com/wp-content/uploads/2023/06/iphone-14-review-lead-social-1663099148.jpg",
    
    "https://enews.hamariweb.com/wp-content/uploads/2023/06/iphone-14-review-lead-social-1663099148.jpg",
    "https://enews.hamariweb.com/wp-content/uploads/2023/06/iphone-14-review-lead-social-1663099148.jpg",

  ];

  // State to manage the current image index
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Set an interval to automatically change the image every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval); // Clean up the interval on component unmount
  }, []);

  // Function to change the image manually (prev/next)
  const goToNext = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToPrev = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="w-full max-w-screen-xl mx-auto mt-8 px-4">
      {/* Image Carousel Div */}
      <div className="relative w-full h-80 bg-gray-200 rounded-lg overflow-hidden shadow-lg">
        <div
          className="flex transition-all duration-700 ease-in-out"
          style={{
            transform: `translateX(-${currentImageIndex * 100}%)`,
          }}
        >
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Carousel Image ${index + 1}`}
              className="w-full h-full object-cover"
            />
          ))}
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={goToPrev}
          className="absolute top-1/2 left-0 transform -translate-y-1/2 text-white bg-black bg-opacity-50 p-2 rounded-full z-10"
        >
          &#8249;
        </button>
        <button
          onClick={goToNext}
          className="absolute top-1/2 right-0 transform -translate-y-1/2 text-white bg-black bg-opacity-50 p-2 rounded-full z-10"
        >
          &#8250;
        </button>
      </div>
    </div>
  );
};

export default ImageCarousel;

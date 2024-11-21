import React, { useState, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlayCircle } from "@fortawesome/free-solid-svg-icons";

const VideoCarousel = () => {
  // List of video URLs
  const videoSrc =
    "https://videos.pexels.com/video-files/4232959/4232959-hd_1920_1080_24fps.mp4"; // Replace with your own video URL

  // State to manage hover state
  const [isHovered, setIsHovered] = useState(false);

  // Reference to the video element
  const videoRef = useRef(null);

  // Handle hover: play video when hovered, and pause when not hovered
  const handleMouseEnter = () => {
    if (videoRef.current) {
      videoRef.current.play();
      // Start the video from the interesting part, e.g., 10 seconds
      videoRef.current.currentTime = 10;
    }
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    if (videoRef.current) {
      videoRef.current.pause();
    }
    setIsHovered(false);
  };

  return (
    <div className="w-full max-w-screen-xl mx-auto mt-8 px-4">
      {/* Video Carousel Div */}
      <div className="relative w-full h-80 bg-gray-200 rounded-lg overflow-hidden shadow-xl transition-transform duration-300 ease-in-out transform hover:scale-105">
        {/* Play Icon Overlay */}
        {!isHovered && (
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white z-10 bg-black bg-opacity-40 p-3 rounded-full">
            <FontAwesomeIcon
              icon={faPlayCircle}
              size="3x"
              className="opacity-80"
            />
          </div>
        )}

        {/* Video Element */}
        <video
          ref={videoRef}
          src={videoSrc}
          className="w-full h-full object-cover"
          muted
          loop
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          preload="auto"
        />
      </div>
    </div>
  );
};

export default VideoCarousel;

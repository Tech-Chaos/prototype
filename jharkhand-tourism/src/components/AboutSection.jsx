import React, { useState } from "react";

const AboutSection = ({ about }) => {
  if (!about) return null;

  const { title, images } = about;
  const [currentIndex, setCurrentIndex] = useState(0);

  // Handle next and previous
  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );
  };

  // Get left, center, right images
  const leftIndex =
    (currentIndex - 1 + images.length) % images.length;
  const rightIndex = (currentIndex + 1) % images.length;

  return (
    <section className="bg-[#f5f0e6] py-12 px-6">
      {/* Title */}
      <h2 className="text-6xl font-serif text-[#4e2d18] mb-8 text-center">
        {title}
      </h2>

      {/* Carousel */}
      <div className="flex items-center justify-center gap-6">
        {/* Left image */}
        <img
          src={images[leftIndex]}
          alt="left"
          onClick={handlePrev}
          className="w-[200px] h-[350px] object-cover rounded-2xl shadow-md cursor-pointer opacity-70  transition-all duration-500"
        />

        {/* Center image */}
        <img
          src={images[currentIndex]}
          alt="center"
          className="w-[300px] h-[500px] object-cover rounded-2xl shadow-lg scale-105 transition-all duration-500"
        />

        {/* Right image */}
        <img
          src={images[rightIndex]}
          alt="right"
          onClick={handleNext}
          className="w-[200px] h-[350px] object-cover rounded-2xl shadow-md cursor-pointer opacity-70 transition-all duration-500"
        />
      </div>
    </section>
  );
};

export default AboutSection;

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
    <section className="bg-[#f5f0e6] py-8 sm:py-10 md:py-12 px-4 sm:px-6">
      {/* Title */}
      <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif text-[#4e2d18] mb-6 sm:mb-8 text-center">
        {title}
      </h2>

      {/* Carousel */}
      <div className="flex items-center justify-center gap-2 sm:gap-4 md:gap-6 overflow-hidden">
        {/* Left image */}
        <img
          src={images[leftIndex]}
          alt="left"
          onClick={handlePrev}
          className="w-[100px] sm:w-[150px] md:w-[200px] h-[180px] sm:h-[250px] md:h-[350px] object-cover rounded-xl sm:rounded-2xl shadow-md cursor-pointer opacity-70 transition-all duration-500 flex-shrink-0"
        />

        {/* Center image */}
        <img
          src={images[currentIndex]}
          alt="center"
          className="w-[150px] sm:w-[200px] md:w-[300px] h-[250px] sm:h-[350px] md:h-[500px] object-cover rounded-xl sm:rounded-2xl shadow-lg scale-105 transition-all duration-500 flex-shrink-0"
        />

        {/* Right image */}
        <img
          src={images[rightIndex]}
          alt="right"
          onClick={handleNext}
          className="w-[100px] sm:w-[150px] md:w-[200px] h-[180px] sm:h-[250px] md:h-[350px] object-cover rounded-xl sm:rounded-2xl shadow-md cursor-pointer opacity-70 transition-all duration-500 flex-shrink-0"
        />
      </div>
    </section>
  );
};

export default AboutSection;

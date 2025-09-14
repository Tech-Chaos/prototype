import React from "react";

const DiscoverySection = ({ discover }) => {
  if (!discover) return null;

  const { title, image, caption, description } = discover;

  return (
    <section className="bg-[#f5f0e6] py-12 sm:py-14 md:py-16 px-4 sm:px-6 md:px-8">
      {/* Title */}
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#4e2d18] text-center mb-8 sm:mb-10 md:mb-12">
        <span className="border-b-2 border-[#4e2d18]">{title}</span>
      </h2> 

      <div className="flex flex-col md:flex-row items-center justify-center gap-8 sm:gap-10 md:gap-12 max-w-5xl mx-auto">
        {/* Polaroid-style card with hover rotation */}
        <div className="bg-white rotate-[-13deg] shadow-lg rounded-lg p-3 sm:p-4 transform transition-transform duration-800 hover:rotate-[13deg] cursor-pointer flex-shrink-0">
          <img
            src={image}
            alt={caption}
            className="w-[220px] sm:w-[250px] md:w-[280px] h-[250px] sm:h-[280px] md:h-[320px] object-cover rounded-md"
          />
          <p className="mt-2 sm:mt-3 text-base sm:text-lg font-handwriting text-[#4e2d18] text-center">
            {caption}
          </p>
        </div>

        {/* Description */}
        <p className="text-base sm:text-lg leading-relaxed text-[#3a2a20] max-w-xl text-justify px-4 md:px-0" >
          {description}
        </p>
      </div>
    </section>
  );
};

export default DiscoverySection;

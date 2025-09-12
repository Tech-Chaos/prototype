import React from "react";

const DiscoverySection = ({ discover }) => {
  if (!discover) return null;

  const { title, image, caption, description } = discover;

  return (
    <section className="bg-[#f5f0e6] py-16 px-8">
      {/* Title */}
      <h2 className="text-5xl font-serif text-[#4e2d18] text-center mb-12">
        <span className="border-b-2 border-[#4e2d18]">{title}</span>
      </h2> 

      <div className="flex flex-col md:flex-row items-center justify-center gap-12 max-w-5xl mx-auto">
        {/* Polaroid-style card with hover rotation */}
        <div className="bg-white rotate-[-13deg] shadow-lg rounded-lg p-4 transform transition-transform duration-800 hover:rotate-[13deg] cursor-pointer">
          <img
            src={image}
            alt={caption}
            className="w-[280px] h-[320px] object-cover rounded-md"
          />
          <p className="mt-3 text-lg font-handwriting text-[#4e2d18] text-center">
            {caption}
          </p>
        </div>

        {/* Description */}
        <p className="text-lg leading-relaxed text-[#3a2a20] max-w-xl text-justify " >
          {description}
        </p>
      </div>
    </section>
  );
};

export default DiscoverySection;


import React from 'react';

const HeroSection = ({ hero }) => {
  if (!hero) return null;
  return (
    <section className="relative w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]">
      <img
        src={hero.image}
        alt={hero.title}
        className="w-screen h-[60vh] sm:h-[70vh] md:h-[80vh] object-cover block"
      />
      <div className="absolute top-[60%] sm:top-[70%] md:top-[480px] left-4 sm:left-6 md:left-8 text-white drop-shadow-lg max-w-[90%] sm:max-w-[80%] md:max-w-none">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">{hero.title}</h1>
        <p className="text-sm sm:text-lg md:text-xl lg:text-2xl mt-2">{hero.subtitle}</p>
      </div>
      <div className='text-[#4e2d18] text-lg sm:text-xl md:text-2xl lg:text-3xl mx-4 sm:mx-8 md:mx-12 lg:mx-20 text-center tracking-wide'>
        {hero.descriptionbold && <p className="font-bold m-4 sm:m-6 md:m-8">{hero.descriptionbold}</p>}
        {hero.description && <p className="m-4 sm:m-6 md:m-8">{hero.description}</p>}
      </div>
    </section>
  );
};

export default HeroSection;

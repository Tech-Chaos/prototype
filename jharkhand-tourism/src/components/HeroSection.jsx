
import React from 'react';

const HeroSection = ({ hero }) => {
  if (!hero) return null;
  return (
    <section className="relative w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] ">
      <img
        src={hero.image}
        alt={hero.title}
        className="w-screen h-[80vh] object-cover block"
      />
      <div className="absolute top-[480px] left-8 text-xl text-white drop-shadow-lg">
        <h1 className="text-5xl font-bold">{hero.title}</h1>
        <p className="text-2xl mt-2">{hero.subtitle}</p>
      </div>
      <div className='text-[#4e2d18] text-3xl mx-20 text-center tracking-wide '>
        {hero.descriptionbold && <p className=" font-bold m-8 ">{hero.descriptionbold}</p>}
        {hero.description && <p className="m-8">{hero.description}</p>}
      </div>
    </section>
  );
};

export default HeroSection;

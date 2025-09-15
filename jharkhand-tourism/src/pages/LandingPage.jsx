import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';

const JharkhandLandingPage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const carouselImages = [
    { id: 1, src: "/assets/Jonha_falls.jpg", alt: "Johna Falls", title: "Johna Falls", description: "Serene waterfall escape", link: "/place/johnafalls" },
    { id: 2, src: "/assets/Deoghar.webp", alt: "Deoghar", title: "Deoghar", description: "Sacred pilgrimage site", link: "/place/deoghar" },
    { id: 3, src: "/assets/HirniFalls.jpg", alt: "Hirni Falls", title: "Hirni Falls", description: "Hidden forest cascade", link: "/place/hirnifalls" },
    { id: 4, src: "/assets/jagannathTemple.jpg", alt: "Jagannath Mandir", title: "Jagannath Mandir", description: "Divine architecture", link: "/place/jagannathmandi" },
    { id: 5, src: "/assets/ranchiHills.jpg", alt: "Ranchi Hills", title: "Ranchi Hills", description: "Scenic hill views", link: "/place/ranchihills" },
    { id: 6, src: "/assets/wildlifeSanctuary.webp", alt: "Wildlife Sanctuary", title: "Wildlife Sanctuary", description: "Diverse flora and fauna", link: "/place/wildlife" },
  ];

  const rotateCarousel = (direction) => {
    if (direction === 'next') {
      setCurrentIndex((prev) => (prev + 1) % carouselImages.length);
    } else {
      setCurrentIndex((prev) => (prev - 1 + carouselImages.length) % carouselImages.length);
    }
  };

  const getVisibleImages = () => {
    const visible = [];
    for (let i = 0; i < 3; i++) {
      const index = (currentIndex + i) % carouselImages.length;
      visible.push({...carouselImages[index], position: i});
    }
    return visible;
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <section className="relative h-screen overflow-hidden">
        <img 
          src="/assets/herosectionbg.png"
          alt="Jharkhand landscape"
          className="absolute inset-0 w-full h-full object-cover z-10"
          onError={(e) => {
            console.log('Hero image failed to load, using fallback');
            e.target.src = "https://picsum.photos/1600/900";
          }}
        />

        {/* JHARKHAND text below image with z-index -1 */}
        <div className="absolute inset-0 -z-10 flex items-center justify-center">
          <h1 className="text-[14rem] md:text-[18rem] font-bold text-black tracking-wider select-none pointer-events-none">
            JHARKHAND
          </h1>
        </div>

        <div className="absolute inset-0 bg-black/25 z-20"></div>
        
        <div className="absolute inset-0 z-30 flex flex-col justify-center items-center text-center pt-48">
          <button className="bg-black/60 backdrop-blur-sm text-white px-10 py-5 rounded-full font-semibold text-lg hover:bg-black/70 transition-all duration-300 shadow-2xl border border-white/20 hover:shadow-white/10 hover:scale-105 transform text-shadow-lg">
            Experience Jharkhand like never before
          </button>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="max-w-[1240px] mx-auto px-8">
          <h2 className="text-[54px] font-bold text-center mb-16 text-black">EXPLORE</h2>
          
          <div className="relative flex justify-center items-end min-h-[500px]">
            {/* Semicircle Background with linear gradient - positioned at the bottom */}
            <div className="absolute bottom-0 w-[700px] h-[300px] rounded-t-full bg-gradient-to-br from-[#957C66] via-[#A0856B] to-[#8B7355] opacity-40"></div>
            <div className="absolute bottom-0 w-[650px] h-[280px] rounded-t-full bg-gradient-to-br from-[#957C66] via-[#C6AE95] to-[#A78669] opacity-50"></div>
            
            {/* Images Container - positioned above semicircle */}
            <div className="relative flex items-end justify-center space-x-8 z-10 mb-16">
              {getVisibleImages().map((image, idx) => {
                const isCenter = idx === 1;
                return (
                  <div
                    key={`${image.id}-${idx}`}
                    className={`relative transition-all duration-500 ${
                      isCenter 
                        ? 'transform scale-125 z-20 -translate-y-12' 
                        : 'transform scale-90 opacity-70'
                    }`}
                  >
                    <div className={`relative ${isCenter ? 'w-72 h-96' : 'w-48 h-60'} rounded-xl overflow-hidden shadow-2xl`}>
                      <img 
                        src={image.src}
                        alt={image.alt}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    </div>
                    
                    {isCenter && (
                      <div className="absolute bottom-4 left-4 right-4 text-white">
                        <h3 className="text-xl font-bold mb-2 drop-shadow-lg text-shadow">{image.title}</h3>
                        <p className="text-sm mb-3 opacity-90 drop-shadow-md">{image.description}</p>
                        <Link 
                          to={image.link}
                          className="inline-block bg-white/20 backdrop-blur-sm text-white px-6 py-2 rounded-full text-sm font-bold hover:bg-white/30 transition-colors drop-shadow-lg text-shadow border border-white/40 hover:scale-105 transform duration-200"
                        >
                          Explore More →
                        </Link>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Navigation Controls - positioned in semicircle area */}
            <button 
              onClick={() => rotateCarousel('prev')}
              className="absolute bottom-12 left-[calc(50%-120px)] bg-white/90 text-[#957C66] p-4 rounded-full hover:bg-white hover:text-[#7D664D] transition-all duration-300 z-30 shadow-xl border-2 border-[#957C66]/30 hover:border-[#7D664D] hover:scale-110 transform"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            <button 
              onClick={() => rotateCarousel('next')}
              className="absolute bottom-12 right-[calc(50%-120px)] bg-white/90 text-[#957C66] p-4 rounded-full hover:bg-white hover:text-[#7D664D] transition-all duration-300 z-30 shadow-xl border-2 border-[#957C66]/30 hover:border-[#7D664D] hover:scale-110 transform"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
            
            {/* Indicator Dots - in semicircle area */}
            <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-3 z-30">
              {carouselImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-4 h-4 rounded-full transition-all duration-300 hover:scale-110 ${
                    index === currentIndex 
                      ? 'bg-white shadow-lg ring-2 ring-[#957C66]' 
                      : 'bg-white/60 hover:bg-white/80'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#F5E6D3] py-20 px-8">
        <div className="max-w-[1240px] mx-auto flex items-center justify-between gap-16">
          <div className="flex-1">
            <p className="text-[#8B4513] mb-4 font-medium">
              Discover the heart of Jharkhand
            </p>
            
            <h3 className="text-[52px] font-bold italic text-black mb-8 leading-[1.05]">
              JHARKHAND<br />BAZAAR
            </h3>
            
            <p className="text-[#4B5563] leading-[1.7] mb-8 w-[65%] text-base">
              Explore unique handmade products crafted by Jharkhand's skilled artisans — 
              from vibrant textiles and intricate jewelry to exquisite pottery and more. 
              Every purchase supports local communities and keeps heritage alive.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                to="/bazaar"
                className="inline-block bg-[#A0856B] text-white px-8 py-3 rounded-full font-medium hover:bg-[#8B7355] transition-all duration-300 text-center"
              >
                Shop Now
              </Link>
              
              <Link 
                to="/itinerary"
                className="inline-block bg-white text-[#A0856B] border-2 border-[#A0856B] px-8 py-3 rounded-full font-medium hover:bg-[#A0856B] hover:text-white transition-all duration-300 text-center"
              >
                Plan Your Trip
              </Link>
            </div>
          </div>

          <div className="flex items-center space-x-6">
            <img 
              src="https://picsum.photos/seed/bazaar-mask-1/140/240"
              alt="Traditional craft 1"
              className="w-[90px] h-[160px] object-cover rounded-[14px] shadow-md"
            />
            <img 
              src="https://picsum.photos/seed/bazaar-mask-2/140/240"
              alt="Traditional craft 2"
              className="w-[90px] h-[160px] object-cover rounded-[14px] shadow-md"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default JharkhandLandingPage;
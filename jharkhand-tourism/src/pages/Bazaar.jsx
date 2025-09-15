import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Bazaar = () => {
  const [hoveredNav, setHoveredNav] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoRotating, setIsAutoRotating] = useState(true);
  const [showTerracottaDetail, setShowTerracottaDetail] = useState(false);

  // Hero carousel images
  const heroImages = [
    {
      id: 1,
      src: "/assets/herosectionbg.png",
      fallback: "https://picsum.photos/seed/jh-hero-1/1600/900",
      alt: "Jharkhand Bazaar Hero 1"
    },
    {
      id: 2,
      src: "/assets/bazaar-hero-2.jpg",
      fallback: "https://picsum.photos/seed/jh-hero-2/1600/900",
      alt: "Jharkhand Bazaar Hero 2"
    },
    {
      id: 3,
      src: "/assets/bazaar-hero-3.jpg",
      fallback: "https://picsum.photos/seed/jh-hero-3/1600/900",
      alt: "Jharkhand Bazaar Hero 3"
    }
  ];

  // Navigation items with routes
  const navItems = [
    { label: 'Home', path: '/' },
    { label: 'Destinations', path: '/' },
    { label: 'Experience', path: '/' },
    { label: 'Plan your trip', path: '/itinerary' },
    { label: 'Shop Now', path: '/bazaar' }
  ];

  // Auto-rotation effect with accessibility considerations
  useEffect(() => {
    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      setIsAutoRotating(false);
      return;
    }

    let interval;
    if (isAutoRotating) {
      interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % heroImages.length);
      }, 6000); // 6 second delay
    }

    return () => clearInterval(interval);
  }, [isAutoRotating, heroImages.length]);

  const nextSlide = () => {
    setIsAutoRotating(false);
    setCurrentSlide((prev) => (prev + 1) % heroImages.length);
  };

  const prevSlide = () => {
    setIsAutoRotating(false);
    setCurrentSlide((prev) => (prev - 1 + heroImages.length) % heroImages.length);
  };

  const goToSlide = (index) => {
    setIsAutoRotating(false);
    setCurrentSlide(index);
  };

  const toggleAutoRotation = () => {
    setIsAutoRotating(!isAutoRotating);
  };

  const handleImageError = (e, fallbackSrc) => {
    e.target.src = fallbackSrc;
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-2 sm:top-4 left-1/2 transform -translate-x-1/2 z-50 w-[95%] sm:w-[90%] max-w-[1100px]">
        <nav 
          className="relative bg-gradient-to-b from-[#C6AE95] to-[#A78669] rounded-full h-12 sm:h-14 px-3 sm:px-6 shadow-[0_12px_28px_rgba(0,0,0,0.16)]"
          role="navigation"
          aria-label="Main navigation"
        >
          <div className="flex items-center justify-center h-full space-x-2 sm:space-x-4 lg:space-x-8">
            {navItems.map((item, index) => (
              <div 
                key={item.label}
                className="relative"
                onMouseEnter={() => setHoveredNav(index)}
                onMouseLeave={() => setHoveredNav(null)}
              >
                {/* Hover chip */}
                {hoveredNav === index && (
                  <div className="absolute inset-0 bg-white/90 rounded-full w-[70px] sm:w-[90px] h-[36px] sm:h-[42px] -top-1 -left-2 sm:-left-3 shadow-md transition-all duration-200 ease-out" />
                )}
                
                {/* Navigation Link */}
                <Link
                  to={item.path}
                  className={`relative z-10 text-sm sm:text-base lg:text-lg font-semibold transition-colors duration-200 ${
                    hoveredNav === index 
                      ? 'text-[#8C6E56]' 
                      : 'text-white/95'
                  }`}
                >
                  {item.label}
                </Link>
              </div>
            ))}
          </div>
        </nav>
      </header>

      {/* Hero Section with Carousel */}
      <section 
        className="relative h-screen overflow-hidden"
        role="region"
        aria-roledescription="carousel"
        aria-label="Jharkhand Bazaar Hero Images"
        onMouseEnter={() => setIsAutoRotating(false)}
        onMouseLeave={() => {
          if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
            setIsAutoRotating(true);
          }
        }}
      >
        {/* Layer 1: Watermark text behind image */}
        <div className="absolute inset-0 z-0 flex items-center justify-center">
          <h1 className="text-[4rem] sm:text-[6rem] md:text-[8rem] lg:text-[12rem] xl:text-[16rem] font-bold text-black/10 tracking-widest select-none pointer-events-none">
            JHARKHAND
          </h1>
        </div>

        {/* Layer 2: Hero carousel images */}
        <div className="absolute inset-0 z-10">
          {heroImages.map((image, index) => (
            <div
              key={image.id}
              role="group"
              aria-roledescription="slide"
              aria-label={`${index + 1} of ${heroImages.length}`}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentSlide ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <img 
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover"
                onError={(e) => handleImageError(e, image.fallback)}
              />
            </div>
          ))}
        </div>

        {/* Layer 3: Semi-transparent overlay */}
        <div className="absolute inset-0 z-20 bg-black/20"></div>

        {/* Layer 4: Foreground content */}
        <div className="absolute inset-0 z-30 flex flex-col justify-center items-center text-center text-white">
          <p className="text-xl md:text-2xl font-light mb-8 tracking-wide">
            Authentic Handicrafts | Tribal Treasures | Local Flavors
          </p>
        </div>

        {/* Carousel Controls */}
        <button 
          onClick={prevSlide}
          className="absolute left-6 top-1/2 transform -translate-y-1/2 z-40 bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/30 transition-colors"
          aria-label="Previous image"
          aria-controls="hero-carousel"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <button 
          onClick={nextSlide}
          className="absolute right-6 top-1/2 transform -translate-y-1/2 z-40 bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/30 transition-colors"
          aria-label="Next image"
          aria-controls="hero-carousel"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Play/Pause Control */}
        <button
          onClick={toggleAutoRotation}
          className="absolute bottom-20 right-6 z-40 bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full hover:bg-white/30 transition-colors text-sm font-medium"
          aria-label={isAutoRotating ? "Stop Automatic Slide Show" : "Start Automatic Slide Show"}
        >
          {isAutoRotating ? '⏸️ Pause' : '▶️ Play'}
        </button>

        {/* Slide Indicators */}
        <div 
          className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-40 flex space-x-2"
          role="tablist"
          aria-label="Choose slide to display"
        >
          {heroImages.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              role="tab"
              aria-selected={index === currentSlide}
              aria-controls={`slide-${index}`}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentSlide ? 'bg-white' : 'bg-white/50'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </section>

      {/* Main Content - Bazaar Section */}
      <main className="py-20">
        <div className="max-w-7xl mx-auto px-8">
          {/* Title Section */}
          <div className="text-center mb-16">
            <h2 className="text-6xl md:text-7xl font-bold tracking-wider mb-4" style={{ fontFamily: 'serif' }}>
              JHARKHAND<br />BAZAAR
            </h2>
            <p className="text-lg text-gray-600 tracking-wide uppercase">
              Authentic Handicrafts | Tribal Treasures | Local Flavors
            </p>
          </div>

          {/* Product Tiles Row */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {/* Left tile - Dokra Art */}
            <div className="bg-white rounded-[22px] shadow-lg overflow-hidden">
              <div className="aspect-square">
                <img 
                  src="https://picsum.photos/seed/dokra/600/600"
                  alt="Dokra Art"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-2xl font-bold text-gray-900">Dokra Art</h3>
              </div>
            </div>

            {/* Right tile - Terracotta */}
            <div className="bg-white rounded-[22px] shadow-lg overflow-hidden">
              <div className="aspect-square">
                <img 
                  src="https://picsum.photos/seed/terracotta/600/600"
                  alt="Terracotta"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6 text-right">
                <h3 className="text-2xl font-bold text-gray-900">Terracotta</h3>
              </div>
            </div>
          </div>

          {/* Featured Card - Terracotta Jewelry */}
          <div className="bg-gradient-to-r from-[#F5E6D3] to-[#E8D5C1] rounded-[24px] shadow-lg p-8 mb-16">
            <div className="flex flex-col md:flex-row items-center gap-8">
              {/* Product image container */}
              <div className="w-[240px] h-[240px] bg-white rounded-[20px] shadow-sm flex items-center justify-center p-4">
                <img 
                  src="https://picsum.photos/seed/terracotta-jewelry/300/300"
                  alt="Terracotta Jewelry"
                  className="w-full h-full object-cover rounded-[16px]"
                />
              </div>

              {/* Content */}
              <div className="flex-1">
                <h3 className="text-3xl font-bold text-gray-900 mb-4">Terracotta Jewelry</h3>
                <p className="text-gray-700 leading-relaxed mb-6 text-lg">
                  Discover the ancient art of terracotta jewelry crafting, where skilled artisans 
                  transform humble clay into exquisite ornaments. Each piece tells a story of 
                  Jharkhand's rich cultural heritage and timeless traditions.
                </p>

                {/* Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="bg-[#A0856B] text-white px-8 py-3 rounded-full font-medium hover:bg-[#8B7355] transition-colors shadow-md">
                    Add to cart
                  </button>
                  <button 
                    onClick={() => setShowTerracottaDetail(true)}
                    className="bg-gray-100 text-gray-700 px-8 py-3 rounded-full font-medium hover:bg-gray-200 transition-colors shadow-md flex items-center justify-center gap-2"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Learn more
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Product Carousel */}
          <div className="mb-16">
            <h3 className="text-4xl font-bold text-center mb-12 text-gray-900">Explore More Crafts</h3>
            
            <div className="overflow-x-auto scrollbar-hide">
              <div className="flex space-x-6 pb-4 min-w-max px-4">
                {[
                  { name: 'Dokra Art', desc: 'Ancient metal casting', seed: 'dokra' },
                  { name: 'Terracotta', desc: 'Clay artistry traditions', seed: 'terracotta' },
                  { name: 'Bamboo Crafts', desc: 'Sustainable creations', seed: 'bamboo' },
                  { name: 'Tribal Textiles', desc: 'Woven heritage stories', seed: 'textiles' },
                  { name: 'Stone Carvings', desc: 'Sculpted masterpieces', seed: 'stone' },
                  { name: 'Lac Jewelry', desc: 'Natural resin beauty', seed: 'lac' }
                ].map((craft, index) => (
                  <div 
                    key={craft.name}
                    className="w-[240px] h-[300px] bg-white rounded-[20px] shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer flex-shrink-0"
                  >
                    <div className="aspect-square rounded-t-[20px] overflow-hidden">
                      <img 
                        src={`https://picsum.photos/seed/${craft.seed}/600/600`}
                        alt={craft.name}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </div>
                    <div className="p-6">
                      <h4 className="text-xl font-bold text-gray-900 mb-2">{craft.name}</h4>
                      <p className="text-gray-600 text-sm">{craft.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-[#3D2914] text-white py-16">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid md:grid-cols-3 gap-12">
            {/* About Column */}
            <div>
              <h4 className="text-xl font-bold mb-6">About</h4>
              <ul className="space-y-3">
                <li><a href="#" className="hover:text-[#C6AE95] transition-colors">Our Story</a></li>
                <li><a href="#" className="hover:text-[#C6AE95] transition-colors">Artisan Partners</a></li>
                <li><a href="#" className="hover:text-[#C6AE95] transition-colors">Cultural Heritage</a></li>
                <li><a href="#" className="hover:text-[#C6AE95] transition-colors">Sustainability</a></li>
              </ul>
            </div>

            {/* Tourism Services Column */}
            <div>
              <h4 className="text-xl font-bold mb-6">Tourism Services</h4>
              <ul className="space-y-3">
                <li><a href="#" className="hover:text-[#C6AE95] transition-colors">Craft Workshops</a></li>
                <li><a href="#" className="hover:text-[#C6AE95] transition-colors">Village Tours</a></li>
                <li><a href="#" className="hover:text-[#C6AE95] transition-colors">Cultural Experiences</a></li>
                <li><a href="#" className="hover:text-[#C6AE95] transition-colors">Guided Shopping</a></li>
              </ul>
            </div>

            {/* Get in Touch Column */}
            <div>
              <h4 className="text-xl font-bold mb-6">Get in Touch</h4>
              <ul className="space-y-3">
                <li className="flex items-center gap-2">
                  <span>📧</span>
                  <span>info@jharkhanbazaar.com</span>
                </li>
                <li className="flex items-center gap-2">
                  <span>📞</span>
                  <span>+91 9876 543 210</span>
                </li>
                <li className="flex items-center gap-2">
                  <span>📍</span>
                  <span>Ranchi, Jharkhand, India</span>
                </li>
                <li className="flex items-center gap-2">
                  <span>🕒</span>
                  <span>Mon-Sat: 9AM-7PM</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>

      {/* Terracotta Detail Modal/Section */}
      {showTerracottaDetail && (
        <div 
          className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4"
          onClick={() => setShowTerracottaDetail(false)}
        >
          <div 
            className="bg-[#B87256] max-w-4xl w-full max-h-[90vh] overflow-y-auto rounded-t-[24px] shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button 
              onClick={() => setShowTerracottaDetail(false)}
              className="absolute top-4 right-4 bg-white/20 text-white p-2 rounded-full hover:bg-white/30 transition-colors z-10"
              aria-label="Close detail view"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Title with decorative icons */}
            <div className="relative text-center py-12">
              <div className="absolute top-4 left-8 text-4xl">🎭</div>
              <div className="absolute top-4 right-8 text-4xl">🏺</div>
              <h2 className="text-6xl font-bold text-white" style={{ fontFamily: 'serif' }}>
                TERRACOTTA
              </h2>
            </div>

            {/* Content sections */}
            <div className="px-8 pb-8 space-y-8">
              <div className="bg-white rounded-[20px] p-8">
                <div className="flex flex-col md:flex-row gap-8">
                  <div className="md:w-2/3">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Ancient Art, Modern Appeal</h3>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      Terracotta, meaning "baked earth" in Italian, represents one of humanity's oldest 
                      artistic traditions. In Jharkhand, this ancient craft has been passed down through 
                      generations of skilled artisans who transform simple clay into extraordinary works of art.
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                      Each piece begins as raw earth, carefully selected and prepared using traditional methods. 
                      The clay is shaped by hand, often without the use of pottery wheels, demonstrating the 
                      remarkable skill and intuition of the craftspeople.
                    </p>
                  </div>
                  <div className="md:w-1/3">
                    <img 
                      src="https://picsum.photos/seed/terracotta-process/400/300"
                      alt="Terracotta making process"
                      className="w-full h-full object-cover rounded-[16px]"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-[20px] p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Cultural Significance</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Beyond their aesthetic beauty, terracotta pieces hold deep cultural significance in 
                  Jharkhand's tribal communities. They serve not only as decorative items but also as 
                  functional pottery, ritualistic objects, and symbols of prosperity and protection.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  The motifs and patterns found in Jharkhand terracotta reflect the region's rich 
                  mythology, natural environment, and spiritual beliefs, making each piece a window 
                  into the soul of tribal Jharkhand.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
};

export default Bazaar;

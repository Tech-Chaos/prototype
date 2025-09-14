import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-[#C6AE95] to-[#A78669] shadow-lg fixed top-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="text-white text-xl font-bold">
            Jharkhand Tourism
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <Link to="/" className="text-white hover:text-[#8C6E56] px-3 py-2 rounded-md text-sm font-medium transition-colors">
              Home
            </Link>
            <Link to="/destinations" className="text-white hover:text-[#8C6E56] px-3 py-2 rounded-md text-sm font-medium transition-colors">
              Destinations
            </Link>
            <Link to="/experience" className="text-white hover:text-[#8C6E56] px-3 py-2 rounded-md text-sm font-medium transition-colors">
              Experience
            </Link>
            <Link to="/itinerary" className="text-white hover:text-[#8C6E56] px-3 py-2 rounded-md text-sm font-medium transition-colors">
              Plan Your Trip
            </Link>
            <Link to="/bazaar" className="text-white hover:text-[#8C6E56] px-3 py-2 rounded-md text-sm font-medium transition-colors">
              Bazaar
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white hover:text-[#8C6E56] focus:outline-none"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <Link to="/" className="text-white hover:text-[#8C6E56] block px-3 py-2 rounded-md text-base font-medium">
                Home
              </Link>
              <Link to="/destinations" className="text-white hover:text-[#8C6E56] block px-3 py-2 rounded-md text-base font-medium">
                Destinations
              </Link>
              <Link to="/experience" className="text-white hover:text-[#8C6E56] block px-3 py-2 rounded-md text-base font-medium">
                Experience
              </Link>
              <Link to="/itinerary" className="text-white hover:text-[#8C6E56] block px-3 py-2 rounded-md text-base font-medium">
                Plan Your Trip
              </Link>
              <Link to="/bazaar" className="text-white hover:text-[#8C6E56] block px-3 py-2 rounded-md text-base font-medium">
                Bazaar
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar
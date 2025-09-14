import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="w-full flex justify-center py-4">
      {/* Bar wrapper with outer shadow and capsule design */}
      <div className="relative max-w-[1100px] w-[85%] rounded-full shadow-[0_12px_28px_rgba(0,0,0,0.16)]">
        {/* Gradient bar */}
        <div className="rounded-full bg-gradient-to-b from-[#C6AE95] to-[#A78669] px-6 py-3 h-[56px]">
          <nav className="flex items-center justify-between h-full">
            {/* Home - Nav Item */}
            <div className="relative group">
              {/* Hover chip - appears only on hover */}
              <span className="absolute -left-3 -top-2 h-[42px] w-[86px] rounded-full bg-white/90 shadow-sm opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 transition-opacity duration-200 z-0" />
              <a
                href="#home"
                className="relative z-10 px-4 py-2 text-[18px] font-semibold text-white/95 group-hover:text-[#8C6E56] group-focus:text-[#8C6E56] transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-white/60 rounded"
              >
                Home
              </a>
            </div>

            {/* Destinations - Nav Item */}
            <div className="relative group">
              {/* Hover chip - appears only on hover */}
              <span className="absolute -left-3 -top-2 h-[42px] w-[96px] rounded-full bg-white/90 shadow-sm opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 transition-opacity duration-200 z-0" />
              <a
                href="#destinations"
                className="relative z-10 px-4 py-2 text-[18px] font-semibold text-white/95 group-hover:text-[#8C6E56] group-focus:text-[#8C6E56] transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-white/60 rounded"
              >
                Destinations
              </a>
            </div>

            {/* Experience - Nav Item */}
            <div className="relative group">
              {/* Hover chip - appears only on hover */}
              <span className="absolute -left-3 -top-2 h-[42px] w-[90px] rounded-full bg-white/90 shadow-sm opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 transition-opacity duration-200 z-0" />
              <a
                href="#experience"
                className="relative z-10 px-4 py-2 text-[18px] font-semibold text-white/95 group-hover:text-[#8C6E56] group-focus:text-[#8C6E56] transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-white/60 rounded"
              >
                Experience
              </a>
            </div>

            {/* Plan your trip - Nav Item */}
            <div className="relative group">
              {/* Hover chip - appears only on hover */}
              <span className="absolute -left-3 -top-2 h-[42px] w-[110px] rounded-full bg-white/90 shadow-sm opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 transition-opacity duration-200 z-0" />
              <Link
                to="/itinerary"
                className="relative z-10 px-4 py-2 text-[18px] font-semibold text-white/95 group-hover:text-[#8C6E56] group-focus:text-[#8C6E56] transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-white/60 rounded"
              >
                Plan your trip
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Header;

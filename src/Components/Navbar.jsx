import { Gite, GitHub, LinkedIn } from '@mui/icons-material';
import React, { useState, useRef } from 'react';
import logo from '../Assets/icon.png'; // Adjust path according to your project structure

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const handleMouseEnter = () => {
    setIsDropdownOpen(true);
  };

  const handleMouseLeave = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsDropdownOpen(false);
    }
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsDropdownOpen(false);
    }
  };

  React.useEffect(() => {
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <div className="mb-12">
      <div className="flex items-center justify-between px-6 py-3.5 bg-gray-900 rounded-full">
        {/* Logo Section */}
        <div className="w-auto">
          <div className="flex flex-wrap items-center">
            <div className="w-auto">
              <a href="#">
                <img src={logo} alt="Zanrly Logo" className="h-8 w-8" /> {/* Adjust class for size */}
              </a>
            </div>
          </div>
        </div>

        {/* Desktop Links */}
        <div className="w-auto hidden lg:block">
          <ul className="flex items-center justify-center space-x-9">
            <li>
              <a className="inline-block text-sm font-bold text-gray-200 hover:text-gray-300" href="#">About</a>
            </li>
            <li
              className="relative"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <a className="inline-block text-sm font-bold text-gray-200 hover:text-gray-300 cursor-pointer" href='/projects'>Projects</a>
              {isDropdownOpen && (
                <ul
                  className="absolute bg-gray-900 text-gray-200 mt-2 space-y-2 rounded-lg shadow-lg py-2 px-4 w-48"
                  ref={dropdownRef}
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <li>
                    <a href="#" className="block text-sm hover:text-gray-300">Project 1</a>
                  </li>
                  <li>
                    <a href="#" className="block text-sm hover:text-gray-300">Project 2</a>
                  </li>
                  <li>
                    <a href="#" className="block text-sm hover:text-gray-300">Project 3</a>
                  </li>
                </ul>
              )}
            </li>
            <li>
              <a className="inline-block text-sm font-bold text-gray-200 hover:text-gray-300" href="#">Services</a>
            </li>
          </ul>
        </div>

        {/* Call to Action buttons (Desktop) */}
        <div className="w-auto hidden lg:block">
          <div className="flex items-center space-x-2">
            <a
              className="px-4 py-2.5 text-sm font-bold text-white bg-gray-900 hover:bg-orange-700 rounded-full"
              href="https://github.com/Santosharawn7" // Replace with your GitHub profile link
              target="_blank"
              rel="noopener noreferrer"
            >
              <GitHub />
            </a>
            <a
              className="px-4 py-2.5 text-sm font-bold text-white bg-gray-900 hover:bg-blue-600 rounded-full"
              href="https://www.linkedin.com/in/santosh-bohara-4b04a0140/" // Replace with your LinkedIn profile link
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedIn />
            </a>
          </div>
        </div>

        {/* Mobile Menu Icon */}
        <div className="w-auto lg:hidden">
          <a
            className="navbar-burger inline-block"
            href="#"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg className="text-blue-500" width="45" height="45" viewBox="0 0 56 56" fill="none">
              <rect width="56" height="56" rx="28" fill="currentColor"></rect>
              <path d="M37 32H19M37 24H19" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
            </svg>
          </a>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div id="mobile-menu" className="bg-gray-900 rounded-lg mt-2">
          <ul className="flex flex-col space-y-2 p-4">
            <li>
              <a className="block text-gray-200 text-sm font-bold hover:text-gray-300" href="">About</a>
            </li>
            <li>
              <a className="block text-gray-200 text-sm font-bold hover:text-gray-300" href="#">Projects</a>
            </li>
            <li>
              <a className="block text-gray-200 text-sm font-bold hover:text-gray-300" href="#">Services</a>
            </li>
            <li className="flex space-x-2">
              <a
                className="px-4 py-2.5 text-sm font-bold text-white bg-gray-900 hover:bg-orange-700 rounded-full flex items-center"
                href="https://github.com/Santosharawn7" // Replace with your GitHub profile link
                target="_blank"
                rel="noopener noreferrer"
              >
                <GitHub />
              </a>
              <a
                className="px-4 py-2.5 text-sm font-bold text-white bg-gray-900 hover:bg-blue-600 rounded-full flex items-center"
                href="https://www.linkedin.com/in/santosh-bohara-4b04a0140/" // Replace with your LinkedIn profile link
                target="_blank"
                rel="noopener noreferrer"
              >
                <LinkedIn />
              </a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;

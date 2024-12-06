

'use client';
import React, { useState } from 'react';
import { IoIosArrowDown } from 'react-icons/io'; // Dropdown arrow icon

const Sale = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen((prevState) => !prevState);
  };

  return (
    <div>
      <div className="bg-[#000000] text-white w-full  h-[48px] flex items-center justify-between px-4">
        {/* Centered sale text */}
        <div className="flex-1 text-center">
          <p className="text-xs sm:text-sm lg:text-base">
            Summer Sale For All Swim Suits And Free Express Delivery - 50% OFF!{' '}
            <span className="text-yellow-400 cursor-pointer">Shop Now</span>
          </p>
        </div>

        {/* Language selection */}
        <div className="relative flex items-center gap-2 cursor-pointer text-xs sm:text-sm lg:text-base ml-4">
          <span className="text-white">English</span>
          <IoIosArrowDown
            className="text-white text-lg"
            onClick={toggleDropdown}
          />

          {/* Dropdown menu */}
          {isDropdownOpen && (
            <div className="absolute top-[48px] right-0 bg-white text-black shadow-md rounded-md w-[120px] z-10">
              <ul className="p-2">
                <li className="hover:bg-gray-200 p-2 cursor-pointer">English</li>
                <li className="hover:bg-gray-200 p-2 cursor-pointer">Spanish</li>
                <li className="hover:bg-gray-200 p-2 cursor-pointer">French</li>
                <li className="hover:bg-gray-200 p-2 cursor-pointer">German</li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Sale;


'use client'

import React, { useState } from "react";
import { AiOutlineSearch, AiOutlineHeart, AiOutlineShoppingCart } from "react-icons/ai";

import Link from "next/link";
const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div>
      <header className="text-gray-600 body-font bg-white shadow-md">
        <div className="container mx-auto flex p-3 justify-between items-center px-4 sm:px-6 md:px-8">
          {/* Logo Section */}
          <h1 className="sm:text-2xl text-xl mt-2  font-bold text-gray-900 mb-4 md:mb-0">
            Exclusive
          </h1>

          {/* Navigation Links for Desktop */}
          <nav className="md:ml-auto md:mr-auto flex-wrap items-center text-base justify-center space-x-5 hidden md:flex">
            <Link href={'/'} className="mr-5 hover:text-gray-900">Home</Link>
            <Link href={'/contact'} className="mr-5 hover:text-gray-900">Contact</Link>
            <Link href={'/about'} className="mr-5 hover:text-gray-900">About</Link>
            <Link href={'/signup'} className="mr-5 hover:text-gray-900">Sign up</Link>
            <Link href={'/login'} className="mr-5 hover:text-gray-900">Log in</Link>
          </nav>

          {/* Search Bar, Wishlist Icon, Cart Icon, Hamburger Menu for Mobile */}
          <div className="flex items-center gap-4">
            {/* Search Bar */}
            <div className="relative hidden md:block">
              <input
                type="text"
                placeholder="Search..."
                className="bg-gray-100 rounded-lg px-4 py-2 w-48 focus:outline-none focus:ring-2 focus:ring-gray-300"
              />
              <AiOutlineSearch
                className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-500"
                size={20}
              />
            </div>

            {/* Wishlist Icon */}
            <Link href={'/wishlist'}>
            <AiOutlineHeart className="text-gray-600 hover:text-gray-900 cursor-pointer" size={24} />
            </Link>

            {/* Cart Icon */}
            <Link href={'/cart'}>
            <AiOutlineShoppingCart className="text-gray-600 hover:text-gray-900 cursor-pointer" size={24} />
            </Link>

            {/* Hamburger Menu Icon for Mobile */}
            <button
              className="text-gray-600 md:hidden flex items-center"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Links */}
        {menuOpen && (
          <nav className="md:hidden flex flex-col items-center bg-gray-50 p-4 space-y-4">
            <Link href={"/"} className="hover:text-gray-900">Home</Link>
            <Link href={"/contact"} className="hover:text-gray-900">Contact</Link>
            <Link href={"/about"} className="hover:text-gray-900">About</Link>
            <Link href={"/signup"} className="hover:text-gray-900">Sign up</Link>
            <Link href={'/login'} className="mr-5 hover:text-gray-900">Log in</Link>
            <button
              className="mt-4 text-gray-600"
              onClick={() => setMenuOpen(false)}
            >
              Close Menu
            </button>
          </nav>
        )}
      </header>
    </div>
  );
};

export default Header;

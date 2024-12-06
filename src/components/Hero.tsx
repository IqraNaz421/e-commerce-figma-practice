
'use client'
import Link from "next/link";
import Image from "next/image";
import { FaAngleRight, FaApple, FaCaretDown, FaCaretUp } from "react-icons/fa";
import { GoArrowRight } from "react-icons/go";
import { useState } from "react";

function Hero() {
  // State for managing the sidebar toggle in mobile view
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="flex flex-col lg:flex-row gap-10 lg:mx-auto mx-4 mb-20 max-w-screen-xl px-4 sm:px-6 md:px-8">
      {/* Sidebar Section */}
      <div className="lg:w-[250px] w-full">
        {/* Mobile toggle button */}
        <div className="flex justify-between items-center lg:hidden mt-6 mb-2">
          <h3 className="text-lg font-semibold">Categories</h3>
          <button
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="text-xl"
          >
            {isSidebarOpen ? <FaCaretUp /> : <FaCaretDown />}
          </button>
        </div>

        {/* Categories list */}
        <ul
          className={`flex flex-col gap-6 border-r border-gray-300 pt-10 pr-6 lg:block ${isSidebarOpen ? 'block' : 'hidden'} lg:flex`}
        >
          {[
            "Women's Fashion",
            "Men's Fashion",
            "Electronics",
            "Home & Lifestyles",
            "Medicine",
            "Sports & Outdoor",
            "Baby's & Toys",
            "Groceries & Pets",
            "Health & Beauty",
          ].map((item, index) => (
            <li
              key={index}
              className="flex justify-between items-center w-full cursor-pointer hover:text-gray-500"
            >
              <Link href={""} className="text-sm sm:text-base">
                {item}
              </Link>
              {index < 2 && (
                <FaAngleRight className="text-sm hidden lg:block mr-4" />
              )}
            </li>
          ))}
        </ul>
      </div>

      {/* Main Banner Section */}
      <div className="relative flex flex-col lg:flex-row items-center justify-between mt-10 bg-black text-white overflow-hidden shadow-lg w-full max-w-[1200px] mx-auto lg:px-14 sm:px-6">
        {/* Left Content */}
        <div className="flex flex-col justify-center gap-4 p-6 text-center lg:text-left">
          <div className="flex items-center gap-4 justify-center lg:justify-start">
            <FaApple className="text-white text-3xl lg:text-4xl" />
            <p className="text-md lg:text-lg">iPhone 14 Series</p>
          </div>
          <h1 className="text-2xl lg:text-5xl font-bold leading-tight">
            Up to 10% off Voucher
          </h1>
          <div className="flex items-center gap-2 justify-center lg:justify-start">
            <Link
              href={""}
              className="underline underline-offset-8 hover:text-gray-300 text-sm lg:text-base"
            >
              Shop Now
            </Link>
            <GoArrowRight className="text-md lg:text-xl" />
          </div>
        </div>

        {/* Right Image */}
        <div className="w-full lg:w-[476px] max-h-[300px] lg:max-h-[500px]">
          <Image
            className="object-contain"
            src="/images/iphone.png"
            alt="iPhone"
            width={500}
            height={500}
            priority
          />
        </div>

        {/* Dot Image Section */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 hidden lg:block">
          <Image
            className="object-contain"
            src="/images/dot.png"
            alt="Dot"
            width={50}
            height={50}
            priority
          />
        </div>
      </div>
    </div>
  );
}

export default Hero;

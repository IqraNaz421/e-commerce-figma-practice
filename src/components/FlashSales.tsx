

import { FaArrowRight, FaArrowLeft } from "react-icons/fa6";
import ProductsCard from "./ProductsCard";
import FS1 from '../../public/images/flashSale/1.png';
import FS2 from '../../public/images/flashSale/2.png';
import FS3 from '../../public/images/flashSale/3.png';
import FS4 from '../../public/images/flashSale/4.png';
import Link from "next/link";

function FlashSales() {
  return (
    <div className="flex flex-col gap-5 mx-6 sm:mx-12 md:mx-24 my-16 sm:my-24 border-b">
      <div className="flex gap-4 items-center">
        <div className="w-5 h-10 bg-[#db4444] rounded-sm"></div>
        <p className="font-semibold text-[#db4444]">Todays</p>
      </div>

      <div className="flex flex-col sm:flex-row justify-between items-center sm:items-start">
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-20 items-center">
          <h1 className="text-3xl sm:text-4xl font-semibold text-center sm:text-left">Flash Sales</h1>
          <div className="flex gap-3 items-center justify-center sm:justify-start">
            <div className="leading-7">
              <p className="text-xs">Days</p>
              <p className="text-[32px] font-bold">03</p>
            </div>
            <span className="text-xl text-[#e07575]">:</span>
            <div className="leading-6">
              <p className="text-xs">Hours</p>
              <p className="text-[32px] font-bold">23</p>
            </div>
            <span className="text-xl text-[#e07575]">:</span>
            <div className="leading-6">
              <p className="text-xs">Minutes</p>
              <p className="text-[32px] font-bold">19</p>
            </div>
            <span className="text-xl text-[#e07575]">:</span>
            <div className="leading-6">
              <p className="text-xs">Seconds</p>
              <p className="text-[32px] font-bold">56</p>
            </div>
          </div>
        </div>

        <div className="flex gap-4 mt-4 sm:mt-0">
          <p className="flex justify-center items-center w-8 h-8 text-sm bg-[#f5f5f5] rounded-full cursor-pointer">
            <FaArrowLeft />
          </p>
          <p className="flex justify-center items-center w-8 h-8 text-sm bg-[#f5f5f5] rounded-full cursor-pointer">
            <FaArrowRight />
          </p>
        </div>
      </div>

      <div className="flex overflow-x-auto gap-5 py-4">
        <ProductsCard
          image={FS1}
          productAlt="gamepad"
          title="havit hv-g92 gamepad"
          price={120}
          cutPrice={160}
          reviewStars={5}
          reviewCount={88}
        />
        <ProductsCard
          image={FS2}
          productAlt="Keyboard"
          title="ak-900 wired keyboard"
          price={960}
          cutPrice={1160}
          reviewStars={4}
          reviewCount={75}
        />
        <ProductsCard
          image={FS3}
          productAlt="monitor"
          title="ips lcd gaming monitor"
          price={370}
          cutPrice={400}
          reviewStars={5}
          reviewCount={99}
        />
        <ProductsCard
          image={FS4}
          productAlt="chair"
          title="s-series comfort chair"
          price={375}
          cutPrice={400}
          reviewStars={4}
          reviewCount={99}
        />
      </div>

      <Link
        className="py-4 px-12 bg-[#db4444] w-[234px] rounded-sm mx-auto my-8 text-white text-center block"
        href={''}
      >
        View All Products
      </Link>
    </div>
  );
}

export default FlashSales;

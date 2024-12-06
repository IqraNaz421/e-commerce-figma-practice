

import { FaArrowRight, FaArrowLeft } from "react-icons/fa6";
import ProductsCard from "./ProductsCard";
import Link from "next/link";
import EP1 from '../../public/images/explorePRoducts/1.png'
import EP2 from '../../public/images/explorePRoducts/2.png'
import EP3 from '../../public/images/explorePRoducts/3.png'
import EP4 from '../../public/images/explorePRoducts/4.png'
import EP5 from '../../public/images/explorePRoducts/5.png'
import EP6 from '../../public/images/explorePRoducts/6.png'
import EP7 from '../../public/images/explorePRoducts/7.png'
import EP8 from '../../public/images/explorePRoducts/8.png'

function ExploreProducts() {
  return (
    <div className="flex flex-col gap-5 mx-5 sm:mx-24 my-10 sm:my-32">
      <div className="flex gap-4 items-center">
        <div className="w-5 h-10 bg-[#db4444] rounded-sm"></div>
        <p className="font-semibold text-[#db4444] text-lg sm:text-xl">Our Products</p>
      </div>

      <div className="flex justify-between items-center">
        <h1 className="text-2xl sm:text-4xl font-semibold">Explore Our Products</h1>
        <div className="flex gap-2">
          <p className="flex justify-center items-center w-8 h-8 text-sm bg-[#f5f5f5] rounded-full">
            <FaArrowLeft />
          </p>
          <p className="flex justify-center items-center w-8 h-8 text-sm bg-[#f5f5f5] rounded-full">
            <FaArrowRight />
          </p>
        </div>
      </div>

      <div className="flex gap-4 flex-wrap justify-center sm:justify-between">
        <ProductsCard 
          image={EP1}
          productAlt="pet food"
          title="breed dry dog food"
          price={100}
          cutPrice={120}
          reviewStars={3}
          reviewCount={35}
        />
        <ProductsCard 
          image={EP2}
          productAlt="canon camera"
          title="canon eos dslr camera"
          price={960}
          cutPrice={1200}
          reviewStars={4}
          reviewCount={95}
        />
        <ProductsCard 
          image={EP3}
          productAlt="asus laptop"
          title="asus fhd gaming laptop"
          price={700}
          cutPrice={900}
          reviewStars={5}
          reviewCount={325}
        />
        <ProductsCard 
          image={EP4}
          productAlt="curlogy products"
          title="Curlogy Product Set"
          price={300}
          cutPrice={350}
          reviewStars={4}
          reviewCount={145}
        />
        <ProductsCard 
          image={EP5}
          productAlt="electric car"
          title="Kids electric car"
          price={1200}
          cutPrice={1500}
          reviewStars={5}
          reviewCount={65}
        />
        <ProductsCard 
          image={EP6}
          productAlt="soccer shoes"
          title="jr zoom soccer cleats"
          price={400}
          cutPrice={420}
          reviewStars={5}
          reviewCount={35}
        />
        <ProductsCard 
          image={EP7}
          productAlt="gamepad"
          title="gp11 shooter usb gamepad"
          price={360}
          cutPrice={400}
          reviewStars={4}
          reviewCount={55}
        />
        <ProductsCard 
          image={EP8}
          productAlt="jacket"
          title="Quilted satin jacket"
          price={660}
          cutPrice={700}
          reviewStars={4}
          reviewCount={55}
        />
      </div>

      <Link className="py-3 sm:py-4 px-8 sm:px-12 bg-[#db4444] w-[180px] sm:w-[234px] rounded-sm mx-auto mt-8 text-white text-sm sm:text-base" href={''}>View All Products</Link>
    </div>
  );
}

export default ExploreProducts;

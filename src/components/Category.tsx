
import { FaArrowRight, FaArrowLeft } from "react-icons/fa6";
import { CiMobile4, CiCamera } from "react-icons/ci";
import { HiOutlineComputerDesktop } from "react-icons/hi2";
import { TbDeviceWatchStats2 } from "react-icons/tb";
import { PiHeadphones } from "react-icons/pi";
import { PiGameController } from "react-icons/pi";

function Category() {
  return (
    <div className='flex flex-col gap-5 mx-5 md:mx-24 my-16 border-b'>
      <div className='flex gap-4 items-center'>
        <div className='w-5 h-10 bg-[#db4444] rounded-sm'></div>
        <p className='font-semibold text-[#db4444]'>Categories</p>
      </div>

      <div className='flex justify-between'>
        <div className='flex gap-10 items-center'>
          <h1 className="text-xl md:text-4xl font-semibold">Browse By Category</h1>
        </div>
        <div className='flex gap-2'>
          <p className="flex justify-center items-center w-8 h-8 text-sm bg-[#f5f5f5] rounded-full">
            <FaArrowLeft />
          </p>
          <p className="flex justify-center items-center w-8 h-8 text-sm bg-[#f5f5f5] rounded-full">
            <FaArrowRight />
          </p>
        </div>
      </div>

      <div className="flex flex-wrap gap-12 mt-10 mb-16 justify-center md:justify-start">
        <div className="flex flex-col w-[140px] h-[130px] gap-4 justify-center items-center border border-[#707070] rounded-sm hover:bg-[#db4444] hover:text-white transition-all">
          <CiMobile4 className="text-5xl" />
          <p className="text-sm">Phones</p>
        </div>
        <div className="flex flex-col w-[140px] h-[130px] gap-4 justify-center items-center border border-[#707070] rounded-sm hover:bg-[#db4444] hover:text-white transition-all">
          <HiOutlineComputerDesktop className="text-5xl" />
          <p className="text-sm">Computer</p>
        </div>
        <div className="flex flex-col w-[140px] h-[130px] gap-4 justify-center items-center border border-[#707070] rounded-sm hover:bg-[#db4444] hover:text-white transition-all">
          <TbDeviceWatchStats2 className="text-5xl" />
          <p className="text-sm">SmartWatch</p>
        </div>
        <div className="flex flex-col w-[140px] h-[130px] gap-4 bg-red-500 text-white justify-center items-center border border-[#707070] rounded-sm hover:bg-[#db4444] hover:text-white transition-all">
          <CiCamera className="text-5xl" />
          <p className="text-sm">Camera</p>
        </div>
        <div className="flex flex-col w-[140px] h-[130px] gap-4 justify-center items-center border border-[#707070] rounded-sm hover:bg-[#db4444] hover:text-white transition-all">
          <PiHeadphones className="text-5xl" />
          <p className="text-sm">HeadPhones</p>
        </div>
        <div className="flex flex-col w-[140px] h-[130px] gap-4 justify-center items-center border border-[#707070] rounded-sm hover:bg-[#db4444] hover:text-white transition-all">
          <PiGameController className="text-5xl" />
          <p className="text-sm">Gaming</p>
        </div>
      </div>
    </div>
  );
}

export default Category;

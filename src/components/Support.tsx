


import { AiOutlineTruck, AiOutlineSafetyCertificate } from "react-icons/ai";
import { PiHeadsetLight } from "react-icons/pi";

function Support() {
  return (
    <div className='px-4 sm:px-8 lg:px-24 flex flex-wrap justify-center gap-12 sm:gap-16 lg:gap-[88px] my-12 sm:my-16'>
      <div className="flex flex-col items-center gap-6">
        <div className='bg-[#b2b2b2] w-[80px] h-[80px] rounded-full p-2'>
          <div className="bg-black p-2 rounded-full">
            <AiOutlineTruck className="text-white text-4xl sm:text-5xl" />
          </div>
        </div>
        <div className="text-center">
          <h1 className="text-[16px] sm:text-[18px] lg:text-[20px] font-semibold uppercase">Free and Fast Delivery</h1>
          <p className="text-xs sm:text-sm lg:text-base">Free delivery for all orders over $140</p>
        </div>
      </div>

      <div className="flex flex-col items-center gap-6">
        <div className='bg-[#b2b2b2] w-[80px] h-[80px] rounded-full p-2'>
          <div className="bg-black p-2 rounded-full">
            <PiHeadsetLight className="text-white text-4xl sm:text-5xl" />
          </div>
        </div>
        <div className="text-center">
          <h1 className="text-[16px] sm:text-[18px] lg:text-[20px] font-semibold uppercase">24/7 Customer Service</h1>
          <p className="text-xs sm:text-sm lg:text-base">Friendly 24/7 customer support</p>
        </div>
      </div>

      <div className="flex flex-col items-center gap-6">
        <div className='bg-[#b2b2b2] w-[80px] h-[80px] rounded-full p-2'>
          <div className="bg-black p-2 rounded-full">
            <AiOutlineSafetyCertificate className="text-white text-4xl sm:text-5xl" />
          </div>
        </div>
        <div className="text-center">
          <h1 className="text-[16px] sm:text-[18px] lg:text-[20px] font-semibold uppercase">Money Back Guarantee</h1>
          <p className="text-xs sm:text-sm lg:text-base">We return money within 30 days</p>
        </div>
      </div>
    </div>
  )
}

export default Support;

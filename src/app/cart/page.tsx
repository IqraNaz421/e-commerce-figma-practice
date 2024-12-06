


import Image from "next/image";
import { RxCross2 } from "react-icons/rx";

const Page: React.FC = () => {
  return (
    <div className="flex flex-col gap-20 my-20 mx-6 md:mx-24">
      <div className="flex flex-col gap-10">
        {/* Header */}
        <div className="flex justify-between items-center h-[72px] rounded-sm shadow-[0px_0px_5px_2px_#f5f5f5] px-4 md:px-10">
          <p>Product</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>SubTotal</p>
        </div>

        {/* Cart Items */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 md:h-[102px] rounded-sm shadow-[0px_0px_5px_2px_#f5f5f5] px-4 md:px-10">
          <div className="flex items-center gap-4 relative">
            <Image
              src="/images/flashSale/3.png"
              alt="LCD Monitor"
              width={50}
              height={50}
            />
            <p className="absolute -top-2 -left-2 p-[1px] rounded-full bg-[#db4444] text-white text-sm font-bold">
              <RxCross2 />
            </p>
          </div>
          <p className="md:absolute md:left-[200px]">LCD Monitor</p>
          <p>$650</p>
          <input
            className="text-black w-[80px] px-3 h-[50px] border-2 border-[#9d9b9b] rounded-sm item"
            type="number"
            placeholder="01"
          />
          <p>$650</p>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 md:h-[102px] rounded-sm shadow-[0px_0px_5px_2px_#f5f5f5] px-4 md:px-10">
          <div className="flex items-center gap-4 relative">
            <Image
              src="/images/flashSale/1.png"
              alt="H1 Gamepad"
              width={50}
              height={50}
            />
          </div>
          <p className="md:absolute md:left-[200px]">H1 Gamepad</p>
          <p>$550</p>
          <input
            className="text-black w-[80px] px-3 h-[50px] border-2 border-[#9d9b9b] rounded-sm item"
            type="number"
            placeholder="02"
          />
          <p>$1100</p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col md:flex-row justify-between gap-4">
          <button className="w-full md:w-[218px] h-[56px] rounded-sm border-2 border-[#9d9b9b]">
            Return To Shop
          </button>
          <button className="w-full md:w-[195px] h-[56px] rounded-sm border-2 border-[#9d9b9b]">
            Update Cart
          </button>
        </div>
      </div>

      {/* Coupon and Total */}
      <div className="flex flex-col md:flex-row justify-between gap-8">
        <div className="flex gap-4">
          <input
            className="w-[250px] h-[56px] border-2 border-[#9d9b9b] rounded-sm pl-6"
            type="text"
            placeholder="Coupon Code"
          />
          <button className="w-[180px] h-[56px] rounded-sm bg-[#db4444] text-white">
            Apply Coupon
          </button>
        </div>
        <div className="flex flex-col gap-5 w-full md:w-[400px] h-auto border-2 border-[#9d9b9b] rounded-sm px-6 py-8">
          <p className="font-semibold">Cart Total</p>
          <div className="flex justify-between pb-2 border-b border-[#a8a6a6] text-sm">
            <p>Subtotal:</p>
            <p>$1750</p>
          </div>
          <div className="flex justify-between pb-2 border-b border-[#a8a6a6] text-sm">
            <p>Shipping:</p>
            <p>Free</p>
          </div>
          <div className="flex justify-between pb-2 border-b border-[#a8a6a6] text-sm">
            <p>Total:</p>
            <p>$1750</p>
          </div>
          <button className="w-full md:w-[230px] h-[56px] mx-auto rounded-sm bg-[#db4444] text-white">
            Proceed to checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Page;

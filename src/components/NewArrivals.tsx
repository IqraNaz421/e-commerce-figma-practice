
import Image from "next/image";
import Link from "next/link";
import NA1 from "../../public/images/newArrivals/1.png";
import NA2 from "../../public/images/newArrivals/2.png";
import NA3 from "../../public/images/newArrivals/3.png";
import NA4 from "../../public/images/newArrivals/4.png";

function NewArrivals() {
  return (
    <div className="flex flex-col gap-5 mx-6 sm:mx-10 lg:mx-24 my-16 sm:my-20 lg:my-32">
      {/* Header Section */}
      <div className="flex gap-4 items-center">
        <div className="w-5 h-10 bg-[#db4444] rounded-sm"></div>
        <p className="font-semibold text-[#db4444]">Featured</p>
      </div>

      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
        <div className="flex gap-4 items-center">
          <h1 className="text-3xl sm:text-4xl font-semibold">New Arrival</h1>
        </div>
      </div>

      {/* Product Section */}
      <div className="flex flex-col lg:flex-row gap-8 mt-10">
        {/* Main Large Card */}
        <div className="flex justify-center items-end relative w-full lg:w-[570px] h-[400px] sm:h-[500px] lg:h-[600px] bg-black rounded-sm px-4">
          <Image
            className="w-[300px] sm:w-[400px] lg:w-[511px] h-[300px] sm:h-[400px] lg:h-[511px]"
            src={NA1}
            alt="Play Station"
          />
          <div className="absolute bottom-8 left-6 flex flex-col gap-3 w-[250px] text-white">
            <h2 className="text-lg sm:text-xl">Play Station 5</h2>
            <p className="text-xs sm:text-sm">
              Black and White version of the PS5 coming out on sale
            </p>
            <Link
              className="font-semibold underline underline-offset-4"
              href={"/"}
            >
              Shop Now
            </Link>
          </div>
        </div>

        {/* Right Column */}
        <div className="flex flex-col gap-6">
          {/* Top Wide Card */}
          <div className="flex justify-end w-full lg:w-[570px] h-[200px] sm:h-[250px] lg:h-[284px] bg-black rounded-sm relative">
            <div className="absolute left-8 bottom-8 flex flex-col gap-3 text-white w-[70%] sm:w-[45%]">
              <h1 className="text-lg sm:text-xl">Womens Collections</h1>
              <p className="text-xs sm:text-sm">
                Featured Woman Collections that give you another vibe
              </p>
              <Link
                className="font-semibold underline underline-offset-4"
                href={"/"}
              >
                Shop Now
              </Link>
            </div>
            <Image src={NA2} alt="Womens Collection" />
          </div>

          {/* Bottom Small Cards */}
          <div className="flex flex-wrap lg:flex-nowrap gap-4">
            {/* Card 1 */}
            <div className="flex justify-center items-center w-full sm:w-[270px] h-[200px] sm:h-[250px] lg:h-[284px] bg-black rounded-sm relative text-white">
              <Image src={NA3} alt="Speakers" />
              <div className="absolute left-6 bottom-6 flex flex-col gap-1">
                <h2 className="text-lg sm:text-xl">Speakers</h2>
                <p className="text-xs sm:text-sm">Amazon wireless speakers</p>
                <Link
                  className="font-semibold underline underline-offset-4"
                  href={"/"}
                >
                  Shop Now
                </Link>
              </div>
            </div>

            {/* Card 2 */}
            <div className="flex justify-center items-center w-full sm:w-[270px] h-[200px] sm:h-[250px] lg:h-[284px] bg-black rounded-sm relative text-white">
              <Image id="dropShadow" src={NA4} alt="Perfume" />
              <div className="absolute left-6 bottom-6 flex flex-col gap-1">
                <h2 className="text-lg sm:text-xl">Perfume</h2>
                <p className="text-xs sm:text-sm">GUCCI INTENSE OUD EDP</p>
               
                  Shop Now
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewArrivals;












import Link from "next/link";
import Image from "next/image";
import aboutImg from "../../../public/images/aboutImages/side_image.png";
import founder from "../../../public/images/aboutImages/1.png";
import manager from "../../../public/images/aboutImages/2.png";
import designer from "../../../public/images/aboutImages/3.png";
import { BiStore } from "react-icons/bi";
import { AiOutlineDollar } from "react-icons/ai";
import { BsSuitcase2 } from "react-icons/bs";
import { FaSackDollar } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FiTwitter } from "react-icons/fi";
import { RiLinkedinLine } from "react-icons/ri";
import Support from "@/components/Support";

function page() {
  return (
    <>
      <div className="flex gap-3 mx-5 mt-5 lg:mx-24 lg:mt-16 lg:mb-10">
        <Link className="text-gray-500" href={"/"}>
          Home
        </Link>
        <p>/</p>
        <Link href={"/about"}>About</Link>
      </div>
      <div className="flex flex-col-reverse lg:flex-row-reverse gap-10 mt-12 mb-32">
        <Image
          className="w-full lg:w-[650px]"
          src={aboutImg}
          alt="login image"
        ></Image>
        <div className="flex flex-col w-full lg:w-1/2 justify-center gap-4 px-5 lg:px-24">
          <h1 className="text-3xl lg:text-[54px]">Our Story</h1>
          <p>
            Launched in 2015 Exclusive is South Asias premier online shopping
            marketplace with an active presence in Bangladesh Supported by a
            wide range of tailored marketing, data, and service solutions,
            Exclusive has 10500 sellers and 300 brands and serves 3 million
            customers across the region
          </p>
          <p>
            Exclusive has more than 1 Million products to offer, growing at a
            very fast pace Exclusive offers a diverse assortment in categories
            ranging from consumer
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-5 lg:px-24 my-10">
        {[
          { icon: <BiStore />, title: "10.5k", desc: "Sellers active our site" },
          {
            icon: <AiOutlineDollar />,
            title: "33k",
            desc: "Monthly Products Sale",
          },
          {
            icon: <BsSuitcase2 />,
            title: "45.5k",
            desc: "Customers active in our site",
          },
          {
            icon: <FaSackDollar />,
            title: "25k",
            desc: "Annual gross sale in our site",
          },
        ].map((item, index) => (
          <div
            key={index}
            className="flex flex-col gap-3 justify-center items-center rounded-sm border border-[#707070] w-full h-[230px] hover:bg-[#db4444] hover:text-white transition-all"
          >
            <div className="w-20 h-20 p-2 rounded-full bg-[#707070]">
              <p className="flex justify-center items-center w-16 h-16 rounded-full bg-black text-white text-[40px]">
                {item.icon}
              </p>
            </div>
            <h1 className="text-[32px] font-bold">{item.title}</h1>
            <p className="text-center">{item.desc}</p>
          </div>
        ))}
      </div>
      <div className="mx-5 lg:mx-24 my-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              image: founder,
              name: "Tom Cruise",
              position: "Founder & Chairman",
            },
            { image: manager, name: "Emma Watson", position: "Managing Director" },
            {
              image: designer,
              name: "Will Smith",
              position: "Product Designer",
            },
          ].map((member, index) => (
            <div key={index} className="flex flex-col gap-5 items-center">
              <Image
                className="w-[250px] h-[300px] lg:w-[350px] lg:h-[400px]"
                src={member.image}
                alt={`${member.name} image`}
              />
              <div className="flex flex-col leading-8 text-center">
                <h1 className="text-[24px] lg:text-[32px]">{member.name}</h1>
                <p>{member.position}</p>
                <ul className="flex items-center justify-center gap-3 mt-2">
                  <li className="text-xl">
                    <Link href={""}>
                      <FiTwitter />
                    </Link>
                  </li>
                  <li className="text-xl">
                    <Link href={""}>
                      <FaInstagram />
                    </Link>
                  </li>
                  <li className="text-xl">
                    <Link href={""}>
                      <RiLinkedinLine />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center gap-3 my-10">
          {Array(5)
            .fill("")
            .map((_, index) => (
              <div
                key={index}
                className={`w-[14px] h-[14px] rounded-full ${
                  index === 2
                    ? "border-2 border-[#707070] bg-[#db4444]"
                    : "bg-[#707070]"
                }`}
              ></div>
            ))}
        </div>
      </div>
      <Support />
    </>
  );
}

export default page;

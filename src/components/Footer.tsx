

import Link from 'next/link';
import { AiOutlineSend } from "react-icons/ai";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { FiTwitter } from "react-icons/fi";
import { RiLinkedinLine } from "react-icons/ri";
import Image from 'next/image';
import QR from '../../public/images/footerImages/Qr Code.png';
import playstore from '../../public/images/footerImages/playstore.png';
import appstore from '../../public/images/footerImages/download-appstore.png';

function Footer() {
  return (
    <div className="bg-black text-white">
      {/* Footer Content */}
      <div className="flex flex-col lg:flex-row justify-between px-6 lg:px-20 py-8 lg:py-16 gap-12">
        {/* Subscribe Section */}
        <div className="flex flex-col gap-3">
          <h3 className="text-xl lg:text-2xl">Exclusive</h3>
          <Link className="text-base lg:text-xl" href={''}>
            Subscribe
          </Link>
          <Link href={''}>Get 10% off your first order</Link>
          <div className="flex items-center bg-transparent border rounded-sm py-1 px-2">
            <input
              className="bg-transparent w-full max-w-[140px] lg:max-w-full text-sm outline-none"
              type="text"
              placeholder="Enter your email"
            />
            <AiOutlineSend className="text-lg" />
          </div>
        </div>

        {/* Support Section */}
        <div className="flex flex-col gap-3">
          <h3 className="text-lg lg:text-xl">Support</h3>
          <p>Malir KDA road HNO/B36</p>
          <p>Karachi Pakistan</p>
          <Link href={''}>exclusive@gmail.com</Link>
          <p>+923102858075</p>
        </div>

        {/* Account Section */}
        <div className="flex flex-col gap-3">
          <h3 className="text-lg lg:text-xl">Account</h3>
          <Link href={''}>My Account</Link>
          <Link href={''}>Login/Register</Link>
          <Link href={''}>Cart</Link>
          <Link href={''}>Wishlist</Link>
          <Link href={''}>Shop</Link>
        </div>

        {/* Quick Links Section */}
        <div className="flex flex-col gap-3">
          <h3 className="text-lg lg:text-xl">Quick Link</h3>
          <Link href={''}>Privacy Policy</Link>
          <Link href={''}>Terms of Use</Link>
          <Link href={''}>FAQ</Link>
          <Link href={''}>Contact</Link>
        </div>

        {/* Download App Section */}
        <div className="flex flex-col gap-3">
          <h3 className="text-lg lg:text-xl">Download App</h3>
          <p className="text-xs">Save $3 with App New User Only</p>
          <div className="flex gap-3">
            <div className="w-16 lg:w-[80px] h-16 lg:h-[80px]">
              <Image src={QR} alt="qr code" />
            </div>
            <div className="flex flex-col gap-3">
              <div className="w-20 lg:w-[110px] h-8 lg:h-[35px]">
                <Image src={playstore} alt="playstore" />
              </div>
              <div className="w-20 lg:w-[110px] h-8 lg:h-[35px]">
                <Image src={appstore} alt="appstore" />
              </div>
            </div>
          </div>
          <ul className="flex items-center gap-4 mt-4">
            <li className="w-8 h-8 text-2xl">
              <Link href={''}>
                <FaFacebookF />
              </Link>
            </li>
            <li className="w-8 h-8 text-2xl">
              <Link href={''}>
                <FaInstagram />
              </Link>
            </li>
            <li className="w-8 h-8 text-2xl">
              <Link href={''}>
                <FiTwitter />
              </Link>
            </li>
            <li className="w-8 h-8 text-2xl">
              <Link href={''}>
                <RiLinkedinLine />
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="flex justify-center border-y border-gray-700 py-2">
        <p className="text-[#868585] opacity-80 text-xs lg:text-base">
          Copyright Iqra Naz 2024 All right reserved
        </p>
      </div>
    </div>
  );
}

export default Footer;

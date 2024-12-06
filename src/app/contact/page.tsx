





import Link from "next/link";
import { FiPhone } from "react-icons/fi";
import { AiOutlineMail } from "react-icons/ai";

function Page() {
  return (
    <div className="mx-6 md:mx-24 my-10 md:my-20">
      {/* Breadcrumb */}
      <div className="flex gap-3 mt-8 md:mt-16 mb-6 md:mb-10">
        <Link className="text-gray-500" href={'/'}>
          Home
        </Link>
        <p>/</p>
        <Link href={'/contact'}>
          Contact
        </Link>
      </div>

      {/* Main Content */}
      <div className="flex flex-col md:flex-row gap-6">
        {/* Contact Information */}
        <div className="w-full md:w-1/3 flex flex-col gap-4 p-6 md:p-8 shadow-[0px_0px_5px_2px_#f5f5f5] rounded-sm">
          <div className="flex items-center gap-4">
            <p className="bg-[#db4444] text-white rounded-full text-xl p-2">
              <FiPhone />
            </p>
            <p className="font-semibold">Call To Us</p>
          </div>
          <p>We are available 24/7</p>
          <p>Phone: +98765858075</p>
          <hr className="bg-black h-[1.5px] my-3" />
          <div className="flex items-center gap-4">
            <p className="bg-[#db4444] text-white rounded-full text-xl p-2">
              <AiOutlineMail />
            </p>
            <p className="font-semibold">Write To Us</p>
          </div>
          <p>Fill out our form and we will contact you within 24 hours.</p>
          <p>Iqra nazm@gmail.com</p>
          <p>xyz@gmail.com</p>
        </div>

        {/* Contact Form */}
        <div className="w-full flex flex-col gap-6 p-6 md:p-8 shadow-[0px_0px_5px_2px_#f5f5f5] rounded-sm">
          <div className="flex flex-col md:flex-row gap-3">
            <input
              className="bg-[#f5f5f5] py-3 px-4 w-full md:w-[235px] outline-none rounded-sm"
              type="text"
              placeholder="Your Name"
            />
            <input
              className="bg-[#f5f5f5] py-3 px-4 w-full md:w-[235px] outline-none rounded-sm"
              type="email"
              placeholder="Your Email"
            />
            <input
              className="bg-[#f5f5f5] py-3 px-4 w-full md:w-[235px] outline-none rounded-sm"
              type="text"
              placeholder="Your Phone"
            />
          </div>
          <textarea
            className="bg-[#f5f5f5] py-3 px-4 outline-none rounded-sm resize-none"
            rows={8}
            placeholder="Your Message"
          ></textarea>
          <div className="flex justify-end">
            <button className="bg-[#db4444] text-white w-full md:w-[200px] h-[50px] rounded-sm">
              Send Message
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;

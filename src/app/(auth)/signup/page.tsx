






import Link from "next/link";
import Image from "next/image";
import loginImg from "../../../../public/images/login_side_mage.png";

function page() {
  return (
    <div className="flex flex-col lg:flex-row gap-10 lg:gap-[129px] mt-12 mb-20 px-6 lg:px-24">
      {/* Login Image */}
      <Image
        className="w-full max-w-md lg:max-w-[650px] mx-auto lg:mx-0"
        src={loginImg}
        alt="login image"
      />

      {/* Login Form */}
      <div className="flex flex-col justify-center gap-10 w-full max-w-md mx-auto lg:mx-0">
        {/* Header Section */}
        <div className="flex flex-col gap-4 text-center lg:text-left">
          <h1 className="text-2xl lg:text-4xl">Create an account</h1>
          <p className="text-[#707070]">Enter your details below</p>
        </div>

        {/* Input Fields */}
        <div className="flex flex-col gap-6">
          <input
            className="outline-none border-b border-[#707070] py-2"
            type="text"
            placeholder="Name"
          />
          <input
            className="outline-none border-b border-[#707070] py-2"
            type="email"
            placeholder="Email or Phone Number"
          />
          <input
            className="outline-none border-b border-[#707070] py-2"
            type="password"
            placeholder="Password"
          />
        </div>

        {/* Buttons and Links */}
        <div className="flex flex-col gap-4">
          <button className="bg-[#db4444] text-white py-3 lg:py-4 rounded-sm w-full">
            Create Account
          </button>
          <button className="bg-[#db4444] text-white py-3 lg:py-4 rounded-sm w-full">
            Sign up with Google
          </button>
          <p className="text-center text-[#707070]">
            Already have an account?{" "}
            <Link
              className="font-semibold underline underline-offset-4"
              href={"/login"}
            >
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default page;

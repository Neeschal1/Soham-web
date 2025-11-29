import React, { useState } from "react";
import Fonts from "../../utils/fontsconfig";
import { Eye, EyeOff } from "lucide-react";

const Detailcard = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <div className="flex h-11/12 w-11/12 bg-white/5 backdrop-blur-sm p-2 border-t border-b border-r border-white/30 shadow-lg rounded-tr-3xl rounded-br-3xl items-center gap-3">
      <div className="flex flex-1 ml-5 flex-col gap-7 pr-5">
        <div className="flex flex-col gap-2 w-11/12">
          <h1 className="text-white text-5xl" style={{ ...Fonts.poppins.regular }}>
            Signup
          </h1>
          <h2 className="text-[#C2C2C2] text-sm" style={{ ...Fonts.poppins.light }}>
            Welcome to our community. Get access to exclusive features by creating an account and logging it into the mobile app directly.
          </h2>
        </div>

        <div className="flex flex-1 gap-6 flex-col">
          <div className="flex flex-col gap-2">
            <h1 className="text-white text-xl" style={{ ...Fonts.poppins.regular }}>
              Full Name:
            </h1>
            <input
              className="flex w-full p-3.5 border border-white rounded-xl text-white focus:outline-none"
              type="text"
              placeholder="Enter your Full Name"
            />
          </div>

          <div className="flex flex-col gap-2">
            <h1 className="text-white text-xl" style={{ ...Fonts.poppins.regular }}>
              Email:
            </h1>
            <input
              className="flex w-full p-3.5 border border-white rounded-xl text-white focus:outline-none"
              type="text"
              placeholder="Enter your email"
            />
          </div>

          <div className="flex flex-col gap-2 relative">
            <h1 className="text-white text-xl" style={{ ...Fonts.poppins.regular }}>
              Password:
            </h1>
            <input
              className="flex w-full p-3.5 border border-white rounded-xl text-white pr-12 focus:outline-none"
              type={showPassword ? "text" : "password"}
              placeholder="Enter a New Password"
            />
            <button
              className="absolute right-4 top-13 text-white/80 "
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>

          <div className="flex flex-col gap-2 relative">
            <h1 className="text-white text-xl" style={{ ...Fonts.poppins.regular }}>
              Confirm Password:
            </h1>
            <input
              className="flex w-full p-3.5 border border-white rounded-xl text-white pr-12 focus:outline-none"
              type={showConfirmPassword ? "text" : "password"}
              placeholder="Confirm your Password"
            />
            <button
              className="absolute right-4 top-13 text-white/80"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            >
              {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>
        </div>

        <div className="flex flex-1 flex-row gap-5 items-center">
          <input className="scale-150 accent-blue-600 cursor-pointer" type="checkbox" />
          <div className="flex flex-1 flex-row gap-1 flex-wrap">
            <h2 style={{ ...Fonts.poppins.light }} className="text-[#e2e2e2] ">
              By signing up, you’ll be accepting our
            </h2>
            <button className="cursor-pointer">
              <h2 style={{ ...Fonts.poppins.medium }} className="text-white">
                Terms and Conditions.
              </h2>
            </button>
          </div>
        </div>

        <button className="p-4 w-full bg-[#00DADA] rounded-2xl text-white cursor-pointer hover:bg-[#00bbbb] focus:outline-none">
          Signup
        </button>
      </div>
    </div>
  );
};

export default Detailcard;
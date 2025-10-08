import React, { useState } from "react";
import Backgroundimage from "../../assets/images/hero_background.png";
import Mobileherobg from "../../assets/images/mobileherobg.jpg";
import Mobilelogo from "../../assets/images/mobilelogo.png";
import Lotus from "../../assets/images/lotus.png";
import Users from "../../assets/images/users.png";
import Navbar from "../../constant/navbar";
import Fonts from "../../utils/fontsconfig";
import { IoMenu, IoClose } from "react-icons/io5";

const Hero = () => {
  const [menu, setMenu] = useState(false);

  return (
    <div>
      {/* ------------------ Mobile View ------------------ */}
      <div
        style={{ backgroundImage: `url(${Mobileherobg})` }}
        className="lg:hidden w-full h-screen bg-cover bg-center flex flex-col justify-between p-5 relative"
      >
        {/* Top Navbar */}
        <div className="flex justify-between items-center">
          <div
            style={{ backgroundImage: `url(${Lotus})` }}
            className="flex h-10 w-12"
          />
          <button onClick={() => setMenu(!menu)}>
            <IoMenu size={28} color="white" />
          </button>
        </div>

        {/* Mobile Drawer */}
        {menu && (
          <div
            className="fixed inset-0 bg-white/50 z-50"
            onClick={() => setMenu(false)}
          >
            <div
              className="backdrop-blur-md fixed top-0 right-0 w-50 h-full bg-white/50 shadow-lg p-5 flex flex-col rounded-tl-2xl rounded-bl-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button className="self-end mb-5" onClick={() => setMenu(false)}>
                <IoClose size={28} />
              </button>
              <div className="flex flex-1 flex-col justify-between">
                <ul className="flex flex-col gap-6 mt-5">
                  <li
                    style={Fonts.poppins.regular}
                    className="text-black font-medium"
                  >
                    Home
                  </li>
                  <li
                    style={Fonts.poppins.regular}
                    className="text-black font-medium"
                  >
                    M3ditation
                  </li>
                  <li
                    style={Fonts.poppins.regular}
                    className="text-black font-medium"
                  >
                    Purpose
                  </li>
                  <li
                    style={Fonts.poppins.regular}
                    className="text-black font-medium"
                  >
                    Our Story
                  </li>
                  <li
                    style={Fonts.poppins.regular}
                    className="text-black font-medium"
                  >
                    About Us
                  </li>
                </ul>
                <button
                  style={Fonts.poppins.regular}
                  className=" border-1 border-[#000000] py-2 px-7 rounded-full text-black hover:bg-black duration-500"
                >
                  Sign up
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Hero Content */}
        <div className="flex flex-col items-center text-center gap-8 px-5">
          <div>
            <h1
              style={{ fontSize: 40, lineHeight: 0.9, ...Fonts.poppins.medium }}
              className="text-white font-medium"
            >
              Meditation for mind, body, and soul with silent strength.
            </h1>
            <h3
              style={Fonts.poppins.regular}
              className="text-sm text-white/80 pt-3 font-normal mt-[-5]"
            >
              We help you rediscover your inner peace through mindful practices.
            </h3>
          </div>
          <button
            style={Fonts.poppins.regular}
            className="bg-[#00DADA] py-3 px-10 rounded-full text-white hover:bg-black duration-500"
          >
            Try for free
          </button>
        </div>

        {/* Bottom Text */}
        <div className="w-full flex justify-center pb-8 px-5">
          <h3
            style={Fonts.poppins.light}
            className="text-white text-center text-sm"
          >
            We help you cultivate calm, release stress, and create the mental
            and emotional space needed to invite clarity, balance, and
            well-being into every aspect of your life.
          </h3>
        </div>
      </div>

      {/* ------------------ Desktop View ------------------ */}
      <div
        className="hidden lg:flex h-screen w-full bg-cover bg-center flex-col"
        style={{ backgroundImage: `url(${Backgroundimage})` }}
      >
        <div className="w-full h-full flex flex-col bg-black/5 p-3">
          <Navbar />

          {/* Center contents */}
          <div className="flex-1 flex items-center justify-start ml-15">
            <div className="flex flex-col gap-5">
              <div>
                <h1
                  style={Fonts.poppins.medium}
                  className="xl:text-7xl text-white"
                >
                  Meditation for mind, body,
                  <br />
                  and soul with silent strength.
                </h1>
                <h3
                  style={Fonts.poppins.regular}
                  className="text-lg text-white pt-3"
                >
                  We help you rediscover your inner peace through mindful
                  practices.
                </h3>
              </div>

              <div>
                <button
                  style={Fonts.poppins.regular}
                  className="bg-[#00DADA] py-4 px-15 rounded-full text-white hover:bg-black duration-500"
                >
                  Try for free
                </button>
              </div>
            </div>
          </div>

          {/* Bottom Contents */}
          <div className="flex flex-row items-end justify-between pb-8 px-4">
            <div className="flex flex-row items-center gap-3 px-6 py-3 rounded-2xl border-t border-l border-white/30 backdrop-blur-xs bg-black/15">
              <img className="h-15 w-38" src={Users} alt="Users" />
              <h3 style={Fonts.poppins.light} className="text-white">
                Trusted by 100+ users
              </h3>
            </div>
            <div className="py-6 px-10 bg-black/15 backdrop-blur-xs rounded-3xl border-t border-r border-white/30">
              <h3 style={Fonts.poppins.light} className="text-white text-right">
                We help you cultivate calm, release stress, and create
                <br /> the mental and emotional space needed to invite
                <br /> clarity, balance, and well-being into every aspect of
                <br /> your life.
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

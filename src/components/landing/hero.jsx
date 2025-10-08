import React from "react";
import Backgroundimage from "../../assets/images/hero_background.png";
import Mobilelogo from "../../assets/images/mobilelogo.png";
import Users from "../../assets/images/users.png";
import Navbar from "../../constant/navbar";
import Fonts from "../../utils/fontsconfig";
import { IoMenu } from "react-icons/io5";

const Hero = () => {
  return (
    <div>
      {/* ------------------ Mobile View ------------------ */}
      <div className="w-full h-screen bg-cover bg-center flex flex-col items-between justify-between lg:hidden p-5">
        <div className="flex justify-between">
          <img className="h-10 w-36" src={Mobilelogo} alt="Logo" />
          <button>
            <IoMenu size={24} />
          </button>
        </div>
        <div className="flex flex-col items-center text-center px-5 gap-5">
          <div>
            <h1 className="text-5xl text-black font-medium">
              Meditation for mind, body,
              <br />
              and soul with silent strength.
            </h1>
            <h3 className="text-sm text-black/50 pt-3 font-normal">
              We help you rediscover your inner peace through mindful practices.
            </h3>
          </div>
          <div>
            <button
              style={Fonts.poppins.regular}
              className="bg-[#00DADA] py-3 px-10 rounded-full text-white hover:bg-black duration-[800ms]"
            >
              Try for free
            </button>
          </div>
        </div>
        <div className="flex flex-col w-full items-end justify-between pb-8">
          {/* <div className="gap-3 flex-row items-center flex py-3 rounded-2xl border-t border-l border-black/30 backdrop-blur-xs bg-black/15">
              <img className="h-15 w-38" src={Users} alt="Users" />
              <h3 style={Fonts.poppins.light} className="text-black">
                Trusted by 100+ users
              </h3>
            </div> */}
          <div>
            <h3
              style={Fonts.poppins.light}
              className="text-black text-center text-sm"
            >
              We help you cultivate calm, release stress, and create the mental
              and emotional space needed to invite clarity, balance, and
              well-being into every aspect of your life.
            </h3>
          </div>
        </div>
      </div>

      {/* --------------- Desktop View ----------------- */}
      <div
        className="hidden lg:flex h-screen w-full bg-cover bg-center flex-col"
        style={{ backgroundImage: `url(${Backgroundimage})` }}
      >
        <div className="w-full h-full flex flex-1 flex-col bg-black/5 p-3">
          <Navbar />

          {/* Center contents */}
          <div className="flex-1 flex items-center justify-start ml-15">
            <div className="gap-5 flex flex-col">
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
                  className="bg-[#00DADA] py-4 px-15 rounded-full text-white hover:bg-black duration-[800ms]"
                >
                  Try for free
                </button>
              </div>
            </div>
          </div>

          {/* Bottom Contents */}
          <div className="flex flex-row items-end justify-between pb-8 pr-4 pl-4">
            <div className="gap-3 flex-row items-center flex px-6 py-3 rounded-2xl border-t border-l border-white/30 backdrop-blur-xs bg-black/15">
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

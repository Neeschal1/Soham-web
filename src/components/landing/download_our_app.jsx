import React from "react";
import Fonts from "../../utils/fontsconfig";
import playstore from "../../assets/images/playstore.png";
import appstore from "../../assets/images/appstore.png";
import mockups from "../../assets/images/mobilemockups.png";

const Download = () => {
  return (
    <div className="flex justify-center items-center py-10 px-4 bg-black m-10 rounded-3xl">
      <div className="relative bg-black w-full max-w-7xl rounded-3xl flex flex-col lg:flex-row items-center p-6 lg:p-12  ">
        {/* Stats & Buttons */}
        <div className="flex flex-col lg:flex-row w-full lg:gap-20 gap-10 items-center justify-center lg:pr-[520px]">
          {/* Android */}
          <div className="flex flex-col items-center justify-center gap-6 flex-1">
            <div className="flex flex-col items-center">
              <h1
                style={{ fontSize: 100, ...Fonts.poppins.medium }}
                className="text-white text-[60px] sm:text-[80px] md:text-[100px]"
              >
                100+
              </h1>
              <h2
                style={{ fontSize: 20, ...Fonts.poppins.regular }}
                className="text-white mt-[-10px] sm:mt-[-20px] md:mt-[-30px]"
              >
                Community Members
              </h2>
            </div>

            <h3
              style={{ fontSize: 14, ...Fonts.poppins.regular }}
              className="text-white text-center mt-4 max-w-xs sm:max-w-sm md:max-w-md"
            >
              Every morning, people take time to relax and chill.
            </h3>

            <button
              onClick={() =>
                window.open(
                  "https://play.google.com/store/apps/details?id=com.jackmanbegins.mfreedom.merojyotish&pcampaignid=web_share",
                  "_blank"
                )
              }
              className="p-0 bg-transparent border-0 mt-4 cursor-pointer"
            >
              <img
                src={playstore}
                alt="Play Store"
                className="w-40 sm:w-56 md:w-64 lg:w-50 h-auto"
              />
            </button>
          </div>

          {/* iOS */}
          <div className="flex flex-col items-center justify-center gap-6 flex-1">
            <div className="flex flex-col items-center">
              <h1
                style={{ fontSize: 100, ...Fonts.poppins.medium }}
                className="text-white text-[60px] sm:text-[80px] md:text-[100px]"
              >
                500+
              </h1>
              <h2
                style={{ fontSize: 20, ...Fonts.poppins.regular }}
                className="text-white mt-[-10px] sm:mt-[-20px] md:mt-[-30px]"
              >
                Minutes spent in selfcare
              </h2>
            </div>

            <h3
              style={{ fontSize: 14, ...Fonts.poppins.regular }}
              className="text-white text-center mt-4 max-w-xs sm:max-w-sm md:max-w-md"
            >
              Each day, more than 20 minutes are spent in meditation.
            </h3>

            <button
              onClick={() =>
                window.open(
                  "https://apps.apple.com/us/app/mero-jyotish/id1473215421",
                  "_blank"
                )
              }
              className="p-0 bg-transparent border-0 mt-4 cursor-pointer"
            >
              <img
                src={appstore}
                alt="App Store"
                className="w-30 sm:w-30 md:w-64 lg:w-50 h-auto"
              />
            </button>
          </div>
        </div>

        {/* Mobile Mockups */}
        <div className="hidden lg:flex absolute right-0 top-1/2 -translate-y-1/2">
          <img
            src={mockups}
            alt="Mobile Mockups"
            className="w-[500px] h-auto"
          />
        </div>

        {/* Mobile/Tablet Mockup below content */}
        <div className="lg:hidden hidden justify-center mt-10 w-full">
          <img
            src={mockups}
            alt="Mobile Mockups"
            className="w-64 sm:w-80 h-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default Download;

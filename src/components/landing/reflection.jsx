import React from "react";
import Fonts from "../../utils/fontsconfig";
import Reflectionimg from "../../assets/images/reflection.png";
import { GrUserExpert } from "react-icons/gr";
import { GiMeditation } from "react-icons/gi";
import { RiUserCommunityFill } from "react-icons/ri";
import { PiWaveform } from "react-icons/pi";
import { FaPlay } from "react-icons/fa";

const Reflection = () => {
  return (
    <div className="w-full mt-16">
      {/* ---------- MOBILE VIEW (below 640px) ---------- */}
      <div className="sm:hidden flex flex-col px-6 py-8 text-center">
        <div className="flex justify-center">
          <h3
            className="bg-[#F9F8FF] py-2 px-8 rounded-full mb-4"
            style={Fonts.poppins.regular}
          >
            OUR MOTIVE
          </h3>
        </div>

        <h1 style={Fonts.poppins.medium} className="text-2xl mb-3">
          Your Life for <br /> Greater Self Reflection
        </h1>
        <p style={Fonts.poppins.light} className="text-sm text-gray-600 mb-8">
          Pause, reflect, and gain clarity to understand yourself better and
          make mindful choices.
        </p>

        <div className="flex justify-center mb-10">
          <div
            className="flex w-[500px] h-[500px] bg-cover bg-center rounded-2xl justify-end items-end overflow-hidden"
            style={{ backgroundImage: `url(${Reflectionimg})` }}
          >
            <div className="w-full flex-col gap-3 flex h-30 justify-center items-center p-5 bg-white/20 backdrop-blur-2xl rounded-b-2xl">
              <h1 style={Fonts.poppins.medium} className="text-2xl text-white">
                View Playlists
              </h1>
              <div className="flex flex-row items-center gap-5 justify-center">
                <PiWaveform size={40} color="white" />
                <button className="flex p-3 items-center justify-center rounded-full bg-white">
                  <FaPlay />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Details */}
        <div className="flex flex-col gap-10 text-left">
          {/* 1 */}
          <div className="flex flex-row gap-3">
            <div className="p-4 rounded-2xl bg-[#A973C5] flex items-center justify-center">
              <GrUserExpert size={22} color="white" />
            </div>
            <div>
              <h1 style={Fonts.poppins.medium} className="text-lg mb-1">
                Expert Instructors
              </h1>
              <p
                style={Fonts.poppins.regular}
                className="text-xs text-gray-600"
              >
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
            </div>
          </div>

          <div className="w-full h-[1px] bg-gray-100" />

          {/* 2 */}
          <div className="flex flex-row gap-3">
            <div className="p-4 rounded-2xl bg-[#88E566] flex items-center justify-center">
              <GiMeditation size={22} color="white" />
            </div>
            <div>
              <h1 style={Fonts.poppins.medium} className="text-lg mb-1">
                Transformative Power of Meditation
              </h1>
              <p
                style={Fonts.poppins.regular}
                className="text-xs text-gray-600"
              >
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
            </div>
          </div>

          <div className="w-full h-[1px] bg-gray-100" />

          {/* 3 */}
          <div className="flex flex-row gap-3">
            <div className="p-4 rounded-2xl bg-[#4FCBCF] flex items-center justify-center">
              <RiUserCommunityFill size={22} color="white" />
            </div>
            <div>
              <h1 style={Fonts.poppins.medium} className="text-lg mb-1">
                Welcoming Community
              </h1>
              <p
                style={Fonts.poppins.regular}
                className="text-xs text-gray-600"
              >
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ---------- TABLET VIEW (640px – 1023px) ---------- */}
      <div className="hidden sm:flex md:hidden flex-col px-10 py-10 text-center">
        <h3
          className="bg-[#F9F8FF] py-2 px-10 rounded-full mb-4"
          style={Fonts.poppins.regular}
        >
          OUR MOTIVE
        </h3>

        <h1 style={Fonts.poppins.medium} className="text-3xl mb-3">
          Your Life for <br /> Greater Self Reflection
        </h1>
        <p style={Fonts.poppins.light} className="text-base text-gray-600 mb-8">
          Pause, reflect, and gain clarity to understand yourself better and
          make mindful choices.
        </p>

        <div className="flex justify-center mb-10">
          <div
            className="w-[400px] h-[350px] bg-cover bg-center rounded-2xl"
            style={{ backgroundImage: `url(${Reflectionimg})` }}
          />
        </div>

        {/* Details */}
        <div className="flex flex-col gap-10 text-left">
          {[
            {
              icon: <GrUserExpert size={24} color="white" />,
              color: "#A973C5",
              title: "Expert Instructors",
            },
            {
              icon: <GiMeditation size={24} color="white" />,
              color: "#88E566",
              title: "Transformative Power of Meditation",
            },
            {
              icon: <RiUserCommunityFill size={24} color="white" />,
              color: "#4FCBCF",
              title: "Welcoming Community",
            },
          ].map((item, i) => (
            <div key={i}>
              <div className="flex flex-row gap-3 items-start">
                <div
                  className="p-6 rounded-2xl flex items-center justify-center"
                  style={{ backgroundColor: item.color }}
                >
                  {item.icon}
                </div>
                <div>
                  <h1 style={Fonts.poppins.medium} className="text-xl mb-1">
                    {item.title}
                  </h1>
                  <p
                    style={Fonts.poppins.regular}
                    className="text-sm text-gray-600"
                  >
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </p>
                </div>
              </div>
              {i < 2 && <div className="w-full h-[1px] bg-gray-100 my-4" />}
            </div>
          ))}
        </div>
      </div>

      {/* ---------- LAPTOP VIEW (1024px – 1279px) ---------- */}
      <div className="hidden md:flex lg:hidden flex-row px-16 py-12 items-center justify-between">
        {/* Text Part */}
        <div className="w-1/2 flex flex-col gap-10">
          <div>
            <h3
              className="bg-[#F9F8FF] py-2 px-10 rounded-full mb-4 inline-block"
              style={Fonts.poppins.regular}
            >
              OUR MOTIVE
            </h3>
            <h1 style={Fonts.poppins.medium} className="text-4xl mb-3">
              Your Life for <br /> Greater Self Reflection
            </h1>
            <p
              style={Fonts.poppins.light}
              className="text-lg text-gray-600 mb-6"
            >
              Pause, reflect, and gain clarity to understand yourself better and
              make mindful choices.
            </p>
          </div>

          {/* Details */}
          <div className="flex flex-col gap-10">
            <ReflectionDetails />
          </div>
        </div>

        {/* Image */}
        <div
          className="w-[450px] h-[500px] rounded-2xl bg-cover bg-center"
          style={{ backgroundImage: `url(${Reflectionimg})` }}
        />
      </div>

      {/* ---------- DESKTOP VIEW (≥1280px) ---------- */}
      <div className="hidden lg:flex flex-row px-10 py-14 items-center justify-between">
        {/* Text Part */}
        <div className="w-1/2 flex flex-col gap-12">
          <div>
            <h3
              className="bg-[#F9F8FF] py-2 px-10 rounded-full mb-4 inline-block"
              style={Fonts.poppins.regular}
            >
              OUR MOTIVE
            </h3>
            <h1 style={Fonts.poppins.medium} className="text-5xl mb-3">
              Your Life for <br /> Greater Self Reflection
            </h1>
            <p
              style={Fonts.poppins.light}
              className="text-lg text-gray-600 mb-6"
            >
              Pause, reflect, and gain clarity to understand yourself better and
              make mindful choices.
            </p>
          </div>

          <div className="flex flex-col gap-12">
            <ReflectionDetails />
          </div>
        </div>

        {/* Image */}
        <div
          className="w-[600px] h-[700px] rounded-2xl bg-cover bg-center"
          style={{ backgroundImage: `url(${Reflectionimg})` }}
        />
      </div>
    </div>
  );
};

// 🧩 Common Details Section (reused for larger screens)
const ReflectionDetails = () => {
  const data = [
    {
      icon: <GrUserExpert size={24} color="white" />,
      color: "#A973C5",
      title: "Expert Instructors",
    },
    {
      icon: <GiMeditation size={24} color="white" />,
      color: "#88E566",
      title: "Transformative Power of Meditation",
    },
    {
      icon: <RiUserCommunityFill size={24} color="white" />,
      color: "#4FCBCF",
      title: "Welcoming Community",
    },
  ];

  return (
    <>
      {data.map((item, i) => (
        <div key={i}>
          <div className="flex flex-row gap-3 items-start">
            <div
              className="p-6 rounded-2xl flex items-center justify-center"
              style={{ backgroundColor: item.color }}
            >
              {item.icon}
            </div>
            <div>
              <h1 style={Fonts.poppins.medium} className="text-2xl mb-1">
                {item.title}
              </h1>
              <p
                style={Fonts.poppins.regular}
                className="text-sm text-gray-600"
              >
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever.
              </p>
            </div>
          </div>
          {i < 2 && <div className="w-11/12 h-[1px] bg-gray-100 my-4" />}
        </div>
      ))}
    </>
  );
};

export default Reflection;

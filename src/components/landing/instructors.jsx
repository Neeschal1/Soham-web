import React from "react";
import Fonts from "../../utils/fontsconfig";
import Nikki from "../../assets/images/nikki.png";
import Braun from "../../assets/images/braun.png";
import Dana from "../../assets/images/dana.png";

const instructor_detail = [
  {
    id: 1,
    img: Nikki,
    name: "Nikki Bella",
    about_instructor:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    id: 2,
    img: Braun,
    name: "Braun Strowman",
    about_instructor:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    id: 3,
    img: Dana,
    name: "Dana Brooke",
    about_instructor:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
];

const Instructors = () => {
  return (
    <div className="w-full mt-10">
      {/* ----------- MOBILE VIEW (below 640px) ----------- */}
      <div className="block items-center w-full justify-center flex-col sm:hidden px-4 py-8 text-center">
        <div className="flex justify-center">
          <h3
            className="bg-[#F9F8FF] py-2 px-6 rounded-full text-sm"
            style={Fonts.poppins.regular}
          >
            OUR PEDAGOGUE
          </h3>
        </div>

        <h1 style={Fonts.poppins.medium} className="text-2xl mt-4 mb-2">
          Meet our Expert Instructor
        </h1>
        <p style={Fonts.poppins.light} className="text-sm text-gray-600 mb-8">
          Discover the experts guiding your journey. Our instructors bring years
          of experience, passion, and knowledge to help you grow and learn.
        </p>

        <div className="flex flex-col items-center gap-6">
          {instructor_detail.map((item) => (
            <div
              key={item.id}
              style={{ backgroundImage: `url(${item.img})` }}
              className="relative w-full h-[400px] rounded-xl bg-cover bg-center overflow-hidden hover:scale-105 transition-transform duration-500"
            >
              <div className="absolute bottom-0 w-full p-4 bg-black/40 backdrop-blur-sm">
                <h1 style={Fonts.poppins.medium} className="text-white text-lg">
                  {item.name}
                </h1>
                <h3
                  style={Fonts.poppins.regular}
                  className="text-[#E0E0E0] text-xs mt-1"
                >
                  {item.about_instructor}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ----------- TABLET VIEW (640px – 1023px) ----------- */}
      <div className="hidden sm:block md:hidden px-8 py-10 text-center">
        <h3
          className="bg-[#F9F8FF] py-2 px-8 rounded-full text-base"
          style={Fonts.poppins.regular}
        >
          OUR PEDAGOGUE
        </h3>

        <h1 style={Fonts.poppins.medium} className="text-3xl mt-4 mb-2">
          Meet our Expert Instructor
        </h1>
        <p style={Fonts.poppins.light} className="text-base text-gray-600 mb-8">
          Discover the experts guiding your journey. Our instructors bring years
          of experience, passion, and knowledge to help you grow and learn.
        </p>

        <div className="grid grid-cols-2 gap-6 justify-items-center">
          {instructor_detail.map((item) => (
            <div
              key={item.id}
              style={{ backgroundImage: `url(${item.img})` }}
              className="relative w-[300px] h-[480px] rounded-xl bg-cover bg-center overflow-hidden hover:scale-105 transition-transform duration-500"
            >
              <div className="absolute bottom-0 w-full p-4 bg-black/40 backdrop-blur-sm">
                <h1 style={Fonts.poppins.medium} className="text-white text-xl">
                  {item.name}
                </h1>
                <h3
                  style={Fonts.poppins.regular}
                  className="text-[#E0E0E0] text-sm mt-1"
                >
                  {item.about_instructor}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ----------- LAPTOP VIEW (1024px – 1279px) ----------- */}
      <div className="hidden md:block lg:hidden px-12 py-12 text-center">
        <h3
          className="bg-[#F9F8FF] py-2 px-10 rounded-full text-base"
          style={Fonts.poppins.regular}
        >
          OUR PEDAGOGUE
        </h3>

        <h1 style={Fonts.poppins.medium} className="text-4xl mt-4 mb-2">
          Meet our Expert Instructor
        </h1>
        <p style={Fonts.poppins.light} className="text-lg text-gray-600 mb-10">
          Discover the experts guiding your journey. Our instructors bring years
          of experience, passion, and knowledge to help you grow and learn.
        </p>

        <div className="grid grid-cols-3 gap-10 justify-items-center">
          {instructor_detail.map((item) => (
            <div
              key={item.id}
              style={{ backgroundImage: `url(${item.img})` }}
              className="relative w-[360px] h-[550px] rounded-xl bg-cover bg-center overflow-hidden hover:scale-105 transition-transform duration-500"
            >
              <div className="absolute bottom-0 w-full p-4 bg-black/40 backdrop-blur-sm">
                <h1
                  style={Fonts.poppins.medium}
                  className="text-white text-2xl"
                >
                  {item.name}
                </h1>
                <h3
                  style={Fonts.poppins.regular}
                  className="text-[#E0E0E0] text-sm mt-1"
                >
                  {item.about_instructor}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ----------- DESKTOP VIEW (≥1280px) ----------- */}
      <div className="hidden lg:block px-20 py-14 text-center items-center">

        <div className="flex flex-1 items-center justify-center">
          <h3
            className="bg-[#F9F8FF] py-2 px-12 rounded-full text-lg"
            style={Fonts.poppins.regular}
          >
            OUR PEDAGOGUE
          </h3>
        </div>

        <h1 style={Fonts.poppins.medium} className="text-5xl mt-4 mb-2">
          Meet our Expert Instructor
        </h1>
        <p style={Fonts.poppins.light} className="text-lg text-gray-600 mb-10">
          Discover the experts guiding your journey. Our instructors bring years
          of experience, passion, and knowledge to help you grow and learn.
        </p>

        <div className="grid grid-cols-3 gap-25 justify-items-center">
          {instructor_detail.map((item) => (
            <div
              key={item.id}
              style={{ backgroundImage: `url(${item.img})` }}
              className="relative w-[430px] h-[590px] rounded-xl bg-cover bg-center overflow-hidden hover:scale-105 transition-transform duration-500"
            >
              <div className="absolute bottom-0 w-full p-4 bg-black/40 backdrop-blur-sm">
                <h1
                  style={Fonts.poppins.medium}
                  className="text-white text-2xl"
                >
                  {item.name}
                </h1>
                <h3
                  style={Fonts.poppins.regular}
                  className="text-[#E0E0E0] text-sm mt-1"
                >
                  {item.about_instructor}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Instructors;

import React from "react";
import Fonts from "../../utils/fontsconfig";
import Nikki from "../../assets/images/nikki.png";
import Braun from "../../assets/images/braun.png";
import Dana from "../../assets/images/dana.png";
import Tyore from "../../assets/images/tyore.png";
import Windham from "../../assets/images/windham.png";

const instructor_detail = [
  {
    id: 1,
    img: Nikki,
    name: "Nikki Bella",
    about_instructor:
      "Lorem Ipsum is simply dummy text of the printing and  typesetting industry. ",
  },
  {
    id: 2,
    img: Braun,
    name: "Braun Strowman",
    about_instructor:
      "Lorem Ipsum is simply dummy text of the printing and  typesetting industry. ",
  },
  {
    id: 3,
    img: Dana,
    name: "Dana Brooke",
    about_instructor:
      "Lorem Ipsum is simply dummy text of the printing and  typesetting industry. ",
  }
];

const Instructors = () => {
  return (
    <>
      <div className="flex flex-1 flex-col justify-center items-center w-full p-10 mt-10">
        {/* Instructor's content */}
        <div className="flex flex-col gap-6 justify-center w-full items-center">
          <div className="flex">
            <h3
              className="bg-[#F9F8FF] py-2 px-10 rounded-full text-center"
              style={Fonts.poppins.regular}
            >
              OUR PEDAGOGUE
            </h3>
          </div>
          <div className="flex w-5/12 flex-col gap-4">
            <h1 style={Fonts.poppins.medium} className="text-4xl text-center">
              Meet our Expert Instructor
            </h1>
            <h3 className="text-center" style={Fonts.poppins.light}>
              Discover the experts guiding your journey. Our instructors bring
              years of experience, passion, and knowledge to help you grow,
              learn, and achieve your goals with confidence.
            </h3>
          </div>
        </div>

        {/* Instructors */}
        <div className="grid grid-cols-3 gap-6 mt-10 justify-items-center">
  {instructor_detail.map((index) => (
    <div
      key={index.id}
      style={{ backgroundImage: `url(${index.img})` }}
      className="relative w-[430px] h-[590px] rounded-xl bg-cover bg-center overflow-hidden transition-transform duration-500 hover:scale-105 cursor-pointer"
    >
      {/* Overlay at the bottom */}
      <div className="absolute bottom-0 w-full p-4 bg-black/40 backdrop-blur-sm">
        <h1
          style={Fonts.poppins.medium}
          className="text-white text-2xl"
        >
          {index.name}
        </h1>
        <h3
          style={Fonts.poppins.regular}
          className="text-[#E0E0E0] text-xs mt-1"
        >
          {index.about_instructor}
        </h3>
      </div>
    </div>
  ))}
</div>

      </div>
    </>
  );
};

export default Instructors;

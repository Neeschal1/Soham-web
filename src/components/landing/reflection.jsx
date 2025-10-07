import React from "react";
import Fonts from "../../utils/fontsconfig";
import Reflectionimg from "../../assets/images/reflection.png";
import { GrUserExpert } from "react-icons/gr";
import { GiMeditation } from "react-icons/gi";
import { RiUserCommunityFill } from "react-icons/ri";

const Reflection = () => {
  return (
    <div className="flex flex-row p-10 mt-15">
      <div className="flex flex-1 flex-col justify-center gap-15">
        {/* Reflection heading */}
        <div className="flex flex-col gap-6 justify-center">
          <div className="flex">
            <h3
              className="bg-[#F9F8FF] py-2 px-10 rounded-full "
              style={Fonts.poppins.regular}
            >
              OUR MOTIVE
            </h3>
          </div>
          <div className="flex flex-col gap-4">
            <h1 style={Fonts.poppins.medium} className="text-4xl ">
              Your Life for <br/>Greater Self Reflection
            </h1>
            <h3 style={Fonts.poppins.light}>
              Pause, reflect, and gain clarity to understand yourself <br/>better and
              make mindful choices.
            </h3>
          </div>
        </div>

        {/* Details */}
        <div className="flex flex-col gap-10">
          <div className="flex flex-row gap-3">
            <div className="p-6 rounded-2xl bg-[#A973C5] items-center justify-center">
              <GrUserExpert size={24} style={{ color: "white" }} />
            </div>
            <div className="flex flex-col gap-1">
              <h1 style={Fonts.poppins.medium} className="text-2xl">
                Expert Instructors
              </h1>
              <h3 style={Fonts.poppins.regular} className="text-sm">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum 
                has been the industry's standard dummy text ever.
              </h3>
            </div>
          </div>
          <div className="w-11/12 h-0.5 rounded-full bg-gray-100" />
          <div className="flex flex-row gap-3">
            <div className="p-6 rounded-2xl bg-[#88E566] items-center justify-center">
              <GiMeditation size={24} style={{ color: "white" }} />
            </div>
            <div className="flex flex-col gap-1">
              <h1 style={Fonts.poppins.medium} className="text-2xl">
                Transformative Power of Meditation
              </h1>
              <h3 style={Fonts.poppins.regular} className="text-sm">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum
                has been the industry's standard dummy text ever.
              </h3>
            </div>
          </div>
          <div className="w-11/12 h-0.5 rounded-full bg-gray-100" />
          <div className="flex flex-row gap-3">
            <div className="p-6 rounded-2xl bg-[#4FCBCF] items-center justify-center">
              <RiUserCommunityFill size={24} style={{ color: "white" }} />
            </div>
            <div className="flex flex-col gap-1">
              <h1 style={Fonts.poppins.medium} className="text-2xl">
                Welcoming Community
              </h1>
              <h3 style={Fonts.poppins.regular} className="text-sm">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum
                has been the industry's standard dummy text ever.
              </h3>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="h-170 w-180 rounded-2xl" style={{backgroundImage: `url(${Reflectionimg})`}}></div>
      </div>
    </div>
  );
};

export default Reflection;

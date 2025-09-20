import React, { useState } from "react";
import Fonts from "../../utils/fontsconfig";
import Detailcard from "../../assets/images/detail_card.png";
import { LuArrowUpRight } from "react-icons/lu";
import Silence from "../../assets/images/silence.jpg";
import Happy from "../../assets/images/happy.jpg";

const buttonoptions = ["Meditation", "Yoga", "Relax"];

const journey_options = [
  {
    id: "1",
    image: Silence,
    title: (
      <>
        Embrace the <br /> silence
      </>
    ),
    subtitle:
      "Whether you're looking to manage stress, improve focus or simply find moments.",
  },
  {
    id: "2",
    image: Happy,
    title: "Celebrate the present moment",
    subtitle:
      "From letting go of worries to building focus, or simply enjoying the moment.",
  },
];

const Journey = () => {
  const [btn, setbtn] = useState("Meditation");
  return (
    <>
      <div className="flex flex-1 w-full p-10 flex-col gap-10 py-30 mb-10">
        <div className="flex flex-col w-full gap-3">
          <div className="flex">
            <h3
              className="bg-[#F9F8FF] py-2 px-4 rounded-full"
              style={Fonts.poppins.regular}
            >
              DISCOVER MORE
            </h3>
          </div>
          <div className="flex flex-row justify-between items-center w-full">
            <h1 style={Fonts.poppins.medium} className="text-4xl">
              Start your Journey
              <br /> today
            </h1>
            <div className="flex gap-4">
              {buttonoptions.map((items) => (
                <button
                  style={Fonts.poppins.regular}
                  key={items}
                  onClick={() => setbtn(items)}
                  className={`text-l font-poppins font-regular rounded-3xl px-8 py-3 transition-colors duration-800
          ${
            btn === items
              ? "bg-[#000000] text-white"
              : "border border-[#989898] text-black hover:bg-black hover:text-white"
          }
        `}
                >
                  {items}
                </button>
              ))}
            </div>
          </div>
        </div>
        <div className="flex flex-row items-center justify-between gap-10">
          <div
            className="w-6/12 h-190 rounded-4xl flex flex-col p-6 items-center justify-between object-cover"
            style={{ backgroundImage: `url(${Detailcard})` }}
          >
            <div className="flex w-full flex-row items-center justify-between">
              <button
                className="bg-[#FFFFFF] py-3 px-4 rounded-full"
                style={Fonts.poppins.regular}
              >
                Check full details
              </button>
              <div className="bg-white rounded-full py-3 px-3">
                <LuArrowUpRight size={20} />
              </div>
            </div>
            <div className="w-full flex flex-col gap-4">
              <div>
                <h2
                  style={Fonts.poppins.regular}
                  className="text-white text-xl"
                >
                  Together, lets journey towards the life of greater presence,
                  peace and well-being.
                </h2>
              </div>
              <div>
                <div className="w-full relative flex">
                  <input
                    className="w-full h-13 border border-white rounded-full p-5 pr-32 text-white bg-transparent placeholder-white "
                    type="email"
                    placeholder="Enter your email:"
                  />
                  <button
                    style={Fonts.poppins.regular}
                    className="absolute right-2 top-1/2 -translate-y-1/2 bg-[#00DADA] text-white px-5 py-2 rounded-full hover:bg-black transition duration-800"
                  >
                    Get Started
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col w-6/12 gap-10">
            {journey_options.map((items) => (
              <div key={items.id} className="h-90 w-full rounded-3xl bg-[#F2F2F2]">
                <div className="flex flex-row justify-between">
                  <div className="flex flex-col items-start p-5 gap-5">
                    <div className="flex flex-row justify-center items-center">
                      <div>
                        <button
                          style={Fonts.poppins.regular}
                          className="bg-white py-3 px-3 rounded-full"
                        >
                          Discover more
                        </button>
                      </div>
                      <div className="bg-white py-3 px-3 rounded-full">
                        <LuArrowUpRight size={20} />
                      </div>
                    </div>
                    <div className="gap-4 flex flex-col">
                      <h1 style={Fonts.poppins.medium} className="text-3xl">
                        {items.title}
                      </h1>
                      <h3 style={Fonts.poppins.regular}>
                        {items.subtitle}
                      </h3>
                    </div>
                  </div>
                  <img className="h-90 w-6/12 rounded-3xl object-cover" src={items.image} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Journey;

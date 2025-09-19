import React from "react";
import Fonts from "../../utils/fontsconfig";

const Moreaboutus = () => {
  return (
    <>
      <div className="items-center justify-center flex flex-1 flex-col bg-[#F2F1FF] py-30">
        <div className="flex flex-col gap-8 items-center justify-center">
          <div className="flex gap-3 flex-col">
            <div className="flex flex-row items-center gap-3 justify-center">
              <h1 className="text-2xl font-poppins font-medium text-black/20">
                •
              </h1>
              <h3
                style={Fonts.poppins.regular}
                className="font-poppins font-medium text-black/20"
              >
                Soham
              </h3>
            </div>
            <div>
              <h1
                style={Fonts.poppins.medium}
                className="text-center text-4xl font-poppins font-medium"
              >
                Combining mindful practices to help users
                <br /> stay calm, focused, and balanced—
                <br />
                anytime, anywhere.
              </h1>
              <h3
                className="text-[#7D7D7D] text-center"
                style={Fonts.poppins.regular}
              >
                We provide instant access to guided meditation and mindful
                practices with tools for relaxation, stress
                <br /> relief, and daily well-being
              </h3>
            </div>
          </div>
          <div>
            <button className="bg-[#00DADA] py-4 px-10 rounded text-xl text-white hover:bg-black duration-800">
              More about us
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Moreaboutus;

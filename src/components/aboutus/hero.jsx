import React from "react";
import Fonts from "../../utils/fontsconfig";
import Navbar from "../../constant/navbar";
import happyfamily from "../../assets/images/aboutus.jpg";
import Users from "../../assets/images/users.png";
import logoblack from "../../assets/images/logoblack.png";
import meditate from "../../assets/images/meditate.png";

const Aboutushero = () => {
  return (
    <div className="flex flex-col flex-1 h-screen w-full bg-cover bg-center bg-[#F2F1FF]">
      <div className="w-full flex-1 p-4 h-full flex flex-col bg-black/5 ">
        <Navbar textColor="[#DFDFDF]" logo={logoblack} />

        {/* Center contents */}
        <div className="flex-1 align-start flex-row w-full flex items-center justify-center ">
          <div className="flex flex-1 gap-5 mt-[-200px] items-start w-full flex-col">
            <div className="py-3 px-9 flex flex-1 w-8/12 rounded-full items-center justify-center bg-white">
              <h1 style={{ ...Fonts.poppins.light }} className="text-black/60">
                Awaken inner peace, nurture your mind, and restore your soul
              </h1>
            </div>
            <div className="flex flex-1 gap-10 items-start flex-col ">
              <div>
                <h1
                  style={{ ...Fonts.poppins.medium }}
                  className="text-black text-7xl w-full text-start flex flex-1"
                >
                 Meditate, relax and find clarity with us.
                </h1>
                <h3
                  style={Fonts.poppins.regular}
                  className="text-lg text-black/50 pt-3"
                >
                  Join our community and embrace a calmer, more centered life.
                </h3>
              </div>
              <div>
                <button
                //   onClick={()=>{navigate('/signup')}}
                  style={Fonts.poppins.regular}
                  className="bg-[#00DADA] py-4 px-15 rounded-full text-white hover:bg-black duration-500 cursor-pointer"
                >
                  Contact us
                </button>
              </div>
            </div>
          </div>
          <img className="h-10/12 mt-[-191px]" src={meditate} />
        </div>
      </div>
    </div>
  );
};

export default Aboutushero;

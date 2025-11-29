import React from "react";
import supportimage from "../../assets/images/signupbackgroundimg.png";
import foregroundimage from "../../assets/images/signupforegroundimg.png";
import Detailcard from "./detailcard";

const Signupui = () => {
  return (
    <div className="flex flex-1">
      <div className="flex flex-1 bg-[#F2F1FF] bg-cover items-center justify-end">
        <img className="h-11/12 w-11/12" src={foregroundimage} />
      </div>
      <div
        className="flex w-6/12 h-screen bg-cover bg-center items-center justify-start"
        style={{ backgroundImage: `url(${supportimage})` }}
      >
        <Detailcard />
      </div>
    </div>
  );
};

export default Signupui;

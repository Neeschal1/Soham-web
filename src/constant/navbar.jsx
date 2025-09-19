import React, { useState } from "react";
import Logo from "../assets/images/logo.png";
import Fonts from "../utils/fontsconfig";

const Navbar = () => {
  const [active, setActive] = useState("Our Story");

  const navItems = [
    "Our Story",
    "Meditation",
    "Purpose",
    "Our Mission",
    "About Us",
  ];

  return (
    <div className="flex flex-row items-center justify-between p-4 gap-4 bg-transparent">
      <img className="h-10 w-36" src={Logo} alt="Logo" />

      <div className="flex bg-white/5 backdrop- p-2 border-t border-b border-r border-white/30 shadow-lg rounded-full items-center gap-3">
        {navItems.map((item) => (
          <button
          style={Fonts.poppins.light}
            key={item}
            onClick={() => setActive(item)}
            className={`text-l font-poppins font-regular rounded-3xl px-6 py-2 transition-colors duration-800
              ${
                active === item
                  ? "bg-[#F2F1FF] text-black"
                  : "bg-transparent text-white hover:bg-white/30 hover:text-black"
              }
            `}
          >
            {item}
          </button>
        ))}
      </div>
      <div>
        <button style={Fonts.poppins.regular} className="bg-white px-10 py-4 rounded-4xl hover:bg-[#F2F1FF] duration-300">
          Sign up
        </button>
      </div>
    </div>
  );
};

export default Navbar;

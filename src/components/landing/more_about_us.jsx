import React, { useEffect, useRef, useState } from "react";
import Fonts from "../../utils/fontsconfig";

const MoreAboutUs = () => {
  const scrollRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const section = scrollRef.current;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.unobserve(section);
          }
        });
      },
      { threshold: 0.2 }
    );
    if (section) observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={scrollRef}
      className={`w-full transition-all duration-700 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      {/* ----------- MOBILE VIEW (below 640px) ----------- */}
      <div className="block sm:hidden flex-col items-center justify-center bg-[#F2F1FF] py-12 px-4 text-center">
        <div className="flex flex-col gap-6 items-center justify-center">
          <div className="flex flex-col gap-2 items-center">
            <div className="flex items-center gap-2 justify-center">
              <h1 className="text-xl font-poppins font-medium text-black/20">•</h1>
              <h3 style={Fonts.poppins.regular} className="text-sm text-black/20">
                Soham
              </h3>
            </div>
            <h1 style={Fonts.poppins.medium} className="text-2xl font-medium">
              Combining mindful practices to help users
              <br /> stay calm, focused, and balanced—
              <br /> anytime, anywhere.
            </h1>
            <h3 style={Fonts.poppins.regular} className="text-sm text-[#7D7D7D]">
              We provide instant access to guided meditation and mindful
              <br /> practices with tools for relaxation, stress relief, and daily
              well-being
            </h3>
          </div>
          <button className="bg-[#00DADA] py-3 px-6 rounded text-base text-white hover:bg-black duration-800">
            More about us
          </button>
        </div>
      </div>

      {/* ----------- TABLET VIEW (640px – 1023px) ----------- */}
      <div className="hidden sm:flex md:hidden flex-col items-center justify-center bg-[#F2F1FF] py-16 px-8 text-center">
        <div className="flex flex-col gap-8 items-center justify-center">
          <div className="flex flex-col gap-3 items-center">
            <div className="flex items-center gap-3 justify-center">
              <h1 className="text-2xl font-poppins font-medium text-black/20">•</h1>
              <h3 style={Fonts.poppins.regular} className="text-base text-black/20">
                Soham
              </h3>
            </div>
            <h1 style={Fonts.poppins.medium} className="text-3xl font-medium">
              Combining mindful practices to help users
              <br /> stay calm, focused, and balanced—
              <br /> anytime, anywhere.
            </h1>
            <h3 style={Fonts.poppins.regular} className="text-base text-[#7D7D7D]">
              We provide instant access to guided meditation and mindful
              <br /> practices with tools for relaxation, stress relief, and daily
              well-being
            </h3>
          </div>
          <button className="bg-[#00DADA] py-4 px-8 rounded text-lg text-white hover:bg-black duration-800">
            More about us
          </button>
        </div>
      </div>

      {/* ----------- LAPTOP VIEW (1024px – 1279px) ----------- */}
      <div className="hidden md:flex lg:hidden flex-col items-center justify-center bg-[#F2F1FF] py-20 px-12 text-center">
        <div className="flex flex-col gap-10 items-center">
          <div className="flex flex-col gap-4 items-center">
            <div className="flex items-center gap-4 justify-center">
              <h1 className="text-2xl font-poppins font-medium text-black/20">•</h1>
              <h3 style={Fonts.poppins.regular} className="text-lg text-black/20">
                Soham
              </h3>
            </div>
            <h1 style={Fonts.poppins.medium} className="text-4xl font-medium">
              Combining mindful practices to help users
              <br /> stay calm, focused, and balanced—
              <br /> anytime, anywhere.
            </h1>
            <h3 style={Fonts.poppins.regular} className="text-lg text-[#7D7D7D]">
              We provide instant access to guided meditation and mindful
              <br /> practices with tools for relaxation, stress relief, and daily
              well-being
            </h3>
          </div>
          <button className="bg-[#00DADA] py-4 px-10 rounded text-xl text-white hover:bg-black duration-800">
            More about us
          </button>
        </div>
      </div>

      {/* ----------- DESKTOP VIEW (≥1280px) ----------- */}
      <div className="hidden lg:flex flex-col items-center justify-center bg-[#F2F1FF] py-30 px-20 text-center">
        <div className="flex flex-col gap-12 items-center">
          <div className="flex flex-col gap-6 items-center">
            <div className="flex items-center gap-6 justify-center">
              <h1 className="text-2xl font-poppins font-medium text-black/20">•</h1>
              <h3 style={Fonts.poppins.regular} className="text-lg text-black/20">
                Soham
              </h3>
            </div>
            <h1 style={Fonts.poppins.medium} className="text-4xl font-medium">
              Combining mindful practices to help users
              <br /> stay calm, focused, and balanced—
              <br /> anytime, anywhere.
            </h1>
            <h3 style={Fonts.poppins.regular} className="text-lg text-[#7D7D7D]">
              We provide instant access to guided meditation and mindful
              <br /> practices with tools for relaxation, stress relief, and daily
              well-being
            </h3>
          </div>
          <button className="bg-[#00DADA] py-4 px-12 rounded text-xl text-white hover:bg-black duration-800">
            More about us
          </button>
        </div>
      </div>
    </div>
  );
};

export default MoreAboutUs;

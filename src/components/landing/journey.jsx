import React, { useEffect, useRef, useState } from "react";
import Fonts from "../../utils/fontsconfig";
import Detailcard from "../../assets/images/detail_card.png";
import Servicesimage from "../../assets/images/servicesimg.jpg";
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

  const detailRef = useRef(null);
  const [detailVisible, setDetailVisible] = useState(false);

  const cardsRef = useRef(null);
  const [cardsVisible, setCardsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setDetailVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );
    if (detailRef.current) observer.observe(detailRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setCardsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );
    if (cardsRef.current) observer.observe(cardsRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="w-full flex flex-col gap-10 p-5 md:p-10">
      {/* -------------------- Desktop / Large Screens -------------------- */}
      <div className="lg:flex flex-col gap-10 mt-20 mb-20">
        {/* Heading + Buttons */}
        <div className="flex justify-center items-center w-full">
          <div className="flex flex-1 flex-row gap-4 justify-center items-center">
            <div className="flex flex-col gap-5">
              <h3
                className="bg-[#F9F8FF] py-2 px-4 rounded-full w-fit"
                style={Fonts.poppins.regular}
              >
                DISCOVER MORE
              </h3>
              <h1 style={Fonts.poppins.medium} className="text-4xl">
                Start your Journey <br /> today
              </h1>
            </div>
            <div className="flex flex-1 gap-4 justify-end">
              {buttonoptions.map((items) => (
                <button
                  style={Fonts.poppins.regular}
                  key={items}
                  onClick={() => setbtn(items)}
                  className={`text-l font-poppins rounded-3xl px-8 py-3 transition-colors duration-800 ${
                    btn === items
                      ? "bg-black text-white"
                      : "border border-[#989898] text-black hover:bg-black hover:text-white"
                  }`}
                >
                  {items}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Detail Card */}
        <div className="flex flex-row gap-10">
          <div
            ref={detailRef}
            className={`w-9/12 h-150 rounded-4xl flex flex-col p-6 items-center justify-between object-cover transition-all duration-700 ${
              detailVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
            style={{
              backgroundImage: `url(${Detailcard})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="flex w-full flex-row items-center justify-between">
              <button
                className="bg-white py-3 px-4 rounded-full"
                style={Fonts.poppins.regular}
              >
                Check full details
              </button>
              <div className="bg-white rounded-full py-3 px-3">
                <LuArrowUpRight size={20} />
              </div>
            </div>
            <div className="w-full flex flex-col gap-4 mt-4">
              <h2
                style={Fonts.poppins.regular}
                className="text-white text-center text-2xl"
              >
                Together, let's journey towards the life of greater presence,
                peace and well-being.
              </h2>
              <div className="w-full relative flex">
                <input
                  className="w-full h-14 border border-white rounded-full p-5 pr-32 text-white bg-transparent placeholder-white"
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

          {/* Journey Cards */}
          <div
            ref={cardsRef}
            className={`flex flex-col gap-6 transition-all duration-700 ${
              cardsVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            {journey_options.map((items) => (
              <div
                key={items.id}
                className="h-72 w-full rounded-3xl bg-[#F2F2F2] p-4 flex flex-row gap-4"
              >
                <img
                  className="w-6/12 h-64 rounded-3xl object-cover"
                  src={items.image}
                />
                <div className="flex flex-col justify-between p-4 w-6/12 gap-3">
                  <h1 style={Fonts.poppins.medium} className="text-3xl">
                    {items.title}
                  </h1>
                  <h3 style={Fonts.poppins.regular}>{items.subtitle}</h3>
                  <div className="flex gap-2 mt-2 items-center">
                    <button
                      style={Fonts.poppins.regular}
                      className="bg-white py-2 px-3 rounded-full"
                    >
                      Discover more
                    </button>
                    <LuArrowUpRight size={18} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* -------------------- Tablet Screens -------------------- */}
      <div className="hidden md:flex lg:hidden flex-col gap-8">
        {/* Heading + Buttons */}
        <div className="flex flex-col items-center text-center gap-4">
          <h3
            className="bg-[#F9F8FF] py-2 px-4 rounded-full w-fit"
            style={Fonts.poppins.regular}
          >
            DISCOVER MORE
          </h3>
          <h1 style={Fonts.poppins.medium} className="text-3xl">
            Start your Journey <br /> today
          </h1>
          <div className="flex flex-wrap gap-3 justify-center mt-2">
            {buttonoptions.map((items) => (
              <button
                style={Fonts.poppins.regular}
                key={items}
                onClick={() => setbtn(items)}
                className={`text-l font-poppins rounded-3xl px-6 py-3 transition-colors duration-800 ${
                  btn === items
                    ? "bg-black text-white"
                    : "border border-[#989898] text-black hover:bg-black hover:text-white"
                }`}
              >
                {items}
              </button>
            ))}
          </div>
        </div>

        {/* Detail Card */}
        <div
          ref={detailRef}
          className={`w-full rounded-4xl flex flex-col p-6 items-center justify-between object-cover transition-all duration-700 ${
            detailVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
          style={{
            backgroundImage: `url(${Detailcard})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="flex w-full flex-row items-center justify-between">
            <button
              className="bg-white py-3 px-4 rounded-full"
              style={Fonts.poppins.regular}
            >
              Check full details
            </button>
            <div className="bg-white rounded-full py-3 px-3">
              <LuArrowUpRight size={20} />
            </div>
          </div>
          <div className="w-full flex flex-col gap-4 mt-4">
            <h2
              style={Fonts.poppins.regular}
              className="text-white text-center text-xl"
            >
              Together, let's journey towards the life of greater presence,
              peace and well-being.
            </h2>
            <div className="w-full relative flex">
              <input
                className="w-full h-12 border border-white rounded-full p-4 pr-28 text-white bg-transparent placeholder-white"
                type="email"
                placeholder="Enter your email:"
              />
              <button
                style={Fonts.poppins.regular}
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-[#00DADA] text-white px-4 py-2 rounded-full hover:bg-black transition duration-800"
              >
                Get Started
              </button>
            </div>
          </div>
        </div>

        {/* Journey Cards */}
        <div
          ref={cardsRef}
          className={`flex flex-col gap-6 transition-all duration-700 ${
            cardsVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          {journey_options.map((items) => (
            <div
              key={items.id}
              className="h-auto w-full rounded-3xl bg-[#F2F2F2] p-4 flex flex-col md:flex-row gap-4"
            >
              <img
                className="w-full md:w-6/12 h-48 md:h-60 rounded-3xl object-cover"
                src={items.image}
              />
              <div className="flex flex-col justify-between p-4 md:w-6/12 gap-3">
                <h1 style={Fonts.poppins.medium} className="text-3xl">
                  {items.title}
                </h1>
                <h3 style={Fonts.poppins.regular}>{items.subtitle}</h3>
                <div className="flex gap-2 mt-2 items-center">
                  <button
                    style={Fonts.poppins.regular}
                    className="bg-white py-2 px-3 rounded-full"
                  >
                    Discover more
                  </button>
                  <LuArrowUpRight size={18} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* -------------------- Mobile Screens -------------------- */}
      <div className="flex flex-col md:hidden gap-6 mt-20 mb-20">
        {/* Heading + Buttons */}
        <div className="flex flex-col items-center text-center gap-3">
          <h3
            className="bg-[#F9F8FF] py-2 px-4 rounded-full w-fit"
            style={Fonts.poppins.regular}
          >
            DISCOVER MORE
          </h3>
          <h1 style={Fonts.poppins.medium} className="text-2xl">
            Start your Journey <br /> today
          </h1>
          <div className="flex flex-wrap gap-3 justify-between mt-2">
            {buttonoptions.map((items) => (
              <button
                style={Fonts.poppins.regular}
                key={items}
                onClick={() => setbtn(items)}
                className={`text-sm font-poppins justify-between rounded-3xl px-6 py-3 transition-colors duration-800 ${
                  btn === items
                    ? "bg-black text-white"
                    : "border border-[#989898] text-black hover:bg-black hover:text-white"
                }`}
              >
                {items}
              </button>
            ))}
          </div>
        </div>

        {/* Detail Card */}
        <div
          ref={detailRef}
          className={`w-full h-100 rounded-4xl flex flex-col p-4 items-center justify-between object-cover transition-all duration-700 ${
            detailVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
          style={{
            backgroundImage: `url(${Servicesimage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="flex w-full flex-row items-center justify-between">
            <button
              className="bg-white py-3 px-4 rounded-full"
              style={Fonts.poppins.regular}
            >
              Check full details
            </button>
            <div className="bg-white rounded-full py-3 px-3">
              <LuArrowUpRight size={22} />
            </div>
          </div>
          <div className="w-full flex flex-col gap-3 mt-4">
            <h2
              style={Fonts.poppins.regular}
              className="text-white text-center text-lg"
            >
              Together, let's journey towards the life of greater presence,
              peace and well-being.
            </h2>
            <div className="w-full relative flex">
              <input
                className="w-full h-12 border border-white rounded-full p-4 pr-28 text-white bg-transparent placeholder-white"
                type="email"
                placeholder="Enter your email:"
              />
              <button
                style={Fonts.poppins.regular}
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-[#00DADA] text-white px-4 py-2 rounded-full hover:bg-black transition duration-800"
              >
                Get Started
              </button>
            </div>
          </div>
        </div>

        {/* Journey Cards */}
        <div
          ref={cardsRef}
          className={`flex flex-col gap-4 transition-all duration-700 ${
            cardsVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          {journey_options.map((items) => (
            <div
              key={items.id}
              className="h-auto w-full rounded-3xl bg-[#F2F2F2] p-4 flex flex-col gap-3"
            >
              <img
                className="w-full h-48 rounded-3xl object-cover"
                src={items.image}
              />
              <div className="flex flex-col justify-between p-2 gap-2">
                <h1 style={Fonts.poppins.medium} className="text-xl">
                  {items.title}
                </h1>
                <h3 style={Fonts.poppins.regular}>{items.subtitle}</h3>
                <div className="flex mt-2 items-center">
                  <button
                    style={Fonts.poppins.regular}
                    className="bg-white py-2 px-5 rounded-full"
                  >
                    Discover more
                  </button>
                  <div className="px-3 py-3 rounded-full bg-white">
                    <LuArrowUpRight size={16} />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Journey;

import React, { useEffect, useRef, useState } from "react";
import Fonts from "../../utils/fontsconfig";
import Detailcard from "../../assets/images/servicesimg.jpg";
import { LuArrowUpRight } from "react-icons/lu";
import Silence from "../../assets/images/silence.jpg";
import Happy from "../../assets/images/happy.jpg";

// Import your Yoga images
import YogaDetailcard from "../../assets/images/yoga.jpg"; // Add your yoga detail image
import YogaCard1 from "../../assets/images/yoga1.jpg"; // Add your yoga card images
import YogaCard2 from "../../assets/images/yoga2.jpg";

// Import your Relax images
import RelaxDetailcard from "../../assets/images/relax.jpg"; // Add your relax detail image
import RelaxCard1 from "../../assets/images/relax1.jpg"; // Add your relax card images
import RelaxCard2 from "../../assets/images/relax2.jpg";

const buttonoptions = ["Meditation", "Yoga", "Relax"];

// Content data for each category
const contentData = {
  Meditation: {
    detailCard: {
      image: Detailcard,
      text: "Together, let's journey towards the life of greater presence, peace and well-being.",
    },
    journeyCards: [
      {
        id: "1",
        image: Silence,
        title: (
          <>
            Embrace the <br /> silence
          </>
        ),
        subtitle: "Whether you're looking to manage stress, improve focus or simply find moments.",
      },
      {
        id: "2",
        image: Happy,
        title: "Celebrate the present moment",
        subtitle: "From letting go of worries to building focus, or simply enjoying the moment.",
      },
    ],
  },
  Yoga: {
    detailCard: {
      image: YogaDetailcard,
      text: "Transform your body and mind through ancient yoga practices designed for modern living.",
    },
    journeyCards: [
      {
        id: "1",
        image: YogaCard1,
        title: (
          <>
            Flow with <br /> strength
          </>
        ),
        subtitle: "Build flexibility, strength, and balance through dynamic yoga sequences.",
      },
      {
        id: "2",
        image: YogaCard2,
        title: "Find your center",
        subtitle: "Connect breath with movement to create harmony between body and mind.",
      },
    ],
  },
  Relax: {
    detailCard: {
      image: RelaxDetailcard,
      text: "Discover the art of deep relaxation and rejuvenation for your body, mind, and soul.",
    },
    journeyCards: [
      {
        id: "1",
        image: RelaxCard1,
        title: (
          <>
            Unwind and <br /> restore
          </>
        ),
        subtitle: "Experience calming techniques that melt away tension and promote deep rest.",
      },
      {
        id: "2",
        image: RelaxCard2,
        title: "Natural serenity",
        subtitle: "Reconnect with nature's rhythms to find peace and balance in your daily life.",
      },
    ],
  },
};

const Journey = () => {
  const [btn, setBtn] = useState("Meditation");

  // Get current content based on selected button
  const currentContent = contentData[btn];

  // Separate refs for DetailCard and JourneyCards
  const detailRef = useRef(null);
  const cardsRef = useRef(null);

  const [detailVisible, setDetailVisible] = useState(false);
  const [cardsVisible, setCardsVisible] = useState(false);

  // Intersection Observer for Detail Card
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

  // Intersection Observer for Journey Cards
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
    <div className="w-full flex flex-col gap-10 p-5 md:p-10 mt-20 mb-20">
      {/* -------------------- Heading + Buttons -------------------- */}
      <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
        {/* Heading */}
        <div className="flex flex-col gap-3 text-center lg:text-left">
          <h3
            className="bg-[#F9F8FF] py-2 px-4 rounded-full w-fit mx-auto lg:mx-0"
            style={Fonts.poppins.regular}
          >
            DISCOVER MORE
          </h3>
          <h1
            style={Fonts.poppins.medium}
            className="text-2xl md:text-3xl lg:text-4xl"
          >
            Start your Journey <br /> today
          </h1>
        </div>

        {/* Buttons */}
        <div className="flex flex-wrap gap-3 justify-center lg:justify-end">
          {buttonoptions.map((item) => (
            <button
              key={item}
              onClick={() => setBtn(item)}
              style={Fonts.poppins.regular}
              className={`text-sm md:text-base font-poppins rounded-3xl px-6 py-3 transition-colors duration-800 ${
                btn === item
                  ? "bg-black text-white"
                  : "border border-[#989898] text-black hover:bg-black hover:text-white"
              }`}
            >
              {item}
            </button>
          ))}
        </div>
      </div>

      {/* -------------------- Detail Card -------------------- */}
      <div className="flex flex-1 lg:flex-row lg:gap-10 flex-col gap-10">
        <div
          ref={detailRef}
          className={`w-full lg:w-9/12 mx-auto h-[500px] md:h-[550px] lg:h-[600px] rounded-4xl flex flex-col p-6 items-center justify-between bg-cover bg-center transition-all duration-700 ${
            detailVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
          style={{ backgroundImage: `url(${currentContent.detailCard.image})` }}
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
              className="text-white text-center text-xl md:text-2xl"
            >
              {currentContent.detailCard.text}
            </h2>
            <div className="w-full relative flex">
              <input
                className="w-full h-12 md:h-14 border border-white rounded-full p-4 pr-28 md:pr-32 text-white bg-transparent placeholder-white"
                type="email"
                placeholder="Enter your email:"
              />
              <button
                style={Fonts.poppins.regular}
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-[#00DADA] text-white px-4 md:px-5 py-2 rounded-full hover:bg-black transition duration-800"
              >
                Get Started
              </button>
            </div>
          </div>
        </div>

        {/* -------------------- Journey Cards -------------------- */}
        <div
          ref={cardsRef}
          className={`flex flex-col gap-6 transition-all duration-700 ${
            cardsVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          {currentContent.journeyCards.map((item) => (
            <div
              key={item.id}
              className="h-auto lg:h-72 md:h-60 w-full rounded-3xl bg-[#F2F2F2] p-4 flex flex-col md:flex-row gap-4"
            >
              <img
                className="w-full md:w-6/12 h-48 md:h-full rounded-3xl object-cover"
                src={item.image}
                alt={item.title}
              />
              <div className="flex flex-col justify-between p-4 md:w-6/12 gap-3">
                <h1
                  style={Fonts.poppins.medium}
                  className="text-2xl md:text-3xl"
                >
                  {item.title}
                </h1>
                <h3 style={Fonts.poppins.regular}>{item.subtitle}</h3>
                <div className="flex mt-2 items-center">
                  <button
                    style={Fonts.poppins.regular}
                    className="bg-white py-3 px-5 rounded-full"
                  >
                    Discover more
                  </button>
                  <div className="px-3 py-3 bg-white rounded-full">
                    <LuArrowUpRight size={18} />
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
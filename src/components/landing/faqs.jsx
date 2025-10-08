import React, { useState, useEffect, useRef } from "react";
import { FaAngleUp, FaAngleDown } from "react-icons/fa";
import Fonts from "../../utils/fontsconfig";
import Faqimg from "../../assets/images/faqimg.jpg";

const Faqs = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const [visible, setVisible] = useState(false);

  const qunandanswers = [
    {
      question:
        "What is meditation, and why is it considered important for mental health?",
      answer:
        "Meditation is a mental practice in which a person uses techniques such as focusing the mind on a particular object, thought, or activity to achieve a mentally clear, emotionally calm, and stable state. It is considered important for mental health because it helps reduce stress, anxiety, and negative emotions. Scientific studies have shown that regular meditation can improve brain function, enhance focus, and increase emotional resilience, allowing people to cope better with challenges in daily life.",
    },
    {
      question: "What are the physical and mental health benefits of meditation?",
      answer:
        "Physical benefits: Lower blood pressure, reduced risk of heart disease, stronger immune system, better digestion, and improved sleep. Mental benefits: Enhanced focus and memory, reduced anxiety and depression, improved emotional regulation, increased creativity, and overall mental clarity. These benefits occur gradually with regular practice and can significantly improve quality of life.",
    },
    {
      question: "When is the best time to meditate, and why?",
      answer:
        "Early morning or just before bed is considered the best time. In the morning, the mind is fresh and less distracted, which helps set a calm tone for the day. Before bed, meditation helps relax the mind and body, promoting deep sleep and recovery from daily stress. Consistency in timing also helps make meditation a habit.",
    },
    {
      question: "Can meditation replace sleep, and what is its relationship with rest?",
      answer:
        "Meditation cannot replace sleep, but it can improve the quality of sleep. It relaxes the body and mind, making it easier to fall asleep and experience deep, restorative rest. Meditation before bed, especially breathing or guided meditation, can help reduce insomnia or restless thoughts, leading to better overall mental and physical health.",
    },
    {
      question: "How does meditation affect the brain and nervous system?",
      answer:
        "Meditation causes measurable changes in the brain. It increases grey matter, which is linked to memory, decision-making, and learning, and strengthens the prefrontal cortex, which is responsible for focus and planning. Simultaneously, it reduces activity in the amygdala, the part of the brain associated with fear, stress, and emotional reactions. Meditation also slows down the nervous system, lowers heart rate, and reduces cortisol, the stress hormone.",
    },
  ];

  const toggleOpen = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // Intersection Observer
  const scrollRef = useRef(null);
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
      className={`flex flex-col md:flex-row mb-20 items-center justify-between gap-15  lg:p-10 p-5 bg-white transition-all duration-700 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      {/* LEFT SIDE - Heading + Image */}
      <div className=" w-full md:w-6/12 flex flex-col items-start gap-8">
        {/* Heading Section */}
        <div className="lg:flex lg:flex-col lg:gap-3 lg:w-full lg:items-start flex flex-col items-center justify-center">
          <h3
            className="bg-[#F9F8FF] py-2 px-4 rounded-full lg:w-fit text-center"
            style={Fonts.poppins.regular}
          >
            FREQUENTLY ASKED QUESTIONS
          </h3>

          <h1
            style={Fonts.poppins.medium}
            className="text-3xl lg:text-4xl font-bold text-black lg:text-start text-center"
          >
            Find clarity through your meditation journey
          </h1>

          <p
            className="text-gray-600 mt-2 max-w-md lg:text-start text-center"
            style={Fonts.poppins.regular}
          >
            Explore common questions people have when beginning their meditation
            practice and discover how it can transform your life.
          </p>
        </div>

        {/* Image Below Heading */}
        <div className="lg:w-full lg:flex justify-center items-center hidden">
          <img
            src={Faqimg}
            alt="FAQ Illustration"
            className="rounded-3xl w-full h-[60vh] object-cover shadow-lg hover:scale-105 transition-transform duration-700 "
          />
        </div>
      </div>

      {/* RIGHT SIDE - FAQs */}
      <div className="w-full md:w-7/12 flex flex-col gap-8">
        {qunandanswers.map((item, index) => (
          <div
            key={index}
            onClick={() => toggleOpen(index)}
            className="bg-[#F8F8F8] rounded-2xl p-5 cursor-pointer transition-all duration-300 hover:bg-[#EBEBEB]"
          >
            <div className="flex justify-between items-start">
              <h3
                className="text-lg md:text-xl font-semibold text-black"
                style={Fonts.poppins.medium}
              >
                {item.question}
              </h3>
              <div className="ml-4 text-black flex-shrink-0">
                {openIndex === index ? (
                  <FaAngleUp className="w-5 h-5" />
                ) : (
                  <FaAngleDown className="w-5 h-5" />
                )}
              </div>
            </div>

            <div
              className={`overflow-hidden transition-all duration-500 ${
                openIndex === index ? "max-h-80 mt-3" : "max-h-0"
              }`}
            >
              <p
                className="text-sm md:text-base text-gray-600 leading-relaxed whitespace-pre-line"
                style={Fonts.poppins.regular}
              >
                {item.answer}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Responsive Styling */}
      <style jsx>{`
        @media (max-width: 768px) {
          div[ref] {
            flex-direction: column;
            text-align: center;
            padding: 2rem 1.5rem;
          }
          img {
            width: 100%;
            height: auto;
            margin-top: 1rem;
          }
          h1 {
            font-size: 1.8rem;
          }
          p {
            font-size: 0.95rem;
          }
        }
      `}</style>
    </div>
  );
};

export default Faqs;

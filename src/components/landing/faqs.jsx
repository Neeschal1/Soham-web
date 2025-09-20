import React, { useState } from "react";
import Fonts from "../../utils/fontsconfig";

const questions = [
    {
        key:1,
        "question":"Do I need any special equipment to meditate?",
        "answer":"No special tools are required. A quiet space and a comfortable seat are enough to start your meditation practice."
    },
    {
        key:1,
        "question":"Do I need any special equipment to meditate?",
        "answer":"No special tools are required. A quiet space and a comfortable seat are enough to start your meditation practice."
    },
    {
        key:1,
        "question":"Do I need any special equipment to meditate?",
        "answer":"No special tools are required. A quiet space and a comfortable seat are enough to start your meditation practice."
    },
    {
        key:1,
        "question":"Do I need any special equipment to meditate?",
        "answer":"No special tools are required. A quiet space and a comfortable seat are enough to start your meditation practice."
    },
]

const Faqs = () => {

    const [answer, setAnswer] = useState(false)

  return (
    <>
      <div className="flex flex-1 items-center justify-between p-10">
        <div>

            {/* FAQ's content */}
          <div className="flex flex-col gap-6">
            <div className="flex">
              <h3
                className="bg-[#F9F8FF] py-2 px-10 rounded-full"
                style={Fonts.poppins.regular}
              >
                FAQ'S
              </h3>
            </div>
            <div className="flex w-5/12 flex-col gap-4">
              <h1 style={Fonts.poppins.medium} className="text-4xl">
                Frequently asked questions
              </h1>
              <h3 style={Fonts.poppins.light}>
                Have questions? We’ve got you covered. Explore our frequently
                asked questions to quickly find answers, clear doubts, and get
                guidance to make the most of your journey.
              </h3>
            </div>
          </div>

          {/* FAQ's */}

        </div>
      </div>
    </>
  );
};

export default Faqs;

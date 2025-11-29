import React from "react";
import Fonts from "../../utils/fontsconfig";
import prakashbhattarai from "../../assets/images/prakashbhattarai.png";
import nischalpokharel from "../../assets/images/nischalpokharel.png";
import manojpokharel from "../../assets/images/manojpokharel.png";
import sujankhatri from "../../assets/images/sujankhatri.png";
import ashishghimire from "../../assets/images/ashishghimire.jpg";

const teams = [
  {
    id: 1,
    name: "Prakash Bhattarai",
    role: "Founder/CEO",
    image: prakashbhattarai,
    link: "/#",
  },
  {
    id: 2,
    name: "Manoj Pokharel",
    role: "Co-Founder",
    image: manojpokharel,
    link: "/#",
  },
  {
    id: 3,
    name: "Nischal Pokharel",
    role: "Frontend Developer and UI/UX Designer",
    image: nischalpokharel,
    link: "/#",
  },
  {
    id: 4,
    name: "Sujan Khatri",
    role: "Fullstack Developer",
    image: sujankhatri,
    link: "/#",
  },
  {
    id: 5,
    name: "Aashish Ghimire",
    role: "Graphics Designer",
    image: ashishghimire,
    link: "/#",
  },
];

const Ourteams = () => {
  return (
    <div className="flex flex-1 items-center justify-center w-full p-5 mt-20 flex-col">
      <h1
        style={{ ...Fonts.poppins.medium }}
        className="text-5xl text-black mb-3"
      >
        The Faces of Innovation
      </h1>
      <h3
        style={{ ...Fonts.poppins.regular }}
        className="text-black/40 w-full sm:w-10/12 md:w-8/12 text-center mb-10"
      >
        Leverage the power of advanced technology to streamline operations and
        drive growth. Stay ahead with innovative solutions built for the future.
      </h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 w-full justify-items-center">
        {teams.map((member) => (
          <div key={member.id} className="flex flex-col justify-center flex-1 items-start gap-2 pt-5">
            <a href={member.link}>
              <img
                className="w-100 h-96 object-cover rounded-xl hover:w-104 hover:h-100 duration-600"
                src={member.image}
                alt={member.name}
              />
            </a>
            <div className="flex flex-1 items-start flex-col">
              <h1
                style={{ ...Fonts.poppins.medium }}
                className="text-2xl text-black"
              >
                {member.name}
              </h1>
              <h2
                style={{ ...Fonts.poppins.regular }}
                className="text-black/50"
              >
                {member.role}
              </h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Ourteams;

import Fonts from "../utils/fontsconfig";

const quickLinks = [
  { name: "Home", url: "/" },
  { name: "Meditation", url: "/" },
  { name: "Purpose", url: "/" },
  { name: "Our Story", url: "/" },
  { name: "About us", url: "/" },
];

const socialLinks = [
  { name: "Facebook", url: "/" },
  { name: "Instagram", url: "/" },
  { name: "Twitter", url: "/" },
  { name: "Linkedin", url: "/" },
];

const supportLinks = [
  { name: "Help", url: "/" },
  { name: "Security", url: "/" },
  { name: "Cookies policy", url: "/" },
];

const Footer = () => {
  return (
    <div className="bg-black text-white w-full">
      <div className="px-4 sm:px-6 md:px-10 lg:px-20 py-10">
        {/* Newsletter Section */}
        <div className="flex flex-col lg:flex-row justify-between gap-10 lg:gap-20">
          {/* Left Content */}
          <div className="flex flex-col gap-2 max-w-full lg:max-w-xl">
            <h2
              style={{ fontSize: 40, lineHeight: "1.2", ...Fonts.poppins.medium }}
              className="text-3xl md:text-4xl text-white"
            >
              Stay in loop
            </h2>
            <p
              style={{ ...Fonts.poppins.medium }}
              className="text-base sm:text-lg md:text-xl text-[#B8B8B8]"
            >
              Be the first to get updates on our latest content, special offers,
              and new features.
            </p>
            <p
              style={{ ...Fonts.poppins.regular }}
              className="text-xs text-[#A1A1A1]"
            >
              By signing up, you’re agreeing to receive marketing emails from
              Soham. You can unsubscribe at any time.
            </p>
          </div>

          {/* Right Input Section */}
          <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center w-full lg:w-auto">
            <input
              style={Fonts.poppins.regular}
              className="border border-white bg-transparent text-white px-4 py-2 placeholder:text-white h-[50px] sm:h-[55px] md:h-[60px] w-full sm:w-[350px] md:w-[368px]"
              placeholder="Enter your email"
              type="text"
            />

            <button className="text-white py-2 px-6 text-sm border border-white whitespace-nowrap hover:bg-red-500 duration-600">
              Subscribe
            </button>
          </div>
        </div>

        {/* Links Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 md:gap-20 mt-16">
          {/* Quick Links */}
          <div>
            <h3
              style={Fonts.poppins.medium}
              className="text-base font-semibold mb-4"
            >
              Quick links
            </h3>
            <ul className="flex flex-col gap-2">
              {quickLinks.map((link, index) => (
                <li
                  key={index}
                  className="text-sm text-[#B8B8B8] hover:text-white duration-600"
                >
                  <a
                    style={{ whiteSpace: "nowrap", ...Fonts.poppins.medium }}
                    href={link.url}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3
              style={Fonts.poppins.medium}
              className="text-base font-semibold mb-4"
            >
              Social Media
            </h3>
            <ul className="flex flex-col gap-2">
              {socialLinks.map((link, index) => (
                <li
                  key={index}
                  className="text-sm text-[#B8B8B8] hover:text-white duration-600"
                >
                  <a
                    style={{ whiteSpace: "nowrap", ...Fonts.poppins.medium }}
                    href={link.url}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3
              style={Fonts.poppins.medium}
              className="text-base font-semibold mb-4"
            >
              Support
            </h3>
            <ul className="flex flex-col gap-2">
              {supportLinks.map((link, index) => (
                <li
                  key={index}
                  className="text-sm text-[#B8B8B8] hover:text-white duration-600"
                >
                  <a
                    style={{ whiteSpace: "nowrap", ...Fonts.poppins.medium }}
                    href={link.url}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-[#2C2C2C] mt-12 mb-8" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center text-[#B8B8B8] text-sm gap-4 text-center">
          {/* Copyright */}
          <p className="text-white">
            <span style={Fonts.poppins.medium} className="font-semibold">
              © 2025 Soham
            </span>{" "}
            All rights reserved.
          </p>

          {/* Developer Credit */}
          <p style={Fonts.poppins.medium} className="text-center text-[#ffffff]">
            Designed and Developed with ❤️ by{" "}
            <a
              href="https://www.facebook.com/nischal.pokharel.598234" 
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-[16px] hover:underline"
            >
              Nischal Pokharel
            </a>{" "}
            &{" "}
            <a
              href="https://www.facebook.com/aca.ssh.9" 
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-[16px] hover:underline"
            >
              Aashish Ghimire
            </a>
          </p>

          {/* Legal Links */}
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-4">
            <a
              style={Fonts.poppins.medium}
              className="text-[#b8b8b8] hover:text-white duration-600"
              href="#"
            >
              Terms & Conditions
            </a>
            <a
              style={Fonts.poppins.medium}
              className="text-[#b8b8b8] hover:text-white duration-600"
              href="#"
            >
              Privacy Policy
            </a>
            <a
              style={Fonts.poppins.medium}
              className="text-[#b8b8b8] hover:text-white duration-600"
              href="#"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

import React, { useState } from "react";
import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { Link } from "react-scroll";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [darkMode, setDarkMode] = useState(true);

  const handleClick = () => setNav(!nav);
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle("dark");
  };

  return (
    <div className="fixed w-full flex justify-center z-50 transition-colors duration-300">
      <div className="w-full sm:w-10/12 h-[80px] flex justify-between items-center px-4 bg-white dark:bg-[#0a192f] text-black dark:text-white transition-colors duration-300">
        {/* Logo */}
        <div className="flex items-center gap-1">
          <span className="text-3xl font-bold text-green-500">152023211_DheRoh</span>
          <span className="text-4xl rounded-full">.</span>
        </div>

        {/* Menu */}
        <div className="flex items-center gap-4">
          <ul className="hidden md:flex">
            {["home", "about", "skills", "project"].map((item) => (
              <li key={item} className="mx-2 capitalize hover:text-green-400 transition-colors duration-200">
                <Link to={item} smooth={true} duration={500}>
                  <span className="hover:border-green-400 hover:border-b-2 py-1">{item}</span>
                </Link>
              </li>
            ))}
          </ul>

          {/* Toggle Theme Button */}
          <button
            onClick={toggleDarkMode}
            className="border rounded-full px-3 py-1 text-sm border-gray-400 dark:border-white hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-300"
          >
            {darkMode ? "🌞 Light" : "🌙 Dark"}
          </button>
        </div>

        {/* Hamburger */}
        <div onClick={handleClick} className="md:hidden z-10 cursor-pointer">
          {!nav ? <FaBars className="text-black dark:text-white" /> : <FaTimes className="text-black dark:text-white" />}
        </div>

        {/* Mobile Menu */}
        <ul
          className={`${
            !nav ? "hidden" : "flex"
          } absolute top-0 left-0 w-full h-screen bg-white dark:bg-[#0a192f] flex-col justify-center items-center transition-colors duration-300`}
        >
          {["home", "about", "skills", "project"].map((item) => (
            <li key={item} className="py-6 text-4xl capitalize text-black dark:text-white hover:text-green-400 transition-colors duration-200">
              <Link onClick={handleClick} to={item} smooth={true} duration={500}>
                {item}
              </Link>
            </li>
          ))}
        </ul>

        {/* Social Icons */}
        <div className="hidden md:flex fixed flex-col top-[35%] left-0">
          <ul>
            {[
              {
                href: "https://www.linkedin.com/in/dhea-rohana-8857732b4/",
                label: "LinkedIn",
                bg: "bg-blue-600",
                icon: <FaLinkedin size={30} />,
              },
              {
                href: "https://github.com/Dhear20",
                label: "Github",
                bg: "bg-[#333333]",
                icon: <FaGithub size={30} />,
              },
              {
                href: "mailto:dhearhna20@gmail.com",
                label: "Email",
                bg: "bg-[#6fc2b0]",
                icon: <HiOutlineMail size={30} />,
              },
              {
                href: "tel:+6285314930129",
                label: "Contact",
                bg: "bg-[#565f69]",
                icon: <BsFillPersonLinesFill size={30} />,
              },
            ].map(({ href, label, bg, icon }) => (
              <li
                key={label}
                className={`w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 ${bg}`}
              >
                <a
                  href={href}
                  className="flex justify-between items-center w-full text-gray-300 px-4"
                  target="_blank"
                  rel="noreferrer"
                >
                  {label} {icon}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

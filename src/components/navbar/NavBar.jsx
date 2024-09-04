import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { HiMenu } from "react-icons/hi";
import { RxCross2 } from "react-icons/rx";
import logo from "../../assets/favicon.png";

const navItems = [
  {
    id: 0,
    name: "home",
  },
  {
    id: 1,
    name: "skills",
  },
  {
    id: 2,
    name: "works",
  },
  {
    id: 3,
    name: "resume",
  },
  {
    id: 4,
    name: "contact",
  },
];

const NavBar = ({ toggleDarkMode, darkMode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(null);

  // Toggle the navbar
  const toggleNav = (name) => {
    setIsOpen(!isOpen);
    setActiveIndex(name === activeIndex ? null : name);
  };

  const [scrollPosition, setScrollPosition] = useState(0);
  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      // You can adjust the rotation speed and direction as needed
      const newRotation = window.scrollY * 0.1; // Adjust multiplier for speed
      setRotation(newRotation);
    };

    // Attach the event listener when the component mounts
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div class="flex justify-center items-center">
      <div
        className={`fixed py-5 sm:py-4 z-30  ${
          scrollPosition > 0
            ? `bg-transparent backdrop-blur z-50 top-0 border-0 border-transparent w-full transition-all`
            : "bg-transparent backdrop-blur border-2 border-lime-400 rounded-3xl top-8  w-[95%] mx-auto transition-all overflow-hidden md:top-0 md:w-full md:border-0 md:overflow-visible"
        } `}
      >
        <nav className=" container m-auto flex items-center justify-between z-50">
          <div data-aos="fade-down" className="logo">
            <Link
              onClick={() => window.scrollTo(0, 0)}
              to="/"
              className="text-3xl font-bold sm:text-3xl"
            >
              <img
                style={{ transform: `rotate(${rotation}deg)`, height: "45px" }}
                src={logo}
                alt="logo"
              />
            </Link>
          </div>
          <div
            data-aos="fade-left"
            className="nav-items flex items-center space-x-11"
          >
            {/* hamburger */}
            <button
              onClick={toggleNav}
              className="cursor-pointer text-2xl hidden md:block"
            >
              <HiMenu size={25} />
            </button>

            <ul
              className={`flex items-center space-x-11 ${
                !isOpen
                  ? "md:flex md:opacity-0 transition "
                  : "md:right-[0%] md:opacity-100 transition"
              } md:flex-col md:absolute m-auto md:top-0 md:right-[-100%] md:w-[78%] md:h-screen md:bg-white `}
            >
              {/* Use a button tag for better accessibility */}
              <button
                onClick={toggleNav}
                className={`text-3xl hidden md:block relative right-0 top-4 container mx-auto`}
              >
                <RxCross2 className="text-black" size={25} />
              </button>
              {navItems.map((item) => (
                <li
                  key={item.id}
                  className="md:m-6 md:flex md:gap-6 md:items-center md:justify-center"
                  data-aos="fade-down"
                >
                  <a
                    onClick={() => toggleNav(item.name)}
                    href={`#${item.name}`}
                    className={`uppercase cursor-pointer hover:text-lime-400 font-bold md:text-black ${
                      scrollPosition > 0 ? "text-white" : "text-white"
                    } ${item.name === activeIndex ? "text-blue-500" : ""}`}
                  >
                    {item.name}
                  </a>
                </li>
              ))}
              <a
                href="https://www.linkedin.com/in/farhan-manzer-33b01b208/"
                className=" theme-btn text-[1rem] text-white px-8 py-2 rounded-lg font-bold md:m-5 md:block md:mx-auto md:w-fit lg:px-3"
              >
                HIRE ME
              </a>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default NavBar;

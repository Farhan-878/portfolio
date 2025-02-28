import React from "react";
import {
  AiFillTwitterCircle,
  AiFillGithub,
  AiFillInstagram,
} from "react-icons/ai";
import { FaFacebook, FaLinkedinIn } from "react-icons/fa";
import { FiDownload } from "react-icons/fi";
// import { FaPlay } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
import resumePDF from "../../assets/FMResume.pdf";
import skill from "../../assets/frontend.png";
import Profile from "../../assets/port-DP.jpg";
// import CircularText from "./circular";

const Hero = ({ isDarkMode }) => {
  return (
    <div id="home" className={`max-h-screen md:h-[100%] sm:h-[100%] `}>
      <div className=" container mx-auto pt-5 h-[750px] md:h-[100vh] md:flex-col-reverse sm:h-[780px]  flex sm:flex-col-reverse sm:pt-0 ">
        <div className=" left mt-4 md:mt-0 flex-1 flex flex-col justify-center gap-5 w-1/2 md:w-full md:py-2 sm:py-0">
          <div className="info w-fit flex flex-col items-start justify-center gap-3 sm:gap-2">
            <h2
              data-aos="fade-right"
              className={`${
                isDarkMode ? "textColor" : "textColor"
              } text-5xl font-bold sm:text-[2rem]`}
            >
              Hello👋, I'm Farhan Manzer
            </h2>
            <TypeAnimation
              data-aos="fade-right"
              sequence={["UI Developer", 2000, "Frontend Developer", 2000, "React Developer", 2000]}
              speed={30}
              wrapper="h2"
              repeat={Infinity}
              className="text-lime-400 text-4xl font-bold sm:text-3xl"
            />
            <p
              // data-aos="fade-up"
              className=" text-[1.1rem] font-medium w-3/4 md:w-full text-gray-600 sm:text-[.95rem]"
            >
              {/* Lorem ipsum dolor sit amet consectetur */}
            </p>
          </div>
          <div data-aos="fade-right" className="buttons flex gap-5">
            <a
              href="https://www.linkedin.com/in/farhan-manzer-33b01b208/"
              className=" bg-black text-[1rem] text-white px-10 py-2 sm:px-8 rounded-lg font-bold  hover:text-lime-400"
            >
              <span> Hire Me</span>
            </a>
            <a
              href={resumePDF}
              className="flex items-center gap-2 border- text-[1rem] bg-white border-black px-7 py-2 sm:px-6 rounded-lg font-bold  hover:text-blue-500"
              download
            >
              <div className="flex items-center gap-1 relative text-black hover:text-lime-400">
                Resume <FiDownload />
                <span class="absolute top-[-11px] right-[-31px] flex h-3 w-3">
                  <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-lime-400 opacity-75"></span>
                  <span class="relative inline-flex rounded-full h-3 w-3 bg-lime-400"></span>
                </span>
              </div>
            </a>
          </div>
          <div className="icons flex mt-5">
            <ul
              data-aos="fade-up"
              data-aos-duration="1500"
              className=" flex gap-5"
            >
              <li>
                <a href="https://github.com/Farhan-878" target="_blank">
                  {" "}
                  <AiFillGithub className=" h-[1.8rem] w-[1.8rem] text-xl hover:text-lime-400" />{" "}
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/farhan-manzer-33b01b208/"
                  target="_blank"
                >
                  {" "}
                  <FaLinkedinIn className=" h-[1.8rem] w-[1.8rem] text-xl hover:text-lime-400 " />{" "}
                </a>
              </li>
              <li>
                <a href="">
                  {" "}
                  <AiFillInstagram className=" h-[1.8rem] w-[1.8rem] text-xl hover:text-lime-400  " />{" "}
                </a>
              </li>
              <li>
                <a href="">
                  {" "}
                  <FaFacebook className=" h-[1.8rem] w-[1.8rem] text-xl hover:text-lime-400  " />{" "}
                </a>
              </li>
              <li>
                <a href="">
                  {" "}
                  <AiFillTwitterCircle className=" h-[1.8rem] w-[1.8rem] text-xl hover:text-lime-400  " />{" "}
                </a>
              </li>
            </ul>
          </div>
        </div>
        {/* <div className="right  top-5 flex-1 flex items-center justify-center md:items-end sm:items-end">
          <div className="relative h-[88%] w-fit flex items-center sm:items-end">
            <img
              data-aos="fade-up"
              className=" h-[90%]  w-full object-cover md:h-[95%] md:m-auto sm:m-0"
              // src="https://i.postimg.cc/fLYx8RBQ/Group-3.png"
              src={mine}
              alt="mine"
            />
            <div className=" absolute bottom-10 md:bottom-3 right-8 md:right-2">
              <div
                data-aos="zoom-in"
                data-aos-duration="1000"
                className=" relative cursor-pointer"
              >
                <img
                  className=" w-[135px] md:w-[90px] circle-text"
                  src={skill}
                  alt=""
                />
                <FaPlay className=" text-black absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]" />
              </div>
            </div>
          </div>
        </div> */}
        <div className="right  top-5 flex-1 flex items-center justify-center md:items-end sm:items-end">
          <div className="relative h-[80%] w-fit flex items-center sm:items-end">
            <div className="h-[80%] md:h-[95%]">
              <img
                data-aos="fade-left"
                loading="lazy"
                // data-aos="fade-up"
                className="image h-[450px] w-[450px] md:h-[300px] md:w-[300px]  overflow-hidden object-cover  md:m-auto sm:m-0"
                src={Profile}
                alt="mine"
              />
            </div>
            <div className=" absolute bottom-20 md:bottom-3 right-2 md:right-2">
              <div
                data-aos="zoom-in"
                data-aos-duration="1000"
                className=" relative cursor-pointer"
              >
                {/* <div className="circle-text h-[500px] w-[500px] z-10 bg-white">
                  <CircularText text=" Developer . Frontend" radius={75} fontSize={20}  />
                </div> */}
                <img
                  loading="lazy"
                  className=" w-[120px] md:w-[90px] circle-text"
                  src={skill}
                  alt="skill"
                />
                {/* <FaPlay className=" text-white absolute top-[100%] left-[50%] translate-x-[-50%] translate-y-[-50%]" /> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

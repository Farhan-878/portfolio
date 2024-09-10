import React from "react";

const Resume = () => {
  return (
    <div id="resume" className=" container m-auto   mt-16">
      {/* heading */}
      <div data-aos="fade-up" className="relative mb-5">
        <h3 className=" text-3xl font-black text-gray-400 sm:text-2xl">
          Resume
        </h3>
        {/* <span className="h-[1.1px] right-0 absolute w-[92%] bg-gray-300 block"></span> */}
      </div>
      <div data-aos="fade-up" className="left flex-1 w-full">
        <p className=" text-gray-500 font-medium w-[100%]">
          Here are my experiences and qualifications.
        </p>
      </div>
      {/* card*/}
      <div className="card-wrapper w-[90%] sm:w-full mt-5 flex md:flex-col sm:gap-5 mx-auto ">
        <div className="left flex-1 flex items-start justify-center">
          <fieldset
            data-aos="zoom-in"
            className=" w-[80%] p-5 py-12 sm:py-8 sm:w-full sm:p-2"
          >
            <legend className=" w-auto ml-[50%] translate-x-[-50%] border-2 border-gray-200 rounded-3xl py-1 px-8 font-semibold text-xl text-custom-green">
              Experience
            </legend>
            <div className=" relative">
              {/* design */}
              <div className="design flex absolute left-[-150px] top-1/2 items-center rotate-[90deg] sm:left-[-160px] ">
                <div className="c1 w-[12px] h-[12px] rounded-full bg-lime-400 border-2 border-lime-400"></div>
                <div className="line w-[230px] bg-gray-300 h-[2px] sm:w-[250px]"></div>
                <div className="c2 w-[12px] h-[12px] rounded-full bg-lime-400 border-2 border-lime-400"></div>
              </div>
              {/* design */}
              <div className=" flex flex-col gap-1 sm:gap-1 border-2 border-white shadow-[0px_0px_16px_1px_rgba(0,0,0,0.1)] p-3 rounded-lg">
                <h1 className="text-[1.4rem] font-semibold sm:text-xl">
                  Frontend Developer
                </h1>
                <span className=" text-[.9rem] font-semibold text-gray-500 sm:text-base">
                  Websultanate Software Technologies Pvt. Ltd.
                </span>
                <span className=" text-[.9rem] font-semibold text-custom-green sm:text-base">
                  Feb 2022 - Present
                </span>
                <p className=" text-[.9rem] text-justify break-words text-gray-500">
                  Enthusiastic and results-driven Frontend Developer with a
                  demonstrated track record of transforming design concepts into
                  engaging web experiences. With a passion for clean and
                  efficient code, I bring 2 years of hands-on experience.
                  Committed to optimizing user interfaces for responsiveness and
                  performance, Eager to contribute my skills in crafting
                  exceptional user interfaces while staying abreast of emerging
                  technologies in the dynamic world of frontend development.
                </p>
              </div>
            </div>
          </fieldset>
        </div>
        <div className="right flex-1 flex items-center justify-center">
          <fieldset
            data-aos="zoom-in"
            className=" w-[80%] p-5 py-12 sm:py-8 sm:w-full sm:p-2"
          >
            <legend className=" w-auto ml-[50%] translate-x-[-50%] border-2 border-gray-200 rounded-3xl py-1 px-8 font-semibold text-xl text-custom-green">
              Education
            </legend>
            <div className=" relative">
              {/* design */}
              <div className="design flex absolute left-[-150px] top-1/2 items-center rotate-[90deg] sm:left-[-160px] ">
                <div className="c1 w-[12px] h-[12px] rounded-full bg-lime-400 border-2 border-lime-400"></div>
                <div className="line w-[230px] bg-gray-300 h-[2px] sm:w-[250px]"></div>
                <div className="c2 w-[12px] h-[12px] rounded-full bg-lime-400 border-2 border-lime-400"></div>
              </div>
              {/* design */}
              <div className=" flex flex-col gap-1 border-2 border-white shadow-[0px_0px_16px_1px_rgba(0,0,0,0.1)] p-3 rounded-lg">
                <h1 className="text-[1.4rem] font-semibold sm:text-xl">
                  Bachelor of Computer Applications
                </h1>
                <span className=" text-[.9rem] font-semibold text-gray-500 sm:text-base">
                  Khawaja Moinuddin Chishti Language University, Lucknow
                </span>
                <span className=" text-[.9rem] font-semibold text-custom-green sm:text-base">
                  Year 2018 - Year 2021
                </span>
                <p className=" text-[.9rem] text-justify text-gray-500">
                  The university was established in 2009 as "Uttar Pradesh Arabi
                  Pharsi University", under the Uttar Pradesh Arabi Pharsi
                  University Act, 2009. In 2010 the act was repealed and the
                  university was reintroduced as "Uttar Pradesh Urdu,
                  Arabi-Farsi University" under Uttar Pradesh State Universities
                  Act, 2010. It was renamed "Manyavar Shri Kanshi Ram Ji Urdu,
                  Arabi-Farsi University" in 2011 under Uttar Pradesh State
                  Universities Act, 2011, to honor the politician and social
                  reformer Kanshi Ram. About a year later it was renamed again
                  "Khwaja Moinuddin Chishti Urdu, Arabi-Farsi University" in
                  2012, under Uttar Pradesh State Universities Act, 2012, in
                  honor of Sufi saint Mu'in al-Din Chishti. In 2020, it was
                  renamed a final time "Khwaja Moinuddin Chishti Language
                  University" under Uttar Pradesh State Universities Act, 2020.
                </p>
              </div>
            </div>
          </fieldset>
        </div>
      </div>
    </div>
  );
};

export default Resume;

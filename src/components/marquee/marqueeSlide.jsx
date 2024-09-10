import React from "react";
import workTogether from "../../assets/work.gif";
import Marquee from "react-fast-marquee";

const MarqueeSlide = () => {
  const content = [
    "Let's work together",
    <img
      src={workTogether}
      alt="work together"
      className="w-[50px] h-[50px]"
    />,
  ];
  return (
    <div className="marquee-wrapper" id="home">
      <Marquee
        loop={1}
        pauseOnHover={true}
        gap={40}
        play={true}
        speed={50}
        direction="left"
        className="mt-16"
      >
        <div className="flex gap-20 mt-5 mb-5 text-3xl text-white">
          {Array(6)
            .fill(content)
            .flat()
            .map((item, index) => (
              <div key={index}>{item}</div>
            ))}
        </div>
      </Marquee>
    </div>
  );
};

export default MarqueeSlide;

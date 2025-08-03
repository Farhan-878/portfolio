import React, { useState } from "react";
import styled from "styled-components";
import { data } from "../data/data";
import { RxExternalLink } from "react-icons/rx";
import { AiOutlineGithub } from "react-icons/ai";
import { Link } from "react-router-dom";

const WorkCard = () => {
  const reversedData = [...data];

  return (
    <>
      {reversedData.map((data) => (
        <div
          data-aos="zoom-in"
          key={data.id}
          // className="break-inside-avoid  p-4 rounded-xl shadow-lg md:ml-0"
          className="rounded-lg p-4 border text-card-foreground shadow-sm group relative overflow-hidden bg-gray-900/80 border-gray-700 hover:scale-[1.02] transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/20"
          style={{
            background: "#161a2b",
            boxShadow: "0 -15px 27.2px 0 rgba(24, 27, 34, .25)",
          }}
        >
          <POPUP className="img-content relative">
            <div className="h-[260px] w-full  hover:scale-105 transition-transform duration-500 cursor-pointer shadow-xl rounded-md overflow-hidden sm:h-[260px] sm:w-full mx-auto ">
              <img
                src={data.img}
                alt={data.title}
                className="object-cover w-full h-[260px] sm:h-[260px] sm:w-full sm:object-contain"
              />
            </div>

            <div className="absolute inset-0 flex flex-col justify-end p-4 bg-gradient-to-t from-black/80 via-black/60 to-transparent rounded-md overflow-hidden">
              <div className="flex items-center gap-2 mb-4">
                <Link
                  to={data.link}
                  target="_blank"
                  className="bg-lime-400 text-black p-2 rounded-full shadow-md flex items-center justify-center w-[35px] h-[35px]"
                >
                  <RxExternalLink className="text-white" />
                </Link>
                <Link
                  to={data.git}
                  target="_blank"
                  className="bg-lime-400 text-black p-2 rounded-full shadow-md flex items-center justify-center w-[35px] h-[35px]"
                >
                  <AiOutlineGithub className="text-white" />
                </Link>
              </div>
            </div>
          </POPUP>

          <p className="text-white text-xl font-medium mt-4 hover:text-lime-400">
            {data.title}
          </p>
        </div>
      ))}
    </>
  );
};

export default WorkCard;

const POPUP = styled.div`
  position: relative;
  img {
    &:hover {
      transform: scaleX(2);
    }
  }
  .popup {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    opacity: 0;
    margin: auto;
    transition: 0.5s ease;
    background: rgba(255, 255, 255, 0.5);
    backdrop-filter: blur(5px);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
  .icon {
    color: #fff !important;
  }
  &:hover .popup {
    opacity: 1;
    color: #fff;
  }
`;

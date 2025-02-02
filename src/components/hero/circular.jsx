import React from "react";

const CircularText = ({ text, radius, fontSize }) => {
  const characters = text.split("");
  const angleStep = 360 / characters.length;

  return (
    <svg
      width="500"
      height="500"
      viewBox="0 0 500 500"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="250" cy="250" r={radius} fill="none" />
      {characters.map((char, i) => {
        const angle = (angleStep * i - 90) * (Math.PI / 180); // Convert to radians
        const x = 250 + radius * Math.cos(angle);
        const y = 250 + radius * Math.sin(angle);
        return (
          <text
            key={i}
            x={x}
            y={y}
            fontSize={fontSize}
            fill="black"
            textAnchor="middle"
            dominantBaseline="middle"
            transform={`rotate(${angleStep * i}, ${x}, ${y})`}
          >
            {char}
          </text>
        );
      })}
    </svg>
  );
};
export default CircularText;


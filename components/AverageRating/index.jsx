import React from "react";
import { Icon } from "@iconify/react";

const AverageRating = ({ value, stars = 5 }) => {
  return (
    <>
      <span display="inline-block" pos="relative" font="leading-0">
        <span text="gray-300">
          {Array.apply(null, Array(stars)).map((star, index) => (
            <Icon key={`star-gray-${index}`} icon="octicon:star-fill-16" />
          ))}
        </span>

        <span
          text="yellow-300 space-nowrap"
          overflow="hidden"
          pos="absolute top-0 left-0"
          h="100%"
          style={{ width: `${value * 10}%` }}
        >
          {Array.apply(null, Array(stars)).map((star, index) => (
            <Icon key={`star-yellow-${index}`} icon="octicon:star-fill-16" />
          ))}
        </span>
      </span>
    </>
  );
};

export default AverageRating;

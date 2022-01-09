import React from "react";
import { Icon } from "@iconify/react";

const AverageRating = ({ value, stars = 5 }) => {
  return (
    <>
      <div className="relative leading-0">
        <div className="text-gray-300 flex">
          {Array.apply(null, Array(stars)).map((star, index) => (
            <Icon key={`star-gray-${index}`} icon="octicon:star-fill-16" />
          ))}
        </div>

        <div
          className="text-yellow-300 absolute top-0 left-0 h-full whitespace-nowrap overflow-hidden"
          style={{ width: `${value * 10}%` }}
        >
          {Array.apply(null, Array(stars)).map((star, index) => (
            <Icon
              key={`star-yellow-${index}`}
              icon="octicon:star-fill-16"
              className="inline-block"
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default AverageRating;

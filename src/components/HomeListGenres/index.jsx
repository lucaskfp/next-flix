import React from "react";
import Link from "next/link";

const HomeListGenres = ({ list }) => {
  return (
    <>
      <ul className="">
        {list.map((genre) => (
          <li
            key={genre.id}
            className="mb-1 text-gray-600 hover:text-red-500 font-semibold"
          >
            <Link href="#">
              <a className="">{genre.name}</a>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default HomeListGenres;

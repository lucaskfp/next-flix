import React from "react";
import Link from "next/link";
import slugify from "constants/slugify";

const HomeLists = ({ data, tmdnConfigs, type }) => {
  data = data.sort(() => Math.random() - 0.5);

  return (
    <div className="flex lg:flex-wrap items-start gap-x-4 gap-y-8 <lg:(overflow-x-auto px-4)">
      {data.map((media) => (
        <div key={media.id} className="relative  rounded max-w-[185px]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={`${tmdnConfigs.images.secure_base_url}${tmdnConfigs.images.poster_sizes[2]}${media.poster_path}`}
            alt={media.title}
            loading="lazy"
            className=" <lg:min-w-40 rounded shadow"
          />

          <span className="inline-block text-sm font-bold pt-1 text-center w-full">
            {media.title || media.name}
          </span>

          {type === "movie" && (
            <Link href={`/filmes/${slugify(media.title)}-${media.id}`}>
              <a className="absolute top-0 left-0 right-0 bottom-0"></a>
            </Link>
          )}

          {type === "tv" && (
            <Link href={`/series/${slugify(media.name)}-${media.id}`}>
              <a className="absolute top-0 left-0 right-0 bottom-0"></a>
            </Link>
          )}
        </div>
      ))}
    </div>
  );
};

export default HomeLists;

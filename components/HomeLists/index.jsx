import React from "react";
import Link from "next/link";
import slugify from "constants/slugify";

const HomeLists = ({ data, tmdnConfigs, type }) => {
  return (
    <div
      className="flex lg:flex-wrap items-start gap-4 <lg:(overflow-x-auto px-4)"
      style={{ scrollSnapType: "x mandatory" }}
    >
      {data.map((media) => (
        <div
          key={media.id}
          className="relative shadow hover:shadow-xl transition-all overflow-hidden rounded"
          style={{ scrollSnapAlign: "end" }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={`${tmdnConfigs.images.secure_base_url}${tmdnConfigs.images.poster_sizes[2]}${media.poster_path}`}
            alt={media.title}
            loading="lazy"
            className=" <lg:min-w-40"
          />

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

import { Icon } from "@iconify/react";
import AverageRating from "components/AverageRating";
import ModalTrailer from "components/ModalTrailer";
import fetcher from "constants/fetcher";
import tmdbConfigs from "constants/tmdbConfigs";
import { useState } from "react";

export default function Filme({ data, tmdbConf }) {
  const [openTrailer, setOpenTrailer] = useState(false);

  const trailer = data.videos.results.find((item) => item.site === "YouTube");

  const { images } = tmdbConf;

  const poster = `${images.base_url}/${images.poster_sizes[3]}/${data.poster_path}`;

  return (
    <>
      <div container="~" min-h="screen">
        <div className="grid grid-cols-[1fr,1fr] gap-30">
          <section flex="~" align="items-center">
            <div p="y-10">
              <h1 text="6xl" font="extrabold">
                {data.title}
              </h1>
              <div
                m="y-8"
                flex="~"
                align="items-center"
                className="gap-10"
                text="xl"
              >
                {data.vote_average && (
                  <div text="2xl" m="-b-1">
                    <AverageRating value={data?.vote_average} />
                  </div>
                )}

                <span font="semibold">
                  {data?.release_date.substring(0, 4)}
                </span>
                <span font="semibold">
                  {Math.floor(data?.runtime / 60)}h {data?.runtime % 60}m
                </span>
              </div>
              <p font="leading-8 semibold" text="gray-500">
                {data?.overview || data?.tagline}
              </p>

              <div m="t-16">
                <button
                  font="bold"
                  bg="white"
                  shadow="lg gray-400"
                  p="x-5 y-3"
                  border="rounded-md"
                  flex="~"
                  align="items-center"
                  onClick={() => setOpenTrailer(true)}
                >
                  <Icon
                    icon="ic:round-play-circle"
                    text="4xl red-500"
                    m="r-4"
                  />
                  <span>Ver Trailer</span>
                </button>
              </div>
            </div>
          </section>

          <section>
            <div h="screen" pos="sticky top-0">
              <div
                pos="relative"
                h="screen"
                w="100%"
                flex="~"
                align="items-center"
                justify="center"
              >
                <div
                  pos="absolute top-15 left-0 bottom-15 right-0"
                  w="[100%]"
                  z="-1"
                  filter="~ blur-4 brightness-30"
                  style={{
                    background: `url(${poster})`,
                    backgroundSize: "cover",
                  }}
                ></div>

                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={poster}
                  alt=""
                  border="rounded-lg"
                  shadow="lg"
                  max-w="sm"
                />
              </div>
            </div>
          </section>
        </div>
      </div>

      <ModalTrailer
        isOpen={openTrailer}
        closeModal={setOpenTrailer}
        idTrailer={trailer.key}
      />
    </>
  );
}

export async function getStaticProps(context) {
  const tmdbConf = await tmdbConfigs();

  const response = await fetcher("movie/315635", "&append_to_response=videos");
  const data = await response.json();
  return {
    props: { data, tmdbConf },
  };
}

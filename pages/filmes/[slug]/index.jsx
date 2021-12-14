import { Icon } from "@iconify/react";
import AverageRating from "components/AverageRating";
import ModalTrailer from "components/ModalTrailer";
import fetcher from "constants/fetcher";
import tmdbConfigs from "constants/tmdbConfigs";
import Head from "next/head";
import { useState, useEffect } from "react";

export default function Filme({ data, tmdbConf }) {
  const [openTrailer, setOpenTrailer] = useState(false);
  const [showPoster, setShowPoster] = useState(false);
  console.log(data);
  const trailer = data.videos.results.find(
    (item) => item.site === "YouTube" && item.type === "Trailer"
  );

  useEffect(() => {
    if (window.innerWidth >= 1280) {
      setShowPoster(true);
    }
  }, []);

  const { images } = tmdbConf;

  const poster = `${images.base_url}/${images.poster_sizes[3]}/${data.poster_path}`;
  const backDropSizes = images.backdrop_sizes;
  const backDropPaths = backDropSizes.map((size) => {
    return `${images.base_url}/${size}/${data.backdrop_path}`;
  });

  console.log(backDropPaths);

  return (
    <>
      <Head>
        <title>{data.title}</title>
      </Head>
      <div container="~" className="lg:min-h-screen <md:p-0">
        <div
          className="xl:hidden pt-[30%] bg-cover bg-no-repeat bg-center min-h-[10rem]"
          style={{ backgroundImage: `url("${backDropPaths[2]}")` }}
        ></div>
        <div className="grid xl:grid-cols-[1fr,1fr]  xl:gap-20 2xl:gap-30">
          <section flex="~" align="items-center" className="<md:px-6">
            <div p="y-10" className="fade-in-top ">
              <h1 text="2xl md:4xl lg:5xl xl:6xl" font="extrabold">
                {data.title}
              </h1>

              <div
                m="y-8"
                flex="~"
                align="items-center"
                className="gap-4 sm:gap-6 md:gap-8 lg:gap-10"
                text="md:xl"
              >
                {!!data.vote_average && (
                  <div text="xl md:2xl" m="-b-1">
                    <AverageRating value={data.vote_average} />
                  </div>
                )}

                <span font="semibold">
                  {data?.release_date.substring(0, 4)}
                </span>
                <span font="semibold">
                  {data?.runtime >= 60 && (
                    <span>{Math.floor(data?.runtime / 60)}h </span>
                  )}
                  <span>{data?.runtime % 60}m</span>
                </span>
              </div>
              <p font="leading-8 semibold" text="gray-500" max-w="2xl">
                {data?.overview || data?.tagline}
              </p>

              {trailer && (
                <div m="t-16">
                  <button
                    w="<sm:full"
                    font="bold"
                    bg="white"
                    shadow="lg hover:sm gray-400"
                    p="x-5 y-3"
                    border="rounded-md"
                    flex="~"
                    align="items-center"
                    justify="<sm:center"
                    transition="all"
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
              )}
            </div>
          </section>

          {showPoster && (
            <section className="<xl:hidden">
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
                    border="0 rounded-rounded-6xl"
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
                    className="scale-up-center"
                  />
                </div>
              </div>
            </section>
          )}
        </div>
      </div>

      <ModalTrailer
        isOpen={openTrailer}
        closeModal={setOpenTrailer}
        idTrailer={trailer?.key}
      />
    </>
  );
}

export async function getServerSideProps(context) {
  const { id } = context.query;

  const tmdbConf = await tmdbConfigs();

  const response = await fetcher(`movie/${id}`, "&append_to_response=videos");
  const data = await response.json();
  return {
    props: { data, tmdbConf },
  };
}

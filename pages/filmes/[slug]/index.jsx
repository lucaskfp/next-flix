import { Icon } from "@iconify/react";
import AverageRating from "components/AverageRating";
import ModalTrailer from "components/ModalTrailer";
import fetcher from "constants/fetcher";
import slugify from "constants/slugify";
import tmdbConfigs from "constants/tmdbConfigs";
import Head from "next/head";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Filme({ data, tmdbConf }) {
  console.log(data);
  console.log(tmdbConf);
  const [openTrailer, setOpenTrailer] = useState(false);
  const [showPoster, setShowPoster] = useState(false);
  const { cast } = data.credits;

  const trailer = data.videos.results.find(
    (item) => item.site === "YouTube" && item.type === "Trailer"
  );

  useEffect(() => {
    if (window.innerWidth >= 1280) {
      setShowPoster(true);
    }
  }, []);

  const { images } = tmdbConf;

  const poster = `${images.secure_base_url}/${images.poster_sizes[3]}/${data.poster_path}`;
  const backDropSizes = images.backdrop_sizes;
  const backDropPaths = backDropSizes.map((size) => {
    return `${images.secure_base_url}${size}${data.backdrop_path}`;
  });

  return (
    <>
      <Head>
        <title>{data.title}</title>
        <meta name="description" content={data?.overview || data?.tagline} />
        <meta property="og:title" content={data.title} />
        <meta property="og:type" content="video.movie" />
        <meta property="og:image" content={backDropPaths[2]} />
        <meta
          property="og:og:description "
          content={data?.overview || data?.tagline}
        />
      </Head>
      <div container="~" className="lg:min-h-screen <md:p-0">
        <div
          className="<lg:hidden xl:hidden pt-[30%] bg-cover bg-no-repeat bg-center min-h-[15rem]"
          style={{ backgroundImage: `url("${backDropPaths[2]}")` }}
        ></div>

        <div
          className="lg:hidden pt-[30%] bg-cover bg-no-repeat bg-center min-h-[15rem]"
          style={{ backgroundImage: `url("${backDropPaths[1]}")` }}
        ></div>
        <div className="grid grid-cols-1 xl:grid-cols-2  xl:gap-20 2xl:gap-30">
          <div className="flex flex-col justify-center">
            <section className="<md:px-6">
              <div p="y-10" className="fade-in-top ">
                <h1 text="2xl md:4xl lg:5xl xl:6xl" font="extrabold">
                  {data.title}
                </h1>

                <div
                  m="y-6"
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

                {data.genres.length > 0 && (
                  <div className="flex flex-wrap gap-1  text-sm mb-4">
                    {data.genres.map((genre, index) => (
                      <Link href="#" key={genre.id}>
                        <a className="bg-red-500 text-white rounded mr-2 px-1 inline-block">
                          {genre.name}
                        </a>
                      </Link>
                    ))}
                  </div>
                )}

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

            {cast.length > 0 && (
              <section className="<xl:mb-8  ">
                <h2 className="text-xl font-bold mb-4 <md:px-6">Elenco</h2>

                <div className="flex  gap-4 overflow-x-auto <sm:px-6">
                  {cast.map((profile) => (
                    <div
                      key={profile.id}
                      className={`${!profile.profile_path && "hidden"}  
                      min-w-25 sm:min-w-30`}
                    >
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={
                          tmdbConf.images.secure_base_url +
                          tmdbConf.images.profile_sizes[1] +
                          profile.profile_path
                        }
                        alt={profile.name}
                        loading="lazy"
                        className="rounded w-full"
                      />
                      <span className="inline-block w-full text-center font-bold text-sm text-gray-600">
                        {profile.name}
                      </span>
                    </div>
                  ))}
                </div>
              </section>
            )}
          </div>

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

export async function getStaticProps({ params }) {
  const { slug } = params;
  const slugArr = slug.split("-");
  const id = slugArr[slugArr.length - 1];

  const tmdbConf = await tmdbConfigs();

  const data = await fetcher(
    `movie/${id}`,
    "&append_to_response=videos,credits,watch/providers"
  );

  return {
    props: { data, tmdbConf },
    revalidate: false,
  };
}

export async function getStaticPaths() {
  const movies = await fetcher("discover/movie");

  const paths = movies.results.map((movie) => ({
    params: { slug: `${slugify(movie.title)}-${movie.id}` },
  }));

  return { paths, fallback: "blocking" };
}

import AverageRating from "components/AverageRating";
import React from "react";

export default function Filme() {
  const average = 7.5;

  return (
    <div container="~" min-h="screen">
      <div className="grid grid-cols-[1fr,1fr] gap-10">
        <div flex="~" align="items-center">
          <div p="y-10">
            <h1 text="6xl" font="extrabold">
              The Crown
            </h1>
            <div
              m="y-5"
              flex="~"
              align="items-center"
              className="gap-10"
              text="xl"
            >
              <div text="2xl" m="-b-1">
                <AverageRating value={7.2} />
              </div>
              <span font="semibold">2020</span>
              <span font="semibold">2h 16m</span>
            </div>
            <p font="leading-8 semibold" text="gray-600">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industrys standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </div>
        </div>

        <div>
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
                pos="absolute top-0 left-0"
                h="screen"
                w="[100%]"
                z="-1"
                filter="~ blur-4 brightness-30"
                style={{
                  background: "url(http://localhost:3000/the-crown.jpg)",
                  backgroundSize: "cover",
                }}
              >
                oi
              </div>

              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/the-crown.jpg"
                alt=""
                border="rounded-lg"
                shadow="lg"
                max-w="sm"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

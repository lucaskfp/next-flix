import { Icon } from "@iconify/react";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import menu from "./menu";
import Image from "next/image";

const Layout = ({ children }) => {
  const { pathname } = useRouter();

  return (
    <div className="flex gap-20" min-h="screen">
      <div
        className=""
        h="screen"
        pos="sticky top-0"
        p="y-5 x-10"
        flex="~ col"
        justify="between"
        align="center"
      >
        <Image
          src="/logo.png"
          alt="logo"
          layout="intrinsic"
          width="50"
          height="50"
        />
        <nav text="3xl gray-500" flex="~ col" className="gap-10">
          {menu.map((item) => (
            <Link href={item.link} key={item.name}>
              <a
                className={`
              ${item.link === pathname && "text-red-500"}
              ${item.link !== pathname && "hover:(text-red-500)"}
              transition-all
              duration-300
              `}
              >
                <Icon icon={item.icon} />
              </a>
            </Link>
          ))}
        </nav>

        <span></span>
      </div>

      <main className="flex-1">{children}</main>
    </div>
  );
};

export default Layout;

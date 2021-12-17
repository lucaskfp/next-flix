import { Icon } from "@iconify/react";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import menu from "./menu";
import Image from "next/image";

const Layout = ({ children }) => {
  const { pathname } = useRouter();

  return (
    <div
      className="flex <lg:(flex-col flex-col-reverse) lg:gap-20"
      min-h="screen"
    >
      <div
        className="lg:h-screen"
        pos="sticky <lg:bottom-0 lg:top-0"
        p="y-3 lg:y-5 lg:x-10"
        flex="~ col"
        justify="between"
        align="center"
        bg="<lg:white"
        border="<lg:(t-1)"
        z="10"
      >
        <div className="<lg:hidden">
          <Image
            src="/logo.png"
            alt="logo"
            layout="intrinsic"
            width="50"
            height="50"
          />
        </div>
        <nav
          text="3xl gray-500"
          flex="~ lg:col"
          justify="evenly sm:center"
          align="<lg:items-center"
          className="gap-10"
        >
          {menu.map((item) => (
            <Link href={item.link} key={item.name}>
              <a
                className={`
              ${item.link === pathname && "text-red-500"}
              ${item.link !== pathname && "hover:(text-red-500)"}
              transition-all
              duration-300
              <lg:leading-0
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

"use client";
import React from "react";
import HoverButton from "../HomePage/HoverButton";
import Image from "next/image";
import Logo from "../../../public/logo.svg";
import MenuOverlay from "./MenuOverlay";
import { Icon } from "@iconify/react";
import Link from "next/link";
import AOS from "aos";

const Index = () => {
  const [navbarOpen, setNavbarOpen] = React.useState(false);

  React.useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <header className="w-full mx-auto px-4 sm:px-20 py-4 sticky z-20 top-0 left-0 bg-gray-900 backdrop-filter backdrop-blur-sm border-b border-slate-900 bg-opacity-40">
        <div className="flex flex-row sm:flex-row justify-between items-center z-20 px-6">
          <div className="flex gap-12 items-center ">
            <div
              className="flex flex-row justify-between items-center"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <button
                className={
                  "flex top-0 right-0 relative w-10 h-10 z-20 text-white focus:outline-none transition ease-in-out delay-150 border hover:border-line-color rounded-full lg:border-none duration-500"
                }
                onClick={() => setNavbarOpen(!navbarOpen)}
              >
                <div className="absolute w-5 transform -translate-x-1/2 -translate-y-1/2 left-1/4 top-1/2">
                  <span
                    className={`absolute h-px w-5 bg-line-color transform transition duration-400 ease-in-out ${
                      navbarOpen ? "rotate-45 delay-200" : "-translate-y-1.5"
                    }`}
                  ></span>
                  <span
                    className={`absolute h-px bg-line-color var() transform transition-all duration-200 ease-in-out ${
                      navbarOpen
                        ? "w-0 opacity-50"
                        : "w-5 delay-200 opacity-100"
                    }`}
                  ></span>
                  <span
                    className={`absolute h-px w-5 bg-line-color transform transition duration-300 ease-in-out ${
                      navbarOpen ? "-rotate-45 delay-200" : "translate-y-1.5"
                    }`}
                  ></span>
                </div>
              </button>
              <p className="text-xs font-medium text-slate-300 cursor-pointer hover:text-white lg:z-20 hidden lg:block">
                Menu
              </p>
            </div>
          </div>
          <div className={"z-20 sm:z-0"}>
            <Link href={"#"}>
              <Image src={Logo} width={90} height={60} alt="JCX" priority />
            </Link>
          </div>
          <div className="z-20 sm:hidden ">
            <button className="w-10 h-10 transition ease-in-out delay-150 border hover:border-line-color rounded-full lg:border-none duration-500">
              <Icon
                className="text-xl translate-x-1/2 -translate-y-1/6 right-1/4 top-1/2"
                color="#f56a5b"
                icon="ic:baseline-phone"
              />
            </button>
          </div>
          <div className="hidden sm:block">
            <HoverButton />
          </div>
        </div>
        <MenuOverlay navbarOpen={navbarOpen} setNavbarOpen={setNavbarOpen} />
      </header>
    </>
  );
};

export default Index;

"use client";
import Link from "next/link";
import React from "react";
import HoverButton from "../HoverButton";
import Image from "next/image";
import Logo from "../../../public/logo.svg";
import MenuOverlay from "./MenuOverlay";

const Index = () => {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <>
      <header className="w-full mx-auto md:px-12 py-4 fixed z-20 top-0 left-0 bg-slate-900">
        <div className="flex justify-evenly items-center z-20">
          <div className="flex gap-12 items-center z-20">
            <div
              className="flex flex-row gap-2 justify-between items-center z-20"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <button
                className="flex top-0 right-0 relative w-10 h-10 z-20 text-white focus:outline-none"
                onClick={() => setNavbarOpen(!navbarOpen)}
              >
                <div className="absolute w-5 transform -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2">
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
              <p className="text-xs font-medium text-slate-300">Menu</p>
            </div>
            <div className="hidden sm:block">
              <HoverButton />
            </div>
          </div>
          <div className="z-20">
            <Image
              src={Logo}
              width={90}
              height={60}
              alt="Picture of the author"
            />
          </div>
          <div className="hidden sm:block z-20">
            <div className="flex flex-row gap-8 ">
              <p className="text-xs font-extralight text-slate-300">16777</p>
              <p className="text-xs font-extralight text-slate-300">
                SALES@JCXBD.COM
              </p>
            </div>
          </div>
        </div>
        <MenuOverlay navbarOpen={navbarOpen} setNavbarOpen={setNavbarOpen} />
      </header>
    </>
  );
};

export default Index;

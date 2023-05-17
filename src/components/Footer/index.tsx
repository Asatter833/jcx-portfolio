"use client";
import { Icon } from "@iconify/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Logo from "../../../public/logo.svg";
const Index: React.FC = () => {
  return (
    <>
      <div className="bg-gray-900 mx-auto w-full max-w-screen p-8 md:px-28 md:pt-14">
        <div className="flex flex-col md:flex-row justify-start gap-3 md:gap-8">
          <Link
            href="/"
            className="text-xs text-white focus:outline-none tracking-normal hover:text-line-color transition-all duration-200 ease-in-out"
          >
            <h6>HOME</h6>
          </Link>
          <Link
            href="/"
            className="text-xs text-white focus:outline-none tracking-normal hover:text-line-color transition-all duration-200 ease-in-out"
          >
            <h6>ABOUT</h6>
          </Link>
          <Link
            href="/"
            className="text-xs text-white focus:outline-none tracking-normal hover:text-line-color transition-all duration-200 ease-in-out"
          >
            <h6>PROPERTIES</h6>
          </Link>
          <Link
            href="/"
            className="text-xs text-white focus:outline-none tracking-normal hover:text-line-color transition-all duration-200 ease-in-out"
          >
            <h6>GALLERY</h6>
          </Link>
          <Link
            href="/"
            className="text-xs text-white focus:outline-none tracking-normal hover:text-line-color transition-all duration-200 ease-in-out"
          >
            <h6>NEWS & BLOGS</h6>
          </Link>
          <Link
            href="/"
            className="text-xs text-white focus:outline-none tracking-normal hover:text-line-color transition-all duration-200 ease-in-out"
          >
            <h6>CAREER</h6>
          </Link>
        </div>
        <div className="border-b opacity-60 border-line-color my-6 md:my-10" />
        <div className="flex flex-row justify-between pb-8">
          <div className="flex gap-3">
            <button
              className="border rounded-full border-line-color hover:border-white hover:text-line-color text-white p-[6px] transition ease-in-out delay-10"
              onClick={() => window.open("https://www.facebook.com/JCXBD")}
            >
              <Icon icon={"ri:facebook-fill"} className="mx-auto text-xl" />
            </button>
            <button
              className="border rounded-full border-line-color hover:border-white hover:text-line-color text-white p-[6px] transition ease-in-out delay-10"
              onClick={() => window.open("https://www.instagram.com/jcxbd/")}
            >
              <Icon icon={"ph:instagram-logo"} className="mx-auto text-xl" />
            </button>
            <button
              className="border rounded-full border-line-color hover:border-white hover:text-line-color text-white p-[6px] transition ease-in-out delay-10"
              onClick={() =>
                window.open(
                  "https://www.linkedin.com/company/jcx-developments-limited/"
                )
              }
            >
              <Icon
                icon={"typcn:social-linkedin"}
                className="mx-auto text-xl"
              />
            </button>
            <button
              className="border rounded-full border-line-color hover:border-white hover:text-line-color text-white p-[6px] transition ease-in-out delay-10"
              onClick={() =>
                window.open(
                  "https://www.youtube.com/channel/UCTm39QNanD7ScTT_anGndAw"
                )
              }
            >
              <Icon icon={"mdi:youtube"} className="mx-auto text-xl" />
            </button>
          </div>

          <div
            className="flex flex-row items-center gap-3"
            onClick={() =>
              window?.scrollTo({
                top: 0,
                behavior: "smooth",
              })
            }
          >
            <p className="text-xs font-medium text-slate-300 cursor-pointer hover:text-white">
              TOP
            </p>
            <button className="transition ease-in-out delay-100 border border-gray-400 hover:border-line-color rounded-full p-0">
              <Icon
                icon={"material-symbols:arrow-drop-up-rounded"}
                className="mx-auto text-3xl text-line-color"
              />
            </button>
          </div>
        </div>
        <div className="sm:flex justify-center hidden">
          <Link href={"#"}>
            <Image src={Logo} width={120} height={80} alt="JCX" priority />
          </Link>
        </div>
        <div className="flex justify-center sm:pt-6">
          <h1 className="transition ease-in-out delay-100 text-4xl text-gray-200 hover:text-line-color">
            <span className="!font-serif">+</span>880 1324 437947
          </h1>
        </div>
        <div className="flex justify-center pt-6">
          <p className="text-center text-gray-400 text-[14px]">
            <b>JCX Business Tower</b>
            <br /> Plot 1136/A Japan Street
            <br /> Bashundhara R/A
            <br />
            Dhaka, Bangladesh
          </p>
        </div>

        <div className="flex flex-row justify-between py-6 text-xs text-line-color opacity-80">
          <div>
            <Link href={"#"}>
              <p>Privacy Policy</p>
            </Link>
            <p className="text-white text-[10px]">
              &copy; 2023 JCX BD | All Rights Reserved.
            </p>
          </div>

          <p className="text-[10px]">
            WEBSITE BY <br />
            <span className="text-white">UNDEFINED SOLUTION</span>
          </p>
        </div>
      </div>
    </>
  );
};

export default Index;

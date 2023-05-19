"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Index: React.FC = () => {
  return (
    <>
      <div className="min-h-[50vh]">
        <div className="max-w-6xl mx-auto px-5 sm:px-12 pt-20">
          <div className="flex flex-col items-center sm:items-start text-[#f56a5b] ">
            <h1
              className="text-center text-4xl sm:text-6xl uppercase"
              data-aos="fade-right"
              data-aos-duration="1000"
            >
              Our
            </h1>
            <h1
              className="text-center text-4xl sm:text-6xl uppercase"
              data-aos="fade-right"
              data-aos-duration="1500"
            >
              Con<span className="text-slate-200">cerns</span>
            </h1>
          </div>
          <div>
            <div className="flex flex-col-reverse sm:flex-row justify-center items-center pb-4">
              <div
                className="py-4 px-3 md:max-w-md flex flex-col items-center sm:items-start gap-2 text-slate-200 text-center sm:text-left "
                data-aos="fade-right"
              >
                <Link href={"#"}>
                  <h4 className="font-bold text-lg hover:text-line-color">
                    JCX INTERIOR & DESIGN LIMITED
                  </h4>
                </Link>
                <p className="text-justify text-sm mt-4 px-4 sm:p-0">
                  The primary motivation of the establishment of JCX Interior &
                  Design Ltd. was to “Inspire Creativity”. On the ground ofthis,
                  we have a devoted group of experts focused on planning and
                  designing excellence and offering comprehensive assistance in
                  the following field...
                </p>
                <div className="flex flex-row justify-between mt-4 [&>button]:opacity-70 [&>button:hover]:opacity-100 px-4 sm:px-0">
                  <Link href={"#"}>
                    <button className="border-2 border-slate-800 bg-gradient-to-br from-[#f1796c] to-[#ee5847] font-bold text-sm text-slate-900 w-fit py-[6px] px-5 rounded-md  hover:border-slate-200 hover:text-slate-200 transition ease-in-out delay-150 duration-500 ">
                      EXPLORE
                    </button>
                  </Link>
                </div>
              </div>
              <div className="flex-1 flex flex-row justify-center md:justify-end">
                <div
                  className=" flex justify-start w-fit h-fit border-4 border-slate-600 hover:border-line-color transition-colors duration-300 p-3 rounded mt-10"
                  data-aos="zoom-in"
                >
                  <Image
                    src={"/assets/concerns/concerns-1.jpg"}
                    height={250}
                    width={350}
                    priority
                    alt="JCX - MM Villa"
                    className="w-full h-60 sm:h-[380px] min-w-[220px] sm:min-w-[320px] max-w-md z-[1] relative rounded"
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-col-reverse sm:flex-row-reverse justify-center items-center pb-4">
              <div
                className="py-4 px-3 md:max-w-md flex flex-col justify-end items-center sm:items-start gap-2 text-slate-200"
                data-aos="fade-right"
              >
                <Link href={"#"}>
                  <h4 className="font-bold text-lg hover:text-line-color">
                    JCX GLOBAL ADVENTURES
                  </h4>
                </Link>
                <p className="text-justify text-sm mt-4 px-4 sm:p-0">
                  JCX Global Adventures is one of the most trusted, reliable,
                  and esteemed travel consultancy firm in Dhaka.We offer entire
                  travel solutions which include and are not limited to...
                </p>
                <div className="flex flex-row justify-between mt-4 [&>button]:opacity-70 [&>button:hover]:opacity-100 px-4 sm:px-0">
                  <Link href={"#"}>
                    <button className="border-2 border-slate-800 bg-gradient-to-br from-[#f1796c] to-[#ee5847] font-bold text-sm text-slate-900 w-fit py-[6px] px-5 rounded-md  hover:border-slate-200 hover:text-slate-200 transition ease-in-out delay-150 duration-500 ">
                      EXPLORE
                    </button>
                  </Link>
                </div>
              </div>
              <div className="flex-1 flex flex-row justify-center md:justify-start">
                <div
                  className=" w-fit h-fit border-4 border-slate-600 hover:border-line-color transition-colors duration-300 p-3 rounded mt-10"
                  data-aos="zoom-in"
                >
                  <Image
                    src={"/assets/concerns/concerns-2.jpg"}
                    height={250}
                    width={350}
                    priority
                    alt="JCX - MM Villa"
                    className="w-full h-60 sm:h-[380px] min-w-[220px] sm:min-w-[320px] max-w-md z-[1] relative rounded"
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-col-reverse sm:flex-row justify-center items-center pb-4">
              <div
                className="py-4 px-3 md:max-w-md flex flex-col items-center sm:items-start gap-2 text-slate-200 sm:text-left"
                data-aos="fade-right"
              >
                <Link href={"#"}>
                  <h4 className="font-bold text-lg hover:text-line-color">
                    JCX PROPERTIES LTD
                  </h4>
                </Link>
                <p className="text-justify text-sm mt-4 px-4 sm:p-0">
                  JCX Properties Ltd. began its journey with the goal of
                  providing property solutions to independent home buyers and
                  sellers...
                </p>
                <div className="flex flex-row justify-between mt-4 [&>button]:opacity-70 [&>button:hover]:opacity-100 px-4 sm:px-0">
                  <Link href={"#"}>
                    <button className="border-2 border-slate-800 bg-gradient-to-br from-[#f1796c] to-[#ee5847] font-bold text-sm text-slate-900 w-fit py-[6px] px-5 rounded-md  hover:border-slate-200 hover:text-slate-200 transition ease-in-out delay-150 duration-500 ">
                      EXPLORE
                    </button>
                  </Link>
                </div>
              </div>
              <div className="flex-1 flex flex-row justify-center md:justify-end">
                <div
                  className=" flex justify-start w-fit h-fit border-4 border-slate-600 hover:border-line-color transition-colors duration-300 p-3 rounded mt-10"
                  data-aos="zoom-in"
                >
                  <Image
                    src={"/assets/concerns/concerns-3.jpg"}
                    height={250}
                    width={350}
                    priority
                    alt="JCX - MM Villa"
                    className="w-full h-60 sm:h-[380px] min-w-[220px] sm:min-w-[320px] max-w-md z-[1] relative rounded"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Index;

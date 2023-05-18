"use client";
import { Icon } from "@iconify/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
// import { image1 } from "../../../../public/assets/Nurani-Heights-At-a-Glance.jpg";

const Index: React.FC = () => {
  return (
    <>
      <div className="min-h-[50vh]">
        <div className="max-w-6xl mx-auto px-5 sm:px-12 pt-20">
          <h1
            className="text-center md:text-left text-slate-200 scale-100 font-serif text-4xl tracking-wide leading-snug uppercase"
            data-aos="fade-up"
          >
            Top <span className="text-line-color">Rated</span> <br />{" "}
            <span className="text-5xl font-medium">
              Wo<span className="text-line-color">rks</span>
            </span>
          </h1>

          <div className="flex flex-col-reverse gap-6 md:flex-row justify-between flex-1">
            <div
              className="py-4 px-3 md:max-w-md flex flex-col gap-2 text-slate-200 text-center sm:text-left"
              data-aos="fade-right"
            >
              <Link href={"#"}>
                <h4 className="font-bold text-lg hover:text-line-color">
                  MM Villa
                </h4>
              </Link>
              <p className="text-[10px] font-semibold">Basundhara R/A, Dhaka</p>
              <p className="text-[10px] font-semibold">1500 Sq. Ft.</p>
              <p className="text-justify text-sm mt-4 px-4 sm:p-0">
                MM Villa, the elegant residence is nestled on a spacious
                residential block in a desirably tranquil location. This
                enviable and exclusive property also provides an uncompromised
                standard of living quality.
              </p>
              <div className="flex flex-row justify-between mt-4 [&>button]:opacity-70 [&>button:hover]:opacity-100 px-4 sm:px-0">
                <button
                  className="transition ease-in-out delay-100 border border-gray-400 hover:border-line-color rounded-full p-0"
                  daata-aos="fade-up"
                >
                  <Icon
                    icon={"material-symbols:arrow-drop-up-rounded"}
                    className="mx-auto text-3xl text-line-color hover:text-slate-200 -rotate-90"
                  />
                </button>
                <button className="transition ease-in-out delay-100 border border-gray-400 hover:border-line-color  rounded-full p-0">
                  <Icon
                    icon={"material-symbols:arrow-drop-up-rounded"}
                    className="mx-auto text-3xl text-line-color hover:text-slate-200 rotate-90"
                  />
                </button>
              </div>
            </div>
            <div className="flex-1 flex flex-row justify-center md:justify-end">
              <div className=" w-fit h-fit border-4 border-slate-600 hover:border-line-color transition-colors duration-300 p-3 rounded mt-10 md:mt-[-25%] md:-mb-16 ">
                <Image
                  src={"/assets/Featured-Projects-MM-Villa.jpg"}
                  height={550}
                  width={350}
                  priority
                  alt="JCX - MM Villa"
                  className="w-full h-96 sm:h-[480px] min-w-[240px] sm:min-w-[340px] max-w-md z-[1] relative rounded"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Index;

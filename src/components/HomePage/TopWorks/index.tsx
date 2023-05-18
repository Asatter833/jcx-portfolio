"use client";
import { Icon } from "@iconify/react";
import Image from "next/image";
import React from "react";
// import { image1 } from "../../../../public/assets/Nurani-Heights-At-a-Glance.jpg";

const Index: React.FC = () => {
  return (
    <>
      <div className="min-h-[50vh]">
        <div className="max-w-6xl mx-auto px-5 sm:px-12 pt-20">
          <h1
            className="text-center sm: md:text-left text-slate-200 scale-100 font-serif text-4xl tracking-wide leading-snug uppercase"
            data-aos="fade-up"
          >
            Top <span className="text-line-color">Rated</span> <br />{" "}
            <span className="text-5xl font-medium">
              Wo<span className="text-line-color">rks</span>
            </span>
          </h1>

          <div className="flex flex-col-reverse gap-6 md:flex-row justify-between flex-1">
            <div
              className="py-4 px-3 md:max-w-md flex flex-col gap-2 text-slate-200"
              data-aos="fade-right"
            >
              <h4 className="font-bold text-lg">MM Villa</h4>
              <p className="text-[10px] font-semibold">Basundhara R/A, Dhaka</p>
              <p className="text-[10px] font-semibold">1500 Sq. Ft.</p>
              <p className="text-justify text-sm mt-4">
                MM Villa, the elegant residence is nestled on a spacious
                residential block in a desirably tranquil location. This
                enviable and exclusive property also provides an uncompromised
                standard of living quality.
              </p>
              <div className="flex flex-row justify-between mt-4 [&>button]:opacity-70 [&>button:hover]:opacity-100">
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
              <div className=" w-fit h-fit border-4 border-slate-600 hover:border-line-color transition-colors duration-300 p-3 rounded mt-10 md:mt-[-25%] ">
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
        {/* <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          className="fill-slate-900"
        >
          <path
            fill-opacity="1"
            d="M0,128L30,144C60,160,120,192,180,186.7C240,181,300,139,360,144C420,149,480,203,540,218.7C600,235,660,213,720,208C780,203,840,213,900,224C960,235,1020,245,1080,261.3C1140,277,1200,299,1260,282.7C1320,267,1380,213,1410,186.7L1440,160L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"
          ></path>
        </svg> */}
      </div>
    </>
  );
};

export default Index;

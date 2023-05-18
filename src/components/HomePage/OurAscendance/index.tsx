import React from "react";
import Link from "next/link";

const Index: React.FC = () => {
  return (
    <>
      <div className="min-h-[50vh] w-full">
        <div className="w-full mx-auto pt-10 sm:pt-24 py-10 bg-slate-300">
          <div className="max-w-6xl mx-auto px-12 sm:px-14">
            <div className="flex flex-col items-start text-[#f56a5b]">
              <h1
                className="text-center text-4xl sm:text-6xl lg:text-8xl uppercase"
                data-aos="fade-right"
                data-aos-duration="1000"
              >
                Our
              </h1>
              <h1
                className="text-center text-4xl sm:text-6xl lg:text-8xl uppercase"
                data-aos="fade-right"
                data-aos-duration="1500"
              >
                Acs<span className="text-slate-700">endence</span>
              </h1>
            </div>
            <div
              className="flex flex-col gap-4 py-6 text-sm text-slate-800 font-semibold"
              data-aos="zoom-in"
              data-aos-duration="1000"
            >
              <p>
                JCX Developments Ltd embarked on the Real Estate journey with
                the commitment to bring contemporary design and develop
                large-scale Residential, Commercial, and Condominium projects in
                Bangladesh with Japanese collaboration and experience.
              </p>
              <p>
                We will strive to deliver precise, exquisite solutions to our
                client’s wishes and requirements so that their aspirations
                become a reality. This will be accomplished by introducing
                state-of-the-art innovative Japanese technologies with the
                partnership with Creed Group from Japan.
              </p>
            </div>
            <Link href={"#"}>
              <button className="border-2 bg-gradient-to-br from-[#f1796c] to-[#ee5847] font-bold text-sm w-fit py-[6px] px-5 rounded-md hover:border-slate-800 hover:text-slate-200 transition ease-in-out delay-150 duration-500 ">
                ABOUT JCX
              </button>
            </Link>
          </div>
        </div>
        <div></div>
      </div>
    </>
  );
};

export default Index;

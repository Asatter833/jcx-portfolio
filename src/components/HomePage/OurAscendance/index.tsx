import React from "react";
import Link from "next/link";
import Image from "next/image";

const Index: React.FC = () => {
  return (
    <>
      <div className="min-h-[50vh] w-full">
        <div className="w-full mx-auto pt-10 sm:pt-24 py-10 bg-gradiant-to-b from-slate-300 via-transparent to-slate-900">
          <div className="max-w-6xl mx-auto px-12 sm:px-14 ">
            <div className="flex flex-col items-center sm:items-start text-[#f56a5b] ">
              <h1
                className="text-center text-4xl sm:text-6xl uppercase"
                data-aos="fade-right"
                data-aos-duration="1000"
              >
                Our
              </h1>
              <h1
                className="text-center text-4xl sm:text-6xl  uppercase"
                data-aos="fade-right"
                data-aos-duration="1500"
              >
                Acs<span className="text-slate-200">endence</span>
              </h1>
            </div>
            <div
              className="flex flex-col gap-4 py-6 text-sm text-slate-200 font-semibold"
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
              <button className="border-2 border-slate-900 bg-gradient-to-br from-[#f1796c] to-[#ee5847] font-bold text-sm w-fit py-[6px] px-5 rounded-md hover:border-slate-200 hover:text-slate-200 transition ease-in-out delay-150 duration-500 ">
                ABOUT JCX
              </button>
            </Link>
          </div>
          <div className="">
            <div className="max-w-6xl mx-auto px-5 sm:px-20 py-8">
              <div className="flex flex-col-reverse lg:flex-row justify-between gap-8 min-h-[50vh]">
                <div className="flex-1 relative grid gap-2">
                  <div className="relative min-h-[300px]">
                    <Image
                      src={"/assets/ascendance/_ascendance_1.jpg"}
                      fill
                      alt={"Ascendance of JCX - 1"}
                      className="rounded-md object-cover"
                      data-aos="fade-up"
                    />
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    <div className="relative min-h-[300px]">
                      <Image
                        src={"/assets/ascendance/_ascendance_2.jpg"}
                        fill
                        alt={"Ascendance of JCX - 1"}
                        className="rounded-md object-cover"
                        data-aos="fade-up"
                      />
                    </div>
                    <div className="relative min-h-[250px]">
                      <Image
                        src={`/assets/ascendance/_ascendance_3.jpg`}
                        fill
                        alt={"Ascendance of JCX - 1"}
                        className="rounded-md object-cover"
                        data-aos="fade-right"
                      />
                    </div>
                  </div>
                  <div className="relative min-h-[250px]">
                    <Image
                      src={`/assets/ascendance/_ascendance_4.jpg`}
                      fill
                      alt={"Ascendance of JCX - 1"}
                      className="rounded-md object-cover"
                      data-aos="fade-left"
                    />
                  </div>
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

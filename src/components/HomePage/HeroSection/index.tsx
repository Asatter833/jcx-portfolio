import React from "react";
import "./index.css";
import Link from "next/link";
const Index: React.FC = () => {
  return (
    <>
      <div className="bg-slate-900 mx-auto bg-[url(/bg.jpg)] object-cover bg-center">
        <div className="flex justify-center min-h-[60vh] items-center px-28 h-full bg-gradient-to-b from-gray-900 via-[#11182799] to-gray-900 ">
          <div className="flex flex-col gap-4">
            <div className="uppercase text-slate-200">
              <h1 className="font-bold" data-aos="fade-right">
                Discover
              </h1>
              <div
                className="content"
                data-aos="zoom-in"
                data-aos-duration="600"
              >
                <h1 className="text-4xl sm:text-6xl lg:text-8xl absolute">
                  Perfection
                </h1>
                <h1 className="text-4xl sm:text-6xl lg:text-8xl">Perfection</h1>
              </div>
              <h1 className="text-end font-bold" data-aos="fade-left">
                In Every Detail
              </h1>
            </div>
            <Link href={"#"}>
              <button className="border-2 border-slate-800 bg-gradient-to-br from-[#f1796c] to-[#ee5847] font-bold text-sm w-fit py-[6px] px-5 rounded-md hover:border-slate-200 hover:text-slate-200 transition ease-in-out delay-150 duration-500 ">
                EXPLORE
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Index;

"use client";
import React from "react";
import { Icon } from "@iconify/react";

const Index: React.FC = () => {
  return (
    <>
      <div className="min-h-[50vh] w-full">
        <div className="w-full mx-auto pt-10 sm:pt-24 py-10 bg-gradiant-to-b from-slate-300 via-transparent to-slate-900">
          <div className="max-w-6xl mx-auto px-12 sm:px-14 ">
            <div className="flex flex-col items-start text-slate-200 ">
              <h1
                className="text-left scale-100 text-4xl sm:text-6xl lg:text-8xl tracking-wide leading-snug uppercase"
                data-aos="fade-up"
              >
                <span className="text-7xl font-medium">
                  O<span className="text-line-color">UR</span> <br />{" "}
                </span>
                Bel
                <span className="text-line-color">iefs</span>
              </h1>
            </div>
            <div
              className="flex flex-col gap-4 py-6 text-sm text-slate-200 font-semibold"
              data-aos="zoom-in"
              data-aos-duration="1000"
            >
              <ol className="relative border-l border-gray-200 dark:border-gray-700">
                <li className="mb-10 ml-6">
                  <span className="absolute flex items-center justify-center w-6 h-6 border border-line-color rounded-full -left-3 ring-8 ring-gray-900 bg-gray-900">
                    <Icon
                      icon={"eos-icons:trusted-organization"}
                      className="w-4 h-4 text-slate-200"
                    />
                  </span>
                  <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">
                    Trust{" "}
                  </h3>

                  <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                    Trustworthiness is one of our most prized values. Ensuring a
                    culture that naturalizes the sense of reliability among the
                    people involved enhances productivity, respect and helps
                    strengthen the bond between the clients and us.
                  </p>
                </li>
                <li className="mb-10 ml-6">
                  <span className="absolute flex items-center justify-center w-6 h-6 border border-line-color rounded-full -left-3 ring-8 ring-gray-900 bg-gray-900">
                    <Icon
                      icon={"mdi:proximity-sensor"}
                      className="w-4 h-4 text-slate-200"
                    />
                  </span>
                  <h3 className="mb-1 text-lg font-semibold text-gray-900 dark:text-white">
                    Closeness
                  </h3>

                  <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                    Maintaining long-term, rewarding relationships with our
                    clients is one of the principal things we transgress. Their
                    happiness is our advancement towards success, and we make it
                    happen by paying attention to the tiniest details.
                  </p>
                </li>
                <li className="mb-10 ml-6">
                  <span className="absolute flex items-center justify-center w-6 h-6 border border-line-color rounded-full -left-3 ring-8 ring-gray-900 bg-gray-900">
                    <Icon
                      icon={"teenyicons:bulb-off-solid"}
                      className="w-4 h-4 text-slate-200"
                    />
                  </span>
                  <h3 className="mb-1 text-lg font-semibold text-gray-900 dark:text-white">
                    Uniqueness
                  </h3>
                  <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                    Maintaining long-term, rewarding relationships with our
                    clients is one of the principal things we transgress. Their
                    happiness is our advancement towards success, and we make it
                    happen by paying attention to the tiniest details.
                  </p>
                </li>
                <li className="ml-6">
                  <span className="absolute flex items-center justify-center w-6 h-6 border border-line-color rounded-full -left-3 ring-8 ring-gray-900 bg-gray-900">
                    <Icon
                      icon={"fa6-solid:handshake"}
                      className="w-4 h-4 text-slate-200"
                    />
                  </span>
                  <h3 className="mb-1 text-lg font-semibold text-gray-900 dark:text-white">
                    Integrity
                  </h3>

                  <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                    Integrity is a fundamental value that characterizes us. We
                    demonstrate integrity in our work and garner trust from our
                    clients by accumulating accomplishments and success over the
                    new course of our journey.
                  </p>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Index;

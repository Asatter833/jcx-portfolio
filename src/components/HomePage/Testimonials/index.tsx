"use client";
import React from "react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

const Index: React.FC = () => {
  return (
    <>
      <div className="min-h-[50vh]">
        <div className="max-w-6xl mx-auto px-5 sm:px-12 pt-20">
          <Swiper
            // install Swiper modules
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={50}
            slidesPerView={3}
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log("slide change")}
          >
            <div
              className="flex justify-center items-center gap-2 text-slate-200"
              data-aos="fade-right"
            >
              <p className="max-w-sm text-xl text-center">
                "Trusting a company with your land is very important, and JCX
                Developments was the right choice as they earned our trust."
              </p>
            </div>
          </Swiper>
        </div>
        /
      </div>
    </>
  );
};

export default Index;

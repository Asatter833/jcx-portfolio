"use client";
import React from "react";
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";

const Index: React.FC = () => {
	return (
		<>
			<div className="max-w-6xl mx-auto pb-11">
				<div className="flex flex-col items-center text-[#f56a5b] w-full mt-16">
					<h1
						className="text-center text-4xl sm:text-6xl uppercase"
						data-aos="fade-right"
						data-aos-duration="1500"
					>
						Tes<span className="text-slate-200">timonials</span>
					</h1>
				</div>
				<div
					className="max-w-6xl mx-auto relative px-5 sm:px-12 pt-20"
					data-aos="fade-right"
				>
					<Swiper
						// install Swiper modules
						modules={[Pagination, Autoplay]}
						spaceBetween={50}
						slidesPerView={1}
						centeredSlides
						autoplay={{
							delay: 2500,
							disableOnInteraction: false,
						}}
						// navigation
						// scrollbar={{ draggable: true }}
					>
						<SwiperSlide>
							<p className="max-w-sm text-base font-bold text-slate-300 text-center mx-auto">
								&quot;Trusting a company with your land is very important, and
								JCX Developments was the right choice as they earned our
								trust.&quot;
							</p>
						</SwiperSlide>
						<SwiperSlide>
							<p className="max-w-sm text-base font-bold text-slate-300 text-center mx-auto">
								&quot;Trusting a company with your land is very important, and
								JCX Developments was the right choice as they earned our
								trust.&quot;
							</p>
						</SwiperSlide>
					</Swiper>
				</div>
			</div>
		</>
	);
};

export default Index;

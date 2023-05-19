import React from "react";
import HeroSection from "../components/HomePage/HeroSection";
import TopWorks from "../components/HomePage/TopWorks";
import OurAscendance from "../components/HomePage/OurAscendance";
import Beliefs from "../components/HomePage/Beliefs";
import Concerns from "../components/HomePage/Concerns";
import Testimonials from "../components/HomePage/Testimonials";

const page = () => {
  return (
    <main>
      <HeroSection />
      <TopWorks />
      <OurAscendance />
      <Beliefs />
      <Concerns />
      <Testimonials />
      {/* <AboutSection />
      <ProjectsSection /> */}
    </main>
  );
};

export default page;

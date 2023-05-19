import React from "react";
import HeroSection from "../components/HomePage/HeroSection";
import TopWorks from "../components/HomePage/TopWorks";
import OurAscendance from "../components/HomePage/OurAscendance";
import Beliefs from "../components/HomePage/Beliefs";

const page = () => {
  return (
    <main>
      <HeroSection />
      <TopWorks />
      <OurAscendance />
      <Beliefs />
      {/* <AboutSection />
      <ProjectsSection /> */}
    </main>
  );
};

export default page;

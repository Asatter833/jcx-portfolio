import React from "react";
import HeroSection from "../components/HomePage/HeroSection";
import TopWorks from "../components/HomePage/TopWorks";
import OurAscendance from "../components/HomePage/OurAscendance";

const page = () => {
  return (
    <main>
      <HeroSection />
      <TopWorks />
      <OurAscendance />
      {/* <AboutSection />
      <ProjectsSection /> */}
    </main>
  );
};

export default page;

import React from "react";
import Skills from "./components/HeroSection/Skills/Skills.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";
import LeftSidebar from "./components/HeroSection/LeftSidebar/LeftSidebar.jsx";
import RightSidebar from "./components/HeroSection/RightSidebar/RightSidebar.jsx";
import AboutMeLeft from "./components/AboutMe/AboutMeLeft/AboutMeLeft.jsx";
import AboutMeRight from "./components/AboutMe/AboutMeRight/AboutMeRight.jsx";

const App = () => {
  return (
    <div className="bg-zinc-950  text-white lg:max-w-screen">
      <Navbar />
      <div className="flex flex-col lg:flex-row lg:justify-around items-center mt-10 space-y-6 lg:gap-0">
        <div className="order-1 lg:order-2 ">
          <Skills />
        </div>

        <div className="order-2 lg:order-1 ">
          <LeftSidebar />
        </div>

        <div className="order-3 ">
          <RightSidebar />
        </div>
      </div>
      <div className="flex flex-col md:flex-row md:justify-around items-center mt-10 pt-10 gap-6 md:gap-0 md:max-w-10/12 md:mx-auto border-t-2 border-cyan-400">
        <AboutMeLeft />
        <AboutMeRight />
      </div>
    </div>
  );
};

export default App;

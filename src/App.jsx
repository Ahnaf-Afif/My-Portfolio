import React from "react";
import Skills from "./components/HeroSection/Skills/Skills.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";
import LeftSidebar from "./components/HeroSection/LeftSidebar/LeftSidebar.jsx";
import RightSidebar from "./components/HeroSection/RightSidebar/RightSidebar.jsx";

const App = () => {
  return (
    <div className="bg-zinc-950  text-white ">
      <Navbar />
      <div className="flex flex-col md:flex-row justify-around items-center mt-10 gap-6 md:gap-0">
        <div className="order-1 md:order-2 ">
          <Skills />
        </div>

        <div className="order-2 md:order-1 ">
          <LeftSidebar />
        </div>

        <div className="order-3 ">
          <RightSidebar />
        </div>
      </div>
    </div>
  );
};

export default App;

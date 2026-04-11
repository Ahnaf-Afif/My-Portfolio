import React from "react";

const AboutMeRight = () => {
  return (
    <div>
      <div className="flex flex-col text-start text-white gap-3 max-w-[250px] md:max-w-xl ">
        <h1 className="text-2xl font-bold">How I Can Help</h1>
        <div className="text-base ">
          I build responsive websites, web app interfaces, and full-stack MERN
          projects with clean design and practical functionality.
        </div>
        <div className="text-base ">
          I am continuously improving my skills in frontend development, backend
          logic, APIs, and database integration.
        </div>
        <div className="mt-3">
          <div className="text-4xl font-bold">10+</div>
          <div className="text-sm opacity-80">Projects Built</div>
        </div>
      </div>
    </div>
  );
};

export default AboutMeRight;

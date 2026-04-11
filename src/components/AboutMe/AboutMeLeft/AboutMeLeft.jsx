import React from "react";

const AboutMeLeft = () => {
  return (
    <div className="flex flex-col text-left gap-5 max-w-[250px] md:max-w-[400px] ">
      <div className="text-2xl font-bold text-white">Education</div>
      <h1 className="text-base  text-white">
        BSc in Electronics and Telecommunication Engineering
      </h1>
      <p className="text-base  text-white">
        Chittagong University of Engineering and Technology
      </p>
      <p className="text-xl font-bold text-white">CGPA : 3.35</p>
    </div>
  );
};

export default AboutMeLeft;

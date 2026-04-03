import React from "react";
import { FaPhoneSquareAlt } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start flex justify-center items-center gap-3 md:gap-10">
        <a href="">
          <SiGmail className="text-2xl" />
        </a>
        <a href="">
          <FaGithub className="text-2xl" />
        </a>
      </div>
      <div className="navbar-center">
        <div className="btn btn-ghost text-xl md:text-2xl">Afif Siddique</div>
      </div>
      <div className="navbar-end flex justify-center items-center gap-3 md:gap-10">
        <a href="">
          <FaPhoneSquareAlt className="text-2xl" />
        </a>
        <a href="">
          <FaFacebook className="text-2xl" />
        </a>
      </div>
    </div>
  );
};

export default Navbar;

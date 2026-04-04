import React from "react";
import { FaPhoneSquareAlt } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar  shadow-sm bg-zinc-950  text-white">
      <div className="navbar-start flex justify-center items-center gap-3 md:gap-10">
        <a href="">
          <SiGmail className="text-2xl" />
        </a>
        <a href="">
          <FaGithub className="text-2xl" />
        </a>
      </div>
      <div className="navbar-center">
        <div className="btn btn-ghost text-xl md:text-2xl  ">Afif Siddique</div>
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

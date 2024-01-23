import React from "react";
import {
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagram,
  FaTwitterSquare,
} from "react-icons/fa";
import { MdMarkEmailUnread } from "react-icons/md";

import me from "../assets/profile.png";

const Footer = () => {
  return (
    <div className=" bg-cBlack text-white">
      <div className="max-w-[1240px] mx-auto grid gap-2 md:grid-cols-2 ">
          <div className="flex items-center">
            <img src={me} className="h-14 " />
            <h1 className="text-xl  w-full mx-2">
              Jayesh <span className="text-cGreen">Shaha.</span>
            </h1>
          </div>
          <div>
          <div className="flex items-center justify-center md:justify-start  ">
            <MdMarkEmailUnread size={20} className="mx-2 text-[#ccc] hover:text-cGreen" />
            <p className="text-[#ccc]">jayeshshaha@gmail.com</p>
          </div>
          <div className="flex p-2 md:justify-start justify-center">
            <FaFacebookSquare size={20} className=" hover:text-cGreen" />
            <FaGithubSquare size={20} className="mx-2 hover:text-cGreen" />
            <FaInstagram size={20} className="mx-2 hover:text-cGreen" />
            <FaTwitterSquare size={20} className="mx-2 hover:text-cGreen" />
          </div>
          </div>
      </div>
    </div>
  );
};

export default Footer;

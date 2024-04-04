import { Socials } from "@/constants";
import Image from "next/image";
import React from "react";

const Navbar = () => {
  return (
    <div className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-10">
      <div className="w-full h-full flex flex-row items-center justify-between m-auto px-[10px]">
        {/* "RCPITC" text */}
        <span className="font-bold ml-[10px] sm:ml-0 text-gray-300">RCPITC</span>

        {/* Navigation links */}
        <div className="hidden sm:flex items-center justify-between w-[500px] h-auto border border-[#7042f861] bg-[#0300145e] mr-[15px] px-[20px] py-[10px] rounded-full text-gray-200">
          <a href="#about-us" className="cursor-pointer">About us</a>
          <a href="#Explore" className="cursor-pointer">Explore</a>
          <a href="#Upcoming" className="cursor-pointer">Upcoming</a>
        </div>

        {/* Social icons */}
        <div className="flex flex-row gap-5">
          {Socials.map((social) => (
            <Image
              src={social.src}
              alt={social.name}
              key={social.name}
              width={24}
              height={24}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;

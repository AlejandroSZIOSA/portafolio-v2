"use client";
import React from "react";
import { useMedia } from "use-media";

export default function LogoHeader() {
  const isMobile = useMedia("(max-width: 765px)"); //from useMedia library
  return (
    <div className="flex justify-center items-center ">
      <h1 className="text-[#F24E1E] text-center mt-3 md:ml-4 md:text-4xl">
        Portafolio
      </h1>
      <span className="ml-2">
        <img
          src="/nextjs-white.svg"
          width={isMobile ? "35" : "50"}
          height={isMobile ? "35" : "50"}
          alt="next-image"
        />
      </span>
    </div>
  );
}

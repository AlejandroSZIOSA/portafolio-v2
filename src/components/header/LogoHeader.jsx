"use client";
import { CONSTANTS } from "@/utils/constants";
import React from "react";
import { useMedia } from "use-media";

export default function LogoHeader() {
  const isMobile = useMedia(CONSTANTS.USE_MEDIA_MAX_WIDTH); //from useMedia library
  return (
    <div className="flex justify-center items-center ">
      <h1 className="text-[#F24E1E] text-center mt-3 md:ml-4 md:text-4xl">
        Portfolio
      </h1>
      <span className="ml-2">
        <img
          src="/logos-next-white.svg"
          width={isMobile ? "35" : "50"}
          height={isMobile ? "35" : "50"}
          alt="next-image"
        />
      </span>
    </div>
  );
}

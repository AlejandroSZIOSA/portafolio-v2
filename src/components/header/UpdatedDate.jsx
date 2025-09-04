"use client";
import React from "react";
import { useMedia } from "use-media";

const getCurrentDate = () => {
  const now = new Date();
  const day = String(now.getDate()).padStart(2, "0");
  const month = now.toLocaleString("default", { month: "short" });
  const year = now.getFullYear();
  return `${day}-${month}-${year}`;
};

const UPDATED_DATE = getCurrentDate();

export default function UpdatedDate() {
  const isMobile = useMedia("(max-width: 765px)"); //from useMedia library
  return (
    <div className="flex justify-end md:self-center md:items-end">
      <img
        src="icons/clarity_update-white.svg"
        width={isMobile ? "15" : "24"}
        height={isMobile ? "auto" : "auto"}
        alt="Update icon"
      />
      <div className="pr-4 pl-1 md:pl-2 text-xs md:text-base text-white">
        {UPDATED_DATE}
      </div>
    </div>
  );
}

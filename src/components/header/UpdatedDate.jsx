"use client";
import React from "react";
import Image from "next/image";
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
    <>
      {isMobile ? (
        <div className="flex justify-end md:self-center md:items-center">
          <Image
            src="icons/clarity_update-white.svg"
            width="15"
            height="15"
            alt="Update icon"
          />
          <div className="pr-4 pl-2 text-xs text-white">{UPDATED_DATE}</div>
        </div>
      ) : (
        <div className="flex justify-end md:self-center md:items-end">
          <Image
            src="icons/clarity_update-white.svg"
            width="20"
            height="20"
            alt="Update icon"
          />
          <div className="pr-4 pl-2 text-xs text-white">{UPDATED_DATE}</div>
        </div>
      )}
    </>
  );
}

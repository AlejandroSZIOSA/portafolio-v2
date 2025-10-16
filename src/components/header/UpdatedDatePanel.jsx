"use client";
import { CONSTANTS } from "@/utils/constants";
import { useMedia } from "use-media";

export default function UpdatedDatePanel() {
  const isMobile = useMedia(CONSTANTS.USE_MEDIA_MAX_WIDTH); //from useMedia library
  return (
    <div className="flex justify-end md:self-center md:items-end">
      <img
        src="icons/clarity_update-white.svg"
        width={isMobile ? "16" : "24"}
        height={isMobile ? "auto" : "auto"}
        alt="Updated date icon"
      />
      <div className="pr-4 pl-1 md:pl-2 text-xs md:text-base text-white">
        <span>October 15, 2025</span>
      </div>
    </div>
  );
}

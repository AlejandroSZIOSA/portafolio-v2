"use client";
import { CONSTANTS } from "@/utils/constants";
import { useMedia } from "use-media";

export default function UpdatedDatePanel() {
  const { USE_MEDIA_MAX_WIDTH, CURRENT_UPDATED_DATE } = CONSTANTS;

  const isMobile = useMedia(USE_MEDIA_MAX_WIDTH); //from useMedia library
  return (
    <div className="flex justify-end md:self-center md:items-end">
      <img
        src="icons/clarity_update-white.svg"
        width={isMobile ? "16" : "24"}
        height={isMobile ? "auto" : "auto"}
        alt="Updated date icon"
      />
      <div className="pr-4 pl-1 md:pl-2 text-xs md:text-base text-white">
        <span>{CURRENT_UPDATED_DATE}</span>
      </div>
    </div>
  );
}

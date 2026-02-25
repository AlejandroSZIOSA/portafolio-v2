"use client";
import { CONSTANTS } from "@/utils/constants";
import Image from "next/image";
import { useMedia } from "use-media";

export default function UpdatedDatePanel() {
  const { USE_MEDIA_MAX_WIDTH, CURRENT_UPDATED_DATE } = CONSTANTS;

  const isMobile = useMedia(USE_MEDIA_MAX_WIDTH); //from useMedia library
  return (
    <div className="inline-flex justify-end md:self-center md:items-end">
      <Image
        src="/icons/clarity_update-white.svg"
        width={isMobile ? 16 : 24}
        height={isMobile ? 16 : 24}
        alt="Updated date icon"
      />
      <span className="pr-4 pl-1 md:pl-2 text-xs md:text-base text-white">
        {CURRENT_UPDATED_DATE}
      </span>
    </div>
  );
}

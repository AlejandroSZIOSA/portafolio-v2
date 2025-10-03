"use client";
import { useMedia } from "use-media";
import { CONSTANTS } from "@/utils/constants";

export default function TechItem({ tech }) {
  const { imgUrl, level, title } = tech;

  const containerMobile = undefined;
  const containerDesktop = "flex justify-center";

  const isMobile = useMedia(CONSTANTS.USE_MEDIA_MAX_WIDTH); //from useMedia library
  return (
    <div className={!isMobile ? containerDesktop : containerMobile}>
      <div className="flex flex-col items-center justify-items-center">
        <img src={imgUrl} width={40} height="auto" alt="Tech Picture" />
        <p className="pt-2">{level}</p>
      </div>
      {!isMobile && <p className="p-2">{title}</p>}
    </div>
  );
}

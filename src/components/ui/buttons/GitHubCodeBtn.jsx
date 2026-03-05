"use client";
import { CONSTANTS } from "@/utils/constants";
import { useMedia } from "use-media";
import Image from "next/image";

//importing multiple constants from index.js in icons folder and exports
import { GIT_ICONS } from "../../../../public/icons";

//delivering
const oranges = [GIT_ICONS.ramOrangeBlack, GIT_ICONS.catOrangeIcon];
const blues = [GIT_ICONS.ramWhiteBlue, GIT_ICONS.catBlueIcon];

export default function GitHubCodeBtn({
  gitHubLink = "#",
  variant = "orange",
}) {
  const isMobile = useMedia(CONSTANTS.USE_MEDIA_MAX_WIDTH); //from useMedia library

  //delivering
  let gitIcons;
  if (variant === "blue") {
    gitIcons = blues;
  } else {
    gitIcons = oranges;
  }

  return (
    <a href={gitHubLink}>
      <Image
        className="transition-transform duration-200 hover:scale-110 hover:opacity-80"
        src={isMobile ? gitIcons[0] : gitIcons[1]}
        alt="Github"
        width={isMobile ? 32 : 36}
        height="auto"
      />
    </a>
  );
}

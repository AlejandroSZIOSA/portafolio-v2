"use client";
import { CONSTANTS } from "@/utils/constants";
import { useMedia } from "use-media";
import Image from "next/image";

/* import GitIcon from "../../../../public/icons/git-cat-blue.svg"; */

const orange = ["/icons/git-ram-orange.svg", "/icons/git-cat-orange.svg"];
const blue = ["/icons/git-ram-blue.svg", "/icons/git-cat-blue.svg"];

export default function GitHubCodeBtn({
  gitHubLink = "#",
  variant = "orange",
}) {
  const isMobile = useMedia(CONSTANTS.USE_MEDIA_MAX_WIDTH); //from useMedia library

  let gitIcons;
  if (variant === "blue") {
    gitIcons = blue;
  } else {
    gitIcons = orange;
  }

  return (
    <a href={gitHubLink}>
      <Image
        className="transition-transform duration-200 hover:scale-110 hover:opacity-80"
        src={isMobile ? gitIcons[0] : gitIcons[1]}
        alt="Github"
        width={isMobile ? 45 : 42}
        height={isMobile ? 45 : 42}
      />
    </a>
  );
}

"use client";
import { CONSTANTS } from "@/utils/constants";
import { useMedia } from "use-media";
import Image from "next/image";

export default function GitHubLinkBtn({ gitHubLink = "#" }) {
  const isMobile = useMedia(CONSTANTS.USE_MEDIA_MAX_WIDTH); //from useMedia library

  return (
    <a href={gitHubLink}>
      <Image
        className="transition-transform duration-200 hover:scale-110 hover:opacity-80"
        src={
          isMobile ? "/icons/git-ram-orange.svg" : "/icons/git-cat-orange.svg"
        }
        alt="GitHub"
        width={isMobile ? 45 : 42}
        height={isMobile ? 45 : 42}
      />
    </a>
  );
}

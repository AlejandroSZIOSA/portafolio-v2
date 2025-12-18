"use client";
import { CONSTANTS } from "@/utils/constants";
import { useMedia } from "use-media";
import Image from "next/image";

/* import GitIcon from "../../../../public/icons/git-cat-blue.svg"; */

export default function ToGitCodeBtn({ gitHubLink = "#" }) {
  const isMobile = useMedia(CONSTANTS.USE_MEDIA_MAX_WIDTH); //from useMedia library

  return (
    <a href={gitHubLink}>
      <Image
        className="transition-transform duration-200 hover:scale-110 hover:opacity-80"
        src={
          isMobile ? "/icons/git-ram-orange.svg" : "/icons/git-cat-orange.svg"
        }
        alt="Github"
        width={isMobile ? 45 : 42}
        height={isMobile ? 45 : 42}
      />
      {/*   <GitIcon
        className="transition-transform duration-200 hover:scale-110 hover:opacity-80"
        width={isMobile ? 45 : 42}
        height={isMobile ? 45 : 42}
        alt="GitHub"
      /> */}
    </a>
  );
}

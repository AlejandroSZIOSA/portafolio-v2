"use client";
import React from "react";
import { CONSTANTS } from "@/utils/constants";
import { useMedia } from "use-media";

export default function GitHubLinkBtn({ gitHubLink = "#" }) {
  const isMobile = useMedia(CONSTANTS.USE_MEDIA_MAX_WIDTH); //from useMedia library
  return (
    <a href={gitHubLink}>
      <img
        className="transition-transform duration-200 hover:scale-110 hover:opacity-80"
        src={isMobile ? "icons/git-ram-orange.svg" : "icons/git-cat-orange.svg"}
        alt="LinkedIn"
        width={isMobile ? "45" : "42"}
        height="auto"
      />
    </a>
  );
}

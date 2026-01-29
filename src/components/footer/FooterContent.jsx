"use client";
import { CONSTANTS } from "@/utils/constants";
import { useMedia } from "use-media";

export default function FooterContent() {
  const isMobile = useMedia(CONSTANTS.USE_MEDIA_MAX_WIDTH);

  return (
    <button>
      <a href="https://www.linkedin.com/in/gabriel-sazo-a02302223/">
        <img
          id="contact_linkedin_img"
          className="transition-transform duration-200 hover:scale-110"
          src="logos-linkedin.svg"
          alt="LinkedIn"
          width={isMobile ? "70" : "85"} // Adjust the width and height based on the design}
          height="auto"
        />
      </a>
    </button>
  );
}

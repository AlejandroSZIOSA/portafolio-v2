"use client";
import { CONSTANTS } from "@/utils/constants";
import Image from "next/image";
import { useMedia } from "use-media";
import LINKEDIN_ICON from "../../../public/logos-linkedin.svg";

//TODO: Cambiar img for Img component done!

export default function Footer() {
  const isMobile = useMedia(CONSTANTS.USE_MEDIA_MAX_WIDTH);

  return (
    <footer>
      <button>
        <a href="https://www.linkedin.com/in/gabriel-sazo-a02302223/">
          <Image
            id="contact_linkedin_img"
            className="transition-transform duration-200 hover:scale-110"
            src={LINKEDIN_ICON}
            alt="LinkedIn"
            width={isMobile ? 70 : 85}
            height="auto"
          />
        </a>
      </button>
    </footer>
  );
}

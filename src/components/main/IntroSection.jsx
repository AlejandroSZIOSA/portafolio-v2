"use client";
import Image from "next/image";
import { CONSTANTS } from "@/utils/constants";
import { useMedia } from "use-media";

import me from "../../../public/images/me/me-light_b.png";
import LanguagePanel from "../ui/panels/LanguagePanel";

export default function IntroSection() {
  const isMobile = useMedia(CONSTANTS.USE_MEDIA_MAX_WIDTH); //from useMedia library
  return (
    <div className="flex flex-col pt-4 items-center justify-center md:flex-row md:pt-8 md:pb-12 md:mr-auto md:pl-16">
      <div>
        <Image
          src={me}
          className="rounded-[15%]"
          width={isMobile ? 300 : 400}
          height={150}
          alt="no picture"
          priority
        />
        <LanguagePanel />
      </div>

      <div className="py-2 text-center md:w-96 md:h-auto md:py-0 md:mt-auto md:text-left">
        <p className="font-mono ml-3 p-2 text-left text-lg md:ml-4 md:text-xl md:border-2 md:border-black md:rounded-lg">
          Hi!😎 <br></br>My name is{" "}
          <strong id="intro_text_strong">Gabriel Alejandro Sazo.</strong>
          <br></br>I am an action oriented, highly focused and very curious
          <strong> Frontend Developer Junior.</strong>
        </p>
      </div>
    </div>
  );
}

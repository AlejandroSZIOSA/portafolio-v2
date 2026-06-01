import React from "react";
import Image from "next/image";
import { CONSTANTS } from "@/utils/constants";
import { useMedia } from "use-media";
import speakerIcon from "../../../../public/icons/speak.svg";

import { FLAGS } from "../../../../public/icons";

const LanguagePanel = () => {
  const isMobile = useMedia(CONSTANTS.USE_MEDIA_MAX_WIDTH); //from useMedia library

  return (
    <div className="flex space-x-1 mt-1 justify-center">
      <Image
        className="mr-2"
        src={speakerIcon}
        width={isMobile ? 20 : 22}
        height="auto"
        alt="Speaker icon"
      />
      <Image
        src={FLAGS.sweFlag}
        width={isMobile ? 30 : 45}
        height="auto"
        alt="Swedish flag"
      />
      <Image
        src={FLAGS.engFlag}
        width={isMobile ? 30 : 45}
        height="auto"
        alt="English flag"
      />
      <Image
        src={FLAGS.espFlag}
        width={isMobile ? 30 : 45}
        height="auto"
        alt="Spanish flag"
      />
    </div>
  );
};

export default LanguagePanel;

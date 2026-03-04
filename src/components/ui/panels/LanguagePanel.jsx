import React from "react";
import Image from "next/image";
import { CONSTANTS } from "@/utils/constants";
import { useMedia } from "use-media";

import { FLAGS } from "../../../../public/icons";

const LanguagePanel = () => {
  const isMobile = useMedia(CONSTANTS.USE_MEDIA_MAX_WIDTH); //from useMedia library

  return (
    <div className="flex space-x-2 mt-1 justify-center">
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

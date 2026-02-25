import React from "react";
import Image from "next/image";
import { CONSTANTS } from "@/utils/constants";
import { useMedia } from "use-media";

import sweFlag from "../../../../public/icons/flags/swe.png";
import engFlag from "../../../../public/icons/flags/en.png";
import espFlag from "../../../../public/icons/flags/es.png";

const LanguagePanel = () => {
  const isMobile = useMedia(CONSTANTS.USE_MEDIA_MAX_WIDTH); //from useMedia library

  return (
    <div className="flex space-x-2 mt-1 justify-center">
      <Image
        src={sweFlag}
        width={isMobile ? 35 : 65}
        height="auto"
        alt="Swedish flag"
      />
      <Image
        src={engFlag}
        width={isMobile ? 35 : 65}
        height="auto"
        alt="English flag"
      />
      <Image
        src={espFlag}
        width={isMobile ? 35 : 65}
        height="auto"
        alt="Spanish flag"
      />
    </div>
  );
};

export default LanguagePanel;

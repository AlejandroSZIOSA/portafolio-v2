"use client";
import { CONSTANTS } from "../../../utils/constants";
import { useMedia } from "use-media";

export default function ScreenShotScrollView({ screenshots, variant }) {
  const isMobile = useMedia(CONSTANTS.USE_MEDIA_MAX_WIDTH);

  let content;

  if (variant === "figma") {
    if (isMobile) {
      content = 240;
    } else {
      content = "auto";
    }
  }

  if (variant !== "figma") {
    content = 240;
  }
  //240 widh
  return (
    <div className="bg-[#deb887] border px-1 py-2 overflow-x-auto h-[10-vh] w-screen lg:w-[70vw]">
      <ol className="flex items-center ml-1">
        {screenshots.map((url, index) => (
          <li key={index} className="flex-shrink-0 mx-2">
            <img src={url} width={content} height={100} alt="no card image" />
          </li>
        ))}
      </ol>
    </div>
  );
}

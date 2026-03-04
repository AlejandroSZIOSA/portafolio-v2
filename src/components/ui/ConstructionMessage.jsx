import { useMedia } from "use-media";
import Image from "next/image";
import { CONSTANTS } from "../../utils/constants";
import meditationIcon from "../../../public/icons/self-improvement.svg";

export default function ConstructionMessage() {
  const isMobile = useMedia(CONSTANTS.USE_MEDIA_MAX_WIDTH); //from useMedia library
  return (
    <div className="flex h-10 lg:h-[549px] items-center justify-center">
      <p className="text-center"> - _ _ </p>
      <Image
        src={meditationIcon}
        width={isMobile ? "38" : "90"}
        height="auto"
        alt="In Progress"
      />
      <span> _ _ -</span>
    </div>
  );
}

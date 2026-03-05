"use client";
import { CONSTANTS } from "@/utils/constants";
import { useMedia } from "use-media";
import Image from "next/image";
import Link from "next/link";
import GitHubCodeBtn from "../buttons/GitHubCodeBtn";
import InfoScrollArea from "./InfoScrollArea";
import ToViewAppBtn from "../buttons/ToViewAppBtn";

import UPDATED_ICON from "../../../../public/icons/clarity_update-white.svg";
import FAVORITE_ICON from "../../../../public/icons/favorite-circle.svg";

export default function CvWebProject({ project, label, variationLayout }) {
  const isMobile = useMedia(CONSTANTS.USE_MEDIA_MAX_WIDTH); //from useMedia library
  const {
    id,
    linkToApp,
    gitHubLink,
    updated_at,
    cardImgUrl,
    version,
    title,
    isFavorite,
    description,
  } = project;

  let content;
  switch (variationLayout) {
    case "no-link-to-details":
      content = (
        <>
          <ToViewAppBtn linkToApp={linkToApp}>View App</ToViewAppBtn>
          <span className="flex w-[67px] items-center justify-between">
            <p className="font-bold">{"<"}</p>
            <GitHubCodeBtn gitHubLink={gitHubLink} />
            <p className="font-bold">{">"}</p>
          </span>
        </>
      );
      break;
    case "link-to-details":
      content = (
        <>
          <Link
            className="p-1 bg-blue-600 hover:bg-blue-800 text-sm lg:text-base text-white border-2 border-indigo-950 rounded-md"
            href={`/detailsPage/${id}?extraParam=${encodeURIComponent(
              "frontend+backend+db",
            )}`}
          >
            To Details
          </Link>
        </>
      );
      break;
    default:
      content = null;
  }

  return (
    // TODO:Fix border Children element in mobile view
    <div className="flex flex-col w-[330px] max-w-sm border-2 border-indigo-500 rounded-lg bg-white text-left lg:border-4 lg:h-min">
      <div className="flex py-1 justify-between bg-indigo-500 text-xs text-white rounded-t-lg lg:text-sm lg:rounded-none">
        <div className=" flex ml-3">{label}</div>
        <span className="inline-flex">
          <Image
            src={UPDATED_ICON}
            width={isMobile ? "16" : "20"}
            height="auto"
            alt="clarity update white"
          />
          <div className="mr-3 ml-1">{updated_at}</div>
        </span>
      </div>
      {/* FIX:Problem whit the header cover sticky position when Image container uses relative position and the Image is using fill attribute. */}
      <div className="flex justify-center bg-black">
        <Image
          src={cardImgUrl}
          width={370}
          height={100}
          alt="no card image"
          priority
        />
      </div>
      <div className=" flex justify-center py-1 text-xs bg-[#B4CDFF] lg:text-sm lg:pt-2">
        {version}
      </div>

      <div className="flex justify-center items-center mt-2 mb-1">
        <h3 className="w-2/3 font-bold text-center">{title}</h3>
        {isFavorite && (
          <Image
            src={FAVORITE_ICON}
            width={isMobile ? "25" : "29"}
            height="auto"
            alt="favorite icon"
          />
        )}
      </div>
      <div className="px-2 pb-2 lg:px-4 lg:pb-2">
        <p className="text-gray-700 text-left">{description}</p>
      </div>
      <InfoScrollArea project={project} />
      <div
        className={
          "px-6 py-3 flex items-center" +
          (variationLayout === "no-link-to-details"
            ? " justify-between"
            : " justify-center")
        }
      >
        {content}
      </div>
    </div>
  );
}

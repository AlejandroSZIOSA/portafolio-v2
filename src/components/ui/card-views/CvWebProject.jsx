"use client";
import { CONSTANTS } from "@/utils/constants";
import { useMedia } from "use-media";
import Image from "next/image";
import Link from "next/link";
import GitHubCodeBtn from "../buttons/GitHubCodeBtn";
import InfoScrollArea from "./InfoScrollArea";
import ToViewAppBtn from "../buttons/ToViewAppBtn";

import FIGMA_ICON from "../../../../public/icons/techs/figma.svg";

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
    responsiveUI,
  } = project;

  let content;
  switch (variationLayout) {
    case "no-link-to-details":
      content = (
        <>
          <div className="inline-flex w-[56px] lg:w-[60px] items-center justify-between">
            <GitHubCodeBtn gitHubLink={gitHubLink} />
            <span className="font-bold">{"/>"}</span>
          </div>

          {project.figmaScreenshots && (
            <Link
              /*   className="p-1 bg-blue-600 hover:bg-blue-800 text-sm lg:text-base text-white border-2 border-indigo-950 rounded-md" */
              href={`/detailsPage/${id}?extraParam=${encodeURIComponent(
                "only-figma",
              )}`}
            >
              <Image
                className="transition-transform duration-200 hover:scale-110 hover:opacity-80"
                src={FIGMA_ICON}
                alt="Figma"
                width={isMobile ? 32 : 36}
                height="auto"
              />
            </Link>
          )}

          {isMobile && responsiveUI.includes("Mobile") && (
            <ToViewAppBtn linkToApp={linkToApp}>View App</ToViewAppBtn>
          )}

          {!isMobile && responsiveUI.includes("Desktop") && (
            <ToViewAppBtn linkToApp={linkToApp}>View App</ToViewAppBtn>
          )}
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
    <div className="flex flex-col w-[330px] max-w-sm border-2 border-[#2FA4D7] rounded-lg  bg-[#BBE0EF] text-left lg:border-4 lg:h-min">
      <div className="flex py-1 justify-between bg-[#2FA4D7] text-xs text-white rounded-t-lg lg:text-sm lg:rounded-none">
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
        {cardImgUrl ? (
          <Image
            src={cardImgUrl}
            width={370}
            height={100}
            alt="no card image"
            priority
          />
        ) : (
          <div className="flex justify-center items-center w-[326px] h-[244px] text-white">
            <h3>No Image</h3>
          </div>
        )}
      </div>
      <div className=" flex justify-center py-1 text-xs bg-[#2FA4D7] text-white lg:text-sm lg:pt-1">
        {version}
      </div>

      <div className="flex justify-center items-center mt-2 mb-1">
        <h3 className="w-2/3 font-bold text-center">{title}</h3>
        {isFavorite && (
          <Image
            src={FAVORITE_ICON}
            width={isMobile ? "27" : "30"}
            height="auto"
            alt="favorite icon"
          />
        )}
      </div>
      <div className="px-2 py-1 lg:pt-0 lg:px-4 lg:pb-2">
        <p className="text-gray-700 ml-1">{description}</p>
      </div>
      <InfoScrollArea project={project} />
      <div
        className={`
          px-3 py-3 flex items-center bg-[#2FA4D7] ${
            variationLayout === "no-link-to-details"
              ? "justify-between"
              : "justify-center"
          }
        `}
      >
        {content}
      </div>
    </div>
  );
}

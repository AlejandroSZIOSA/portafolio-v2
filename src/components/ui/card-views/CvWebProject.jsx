"use client";
import React from "react";
import { useMedia } from "use-media";
import Image from "next/image";
import GitHubLinkBtn from "../GitHubLinkBtn";
import { CONSTANTS } from "@/utils/constants";

const TECH_BOXES =
  "inline-block min-w-fit bg-gray-200 rounded-full content-center px-3 py-1 text-xs font-semibold text-gray-700 text-center";

export default function CvWebProject({ project }) {
  const isMobile = useMedia(CONSTANTS.USE_MEDIA_MAX_WIDTH); //from useMedia library

  const {
    title,
    updated_at,
    version,
    description,
    language,
    framework,
    cardImgUrl,
    linkToApp,
    category,
    browser,
    deviceBrowserSettings,
    typeScript,
    css,
    cssLibrary,
    navigation,
    tests,
    wcag,
    mobileUI,
    desktopUI,
    responsiveUI,
    gitHubLink,
    context,
    redux,
    api,
  } = project;

  return (
    <div className="flex flex-col w-[360px] max-w-sm border-2 border-indigo-500 rounded-lg bg-white text-left md:h-min">
      <div className="flex py-1 justify-between bg-indigo-500 text-xs md:text-sm text-white">
        <div className="px-4">{category}</div>
        <span className="inline-flex">
          <img
            src="icons/clarity_update-white.svg"
            width={isMobile ? "16" : "20"}
            height="auto"
            alt="clarity update white"
          />
          <div className="pr-4 pl-2">{updated_at}</div>
        </span>
      </div>
      {/* FIX:Problem whit the header cover sticky position when Image container uses relative position and the Image is using fill attribute. */}
      <div className="flex justify-center bg-black">
        <Image
          src={cardImgUrl}
          width={356}
          height={100}
          alt="no card image"
          priority
        />
      </div>
      <div className=" flex justify-end pr-3 text-xs">Ver: {version}</div>
      <h3 className=" flex justify-center items-baseline mb-2 font-bold">
        {title}
      </h3>
      <div className="px-6 pb-2">
        <p className="text-gray-700">{description}</p>
      </div>
      <div className="bg-red-200 border px-6 pt-2 pb-2 flex space-x-2 overflow-x-auto scrollbar-hide">
        {browser && <span className={TECH_BOXES}>{browser}</span>}
        {deviceBrowserSettings && (
          <span className={TECH_BOXES}>Dev:{deviceBrowserSettings}</span>
        )}

        {framework && <span className={TECH_BOXES}>{framework}</span>}
        {language && <span className={TECH_BOXES}>{language}</span>}
        {typeScript && <span className={TECH_BOXES}>TypeScript</span>}

        {navigation && <span className={TECH_BOXES}>{navigation}</span>}
        {context && <span className={TECH_BOXES}>Context</span>}
        {redux && <span className={TECH_BOXES}>Redux</span>}
        {api && <span className={TECH_BOXES}>API:{api}</span>}
        {tests && <span className={TECH_BOXES}>{tests}</span>}

        {css && <span className={TECH_BOXES}>{css}</span>}
        {cssLibrary && <span className={TECH_BOXES}>{cssLibrary}</span>}
        {responsiveUI && <span className={TECH_BOXES}>Responsive UI</span>}
        {mobileUI && <span className={TECH_BOXES}>Mobile UI</span>}
        {desktopUI && <span className={TECH_BOXES}>Desktop UI</span>}
        {wcag && <span className={TECH_BOXES}>Wcag:{wcag}</span>}
      </div>
      <div className="px-6 py-3 flex justify-between items-center md:py-4">
        <a
          href={linkToApp}
          className="bg-orange-400 hover:bg-orange-600 text-sm md:text-base text-black py-2 px-2 border-2 border-indigo-950 rounded-md "
        >
          View App
        </a>
        <GitHubLinkBtn gitHubLink={gitHubLink} />
      </div>
    </div>
  );
}

"use client";
import React from "react";
import Image from "next/image";
import GitBtn from "../ui/buttons/GitBtn";
import { useMedia } from "use-media";

const TECH_BOXES =
  "inline-block min-w-fit bg-gray-200 rounded-full content-center px-3 py-1 text-xs font-semibold text-gray-700 text-center";

export default function CVWebProject3({ project }) {
  const {
    title,
    updated_at,
    version,
    description,
    language,
    framework,
    imgUrl,
    linkToApp,
    category,
    typeScript,
    css,
    cssLibrary,
    tests,
    wcag,
    mobileUI,
    desktopUI,
    responsiveUI,
    express,
    gitHubLink,
    context,
    frontend,
  } = project;

  const isMobile = useMedia("(max-width: 765px)"); // Adjust to your desired breakpoint for the updated icon

  return (
    <div className="flex flex-col w-[360px] max-w-sm border-2 border-indigo-500 rounded-lg bg-white text-left">
      <div className="flex py-1 justify-between bg-indigo-500 text-xs md:text-sm text-white">
        <div className="px-4">{category}</div>
        <span className="inline-flex">
          <Image src="icons/clarity_update-white.svg" width="15" height="15" />
          <div className="pr-4 pl-2">{updated_at}</div>
        </span>
      </div>
      <div className="flex justify-center bg-black">
        <Image src={imgUrl} width={200} height="auto" alt="no image" priority />
      </div>
      <div className=" flex justify-end pr-3 text-xs">Ver: {version}</div>
      <h3 className=" flex justify-center items-baseline mb-2 font-bold">
        {title}
      </h3>
      <div className="px-6 pb-2">
        <p className="text-gray-700">{description}</p>
      </div>
      <div className="bg-red-200 border px-6 pt-2 pb-2 flex space-x-2 overflow-x-auto scrollbar-hide">
        {frontend && <span className={TECH_BOXES}>Frontend</span>}
        {language && <span className={TECH_BOXES}>{language}</span>}
        {typeScript && <span className={TECH_BOXES}>TypeScript</span>}
        {framework && <span className={TECH_BOXES}>{framework}</span>}
        {css && <span className={TECH_BOXES}>{css}</span>}
        {cssLibrary && <span className={TECH_BOXES}>{cssLibrary}</span>}
        {mobileUI && <span className={TECH_BOXES}>Mobile UI</span>}
        {desktopUI && <span className={TECH_BOXES}>Desktop UI</span>}
        {responsiveUI && <span className={TECH_BOXES}>Responsive UI</span>}
        {context && <span className={TECH_BOXES}>Context</span>}
        {tests && <span className={TECH_BOXES}>Cypress</span>}
      </div>
      <div className="px-6 py-4 flex justify-between items-center">
        <a
          href={linkToApp}
          className="bg-orange-400 hover:bg-orange-600 text-sm md:text-base text-black py-2 px-2 border-2 border-indigo-950 rounded-md "
        >
          View App
        </a>
        <GitBtn />
      </div>
    </div>
  );
}

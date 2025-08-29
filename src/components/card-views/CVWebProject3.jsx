import React from "react";
import Image from "next/image";
import GitBtn from "../ui/buttons/GitBtn";

const TECH_ITEM_BOXES =
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
    mainObjective,
  } = project;

  return (
    <div className="flex flex-col w-[360px] max-w-sm border-2 border-indigo-500 rounded-lg bg-white text-left">
      <div className="flex py-1 justify-between bg-indigo-500 text-xs md:text-sm text-white">
        <div className="px-4">{category}</div>
        <div className="px-4">{updated_at}</div>
      </div>
      <div className="flex justify-center bg-black">
        <Image src={imgUrl} width={200} height="auto" alt="no image" priority />
      </div>
      <div className="px-6 py-4">
        <div className="flex justify-end items-baseline mb-2">
          <h3 className="font-bold text-center pr-24 ">{title}</h3>
          <div className="text-xs"> Ver: {version} </div>
        </div>
        <p className="text-gray-700">{description}</p>
      </div>
      <div className="bg-red-200 border px-6 pt-2 pb-2 flex space-x-2 overflow-x-auto scrollbar-hide">
        <span className={TECH_ITEM_BOXES}>{language}</span>
        <span className={TECH_ITEM_BOXES}>{framework}</span>
        {typeScript && <span className={TECH_ITEM_BOXES}>TypeScript</span>}
        {css && <span className={TECH_ITEM_BOXES}>{css}</span>}
        {cssLibrary && <span className={TECH_ITEM_BOXES}>{cssLibrary}</span>}
        {tests && <span className={TECH_ITEM_BOXES}>{tests}</span>}
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

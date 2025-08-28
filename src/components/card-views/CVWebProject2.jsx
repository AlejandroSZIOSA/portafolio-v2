import React from "react";
import Image from "next/image";
import GitBtn from "../ui/buttons/GitBtn";

const TECH_ITEM_BOXES =
  "inline-block bg-gray-200 rounded-full px-3 py-1 font-semibold text-gray-700";

export default function CVWebProject2({ project }) {
  const {
    title,
    created_at,
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
    gitHubLink,
    mainObjective,
  } = project;

  return (
    <div className="max-w-sm min-w-90 border-4 border-indigo-500 rounded overflow-hidden shadow-lg bg-white">
      <div className="relative h-48">
        <Image
          src={imgUrl}
          layout="fill"
          objectFit="cover"
          alt={title}
          priority
        />
        <span className="absolute top-0 left-0 bg-indigo-500 text-white font-bold rounded-bl-lg px-2 py-1">
          {category}
        </span>
        <span className="absolute bottom-0 right-0 bg-lime-400 text-black font-bold rounded-bl-lg px-2 py-1">
          {created_at}
        </span>
      </div>
      <div className="px-6 py-4">
        <div className="flex justify-end items-baseline mb-2">
          <h3 className="font-bold text-center pr-24 ">{title}</h3>
          <div className="text-xs"> Ver: {version} </div>
        </div>
        <p className="text-gray-700">{description}</p>
      </div>
      {/*   <div className="px-6 pt-4 pb-2 ">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          {language}
        </span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          {framework}
        </span>
      </div> */}

      <div className="bg-red-200 border px-6 pt-2 pb-2 flex space-x-2 overflow-x-auto scrollbar-hide">
        <span className={TECH_ITEM_BOXES}>{language}</span>
        <span className={TECH_ITEM_BOXES}>{framework}</span>

        {typeScript && <span className={TECH_ITEM_BOXES}>TypeScript</span>}

        {css && <span className={TECH_ITEM_BOXES}>{css}</span>}

        {cssLibrary && <span className={TECH_ITEM_BOXES}>{cssLibrary}</span>}

        {tests && <span className={TECH_ITEM_BOXES}>{tests}</span>}

        {wcag && <span className={TECH_ITEM_BOXES}>Wcag-{wcag}</span>}

        {mobileUI && <span className={TECH_ITEM_BOXES}>MobileUI</span>}

        {desktopUI && <span className={TECH_ITEM_BOXES}>DesktopUI</span>}

        {responsiveUI && <span className={TECH_ITEM_BOXES}>ResponsiveUI</span>}
      </div>

      <div className="px-6 py-4 flex justify-between items-center">
        <a
          href={linkToApp}
          className="bg-blue-500 hover:bg-blue-700 text-sm md:text-base text-white py-2 px-4 border-2 border-indigo-950 rounded "
        >
          View App
        </a>
        <GitBtn />
      </div>
    </div>
  );
}

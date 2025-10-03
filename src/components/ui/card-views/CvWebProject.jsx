"use client";
import Image from "next/image";
import GitHubLinkBtn from "../GitHubLinkBtn";
import { CONSTANTS } from "@/utils/constants";
import { useMedia } from "use-media";

const TECH_BOXES_STYLES =
  "inline-block min-w-fit bg-gray-200 rounded-full content-center px-3 py-1 text-xs font-semibold text-gray-700 text-center md:text-sm";

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
    // TODO:Fix border Children element in mobile view
    <div className="flex flex-col w-[360px] max-w-sm border-2 border-indigo-500 rounded-lg bg-white text-left md:border-4 md:h-min">
      <div className="flex py-1 justify-between bg-indigo-500 text-xs text-white rounded-t-lg md:text-sm md:rounded-none">
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
          width={370}
          height={100}
          alt="no card image"
          priority
        />
      </div>
      <div className=" flex justify-end pr-3 text-xs">Ver: {version}</div>
      <h3 className=" flex justify-center items-baseline mb-2 font-bold">
        {title}
      </h3>
      <div className="px-4 pb-2 md:pb-3">
        <p className="text-gray-700">{description}</p>
      </div>
      <div className="bg-red-200 border px-6 py-3 flex space-x-2 overflow-x-auto scrollbar-hide">
        {browser && <span className={TECH_BOXES_STYLES}>{browser}</span>}
        {deviceBrowserSettings && (
          <span className={TECH_BOXES_STYLES}>Dev:{deviceBrowserSettings}</span>
        )}

        {framework && <span className={TECH_BOXES_STYLES}>{framework}</span>}
        {language && <span className={TECH_BOXES_STYLES}>{language}</span>}
        {typeScript && <span className={TECH_BOXES_STYLES}>TypeScript</span>}

        {navigation && <span className={TECH_BOXES_STYLES}>{navigation}</span>}
        {context && <span className={TECH_BOXES_STYLES}>Context</span>}
        {redux && <span className={TECH_BOXES_STYLES}>Redux</span>}
        {api && <span className={TECH_BOXES_STYLES}>API:{api}</span>}
        {tests && <span className={TECH_BOXES_STYLES}>{tests}</span>}

        {css && <span className={TECH_BOXES_STYLES}>{css}</span>}
        {cssLibrary && <span className={TECH_BOXES_STYLES}>{cssLibrary}</span>}
        {responsiveUI && (
          <span className={TECH_BOXES_STYLES}>Responsive UI</span>
        )}
        {mobileUI && <span className={TECH_BOXES_STYLES}>Mobile UI</span>}
        {desktopUI && <span className={TECH_BOXES_STYLES}>Desktop UI</span>}
        {wcag && <span className={TECH_BOXES_STYLES}>Wcag:{wcag}</span>}
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

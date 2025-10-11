"use client";
import Image from "next/image";
import GitHubLinkBtn from "../GitHubLinkBtn";
import { CONSTANTS } from "@/utils/constants";
import { useMedia } from "use-media";

const TECH_BOXES_STYLES =
  "inline-block min-w-fit bg-gray-200 rounded-full content-center px-3 py-1 text-xs font-semibold text-gray-700 text-center";

export default function CvWebProject({ project }) {
  const isMobile = useMedia(CONSTANTS.USE_MEDIA_MAX_WIDTH); //from useMedia library

  return (
    // TODO:Fix border Children element in mobile view
    <div className="flex flex-col w-[360px] max-w-sm border-2 border-indigo-500 rounded-lg bg-white text-left md:border-4 md:h-min">
      <div className="flex py-1 justify-between bg-indigo-500 text-xs text-white rounded-t-lg md:text-sm md:rounded-none">
        <div className="px-4">{project.category}</div>
        <span className="inline-flex">
          <img
            src="icons/clarity_update-white.svg"
            width={isMobile ? "16" : "20"}
            height="auto"
            alt="clarity update white"
          />
          <div className="pr-4 pl-2">{project.updated_at}</div>
        </span>
      </div>
      {/* FIX:Problem whit the header cover sticky position when Image container uses relative position and the Image is using fill attribute. */}
      <div className="flex justify-center bg-black">
        <Image
          src={project.cardImgUrl}
          width={370}
          height={100}
          alt="no card image"
          priority
        />
      </div>
      <div className=" flex justify-end pr-3 pt-1 text-xs md:text-sm md:pr-4 md:pt-2">
        Ver: {project.version}
      </div>
      <h3 className=" flex justify-center items-baseline mb-2 font-bold">
        {project.title}
      </h3>
      <div className="px-4 pb-2 md:pb-3">
        <p className="text-gray-700">{project.description}</p>
      </div>
      <div className="bg-red-200 border px-1 py-3 flex space-x-2 overflow-x-auto scrollbar-hide md:py-2 md:px-2">
        {project.browser[0] && (
          <span className={TECH_BOXES_STYLES}>{project.browser[0]}</span>
        )}
        {project.deviceBrowserSettings && (
          <span className={TECH_BOXES_STYLES}>
            Dev:{project.deviceBrowserSettings}
          </span>
        )}

        {project.framework && (
          <span className={TECH_BOXES_STYLES}>{project.framework}</span>
        )}
        {project.language && (
          <span className={TECH_BOXES_STYLES}>{project.language}</span>
        )}
        {project.typeScript && (
          <span className={TECH_BOXES_STYLES}>TypeScript</span>
        )}

        {project.navigation && (
          <span className={TECH_BOXES_STYLES}>{project.navigation}</span>
        )}
        {project.context && <span className={TECH_BOXES_STYLES}>Context</span>}
        {project.redux && <span className={TECH_BOXES_STYLES}>Redux</span>}
        {project.localStorage && (
          <span className={TECH_BOXES_STYLES}>Local Storage</span>
        )}

        {project.api && (
          <span className={TECH_BOXES_STYLES}>API:{project.api}</span>
        )}
        {project.tests && (
          <span className={TECH_BOXES_STYLES}>{project.tests}</span>
        )}

        {project.css && (
          <span className={TECH_BOXES_STYLES}>{project.css}</span>
        )}
        {project.cssLibrary && (
          <span className={TECH_BOXES_STYLES}>{project.cssLibrary}</span>
        )}

        {project.responsiveUI[0] && (
          <span className={TECH_BOXES_STYLES}>Mobile UI</span>
        )}
        {project.responsiveUI[1] && (
          <span className={TECH_BOXES_STYLES}>Desktop UI</span>
        )}

        {project.wcag && (
          <span className={TECH_BOXES_STYLES}>Wcag:{project.wcag}</span>
        )}
      </div>
      <div className="px-6 py-3 flex justify-between items-center md:py-4">
        <a
          href={project.linkToApp}
          className="bg-orange-400 hover:bg-orange-600 text-sm md:text-base text-black py-2 px-2 border-2 border-indigo-950 rounded-md "
        >
          View App
        </a>
        <GitHubLinkBtn gitHubLink={project.gitHubLink} />
      </div>
    </div>
  );
}

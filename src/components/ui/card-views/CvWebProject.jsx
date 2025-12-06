"use client";
import Image from "next/image";
import GitHubLinkBtn from "../GitHubLinkBtn";
import { CONSTANTS } from "@/utils/constants";
import { useMedia } from "use-media";
import ProjectInfoArea from "./ProjectInfoArea";

export default function CvWebProject({ project, label, variationLayout }) {
  const isMobile = useMedia(CONSTANTS.USE_MEDIA_MAX_WIDTH); //from useMedia library
  return (
    // TODO:Fix border Children element in mobile view
    <div className="flex flex-col w-[360px] max-w-sm border-2 border-indigo-500 rounded-lg bg-white text-left md:border-4 md:h-min">
      <div className="flex py-1 justify-between bg-indigo-500 text-xs text-white rounded-t-lg md:text-sm md:rounded-none">
        <div className="ml-3">{label}</div>
        <span className="inline-flex">
          <img
            src="icons/clarity_update-white.svg"
            width={isMobile ? "16" : "20"}
            height="auto"
            alt="clarity update white"
          />
          <div className="mr-3 ml-1">{project.updated_at}</div>
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
      <div className="px-2 pb-2 md:px-4 md:pb-4">
        <p className="text-gray-700">{project.description}</p>
      </div>
      <ProjectInfoArea project={project} />
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

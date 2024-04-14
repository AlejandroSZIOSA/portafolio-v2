import React from "react";
import Image from "next/image";
import GitBtn from "../ui/buttons/GitBtn";

export default function CVWebProject({ project }) {
  const {
    title,
    description,
    language,
    framework,
    imgUrl,
    linkToApp,
    gitHubLink,
    mainObjective,
  } = project;

  return (
    <div className="flex flex-col w-[350px] h-[445px] border-4 border-indigo-500 rounded-lg bg-[#fff7aa] text-left">
      <div className="flex justify-center bg-black">
        <Image src={imgUrl} width={200} height="auto" alt="no image" />
      </div>
      <h2 className="text-center py-2">
        <strong>{title}</strong>
      </h2>
      <div className="w-[310px] h-15 mx-4 mb-3">
        <h4 className="text-center">{description}</h4>
      </div>
      <div className="flex flex-col gap-1 w-[260px] h-22 text-left ml-16 mt-2">
        <h5>
          <strong>Main Objective:</strong> {mainObjective}
        </h5>
        <h5>
          <strong>Language:</strong> {language}
        </h5>
        <h5>
          <strong>Framework:</strong> {framework}
        </h5>
      </div>
      <div className="flex justify-around my-3">
        <div className="flex w-[68px] h-8 items-center justify-center bg-orange-400 border-2 border-black border-solid rounded-md">
          <a href={linkToApp}>To App</a>
        </div>
        <GitBtn />
      </div>
    </div>
  );
}

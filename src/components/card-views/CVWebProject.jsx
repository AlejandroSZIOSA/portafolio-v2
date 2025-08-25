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
    category,
    gitHubLink,
    mainObjective,
  } = project;

  return (
    <div className="flex flex-col w-[360px] h-[450px] border-4 border-indigo-500 rounded-lg bg-[#fff7aa] text-left">
      <div className="bg-[#7fffd4]">
        <p className="text-center">{category}</p>
      </div>
      <div className="flex justify-center bg-black">
        <Image src={imgUrl} width={200} height="auto" alt="no image" priority />
      </div>
      <h3 className="text-center py-2">
        <strong>{title}</strong>
      </h3>
      <div className="w-[310px] h-15 mx-4 mb-3">
        <p className=" text-[14px] md:text-[20px] text-center">{description}</p>
      </div>
      <div className="flex flex-col gap-1 w-[260px] h-22 text-left ml-16 mt-2">
        <p>
          <strong>Main Objective:</strong> {mainObjective}
        </p>
        <p>
          <strong>Language:</strong> {language}
        </p>
        <p>
          <strong>Framework:</strong> {framework}
        </p>
      </div>
      <div className="flex gap-44 ml-8 my-4">
        <div className="flex w-[68px] h-8 items-center justify-center bg-orange-400 border-2 border-black border-solid rounded-md">
          <a className="text-[14px]" href={linkToApp}>
            To App
          </a>
        </div>
        <GitBtn />
      </div>
    </div>
  );
}

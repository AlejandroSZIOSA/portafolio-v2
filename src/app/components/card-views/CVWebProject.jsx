import React from "react";
import Image from "next/image";

export default function CVWebProject({ project }) {
  const {
    title,
    description,
    language,
    framework,
    imgUrl,
    linkToApp,
    gitHubLink,
  } = project;

  return (
    <div className="flex flex-col w-[350px] h-[410px] border-4 border-indigo-500 rounded-lg bg-[yellow] text-left">
      <div className="flex justify-center bg-black">
        <Image src={imgUrl} width={200} height="auto" alt="no image" />
      </div>
      <h2 className="text-center py-2">
        <strong>{title}</strong>
      </h2>
      <div className="w-[280px] h-16 bg-slate-400 mx-4">
        <h3 className="text-center">{description}</h3>
      </div>
      <div className="flex flex-col gap-1 w-[230px] h-11 text-left ml-16 mt-2">
        <h4>
          <strong>Language:</strong> {language}
        </h4>
        <h4>
          <strong>Framework:</strong> {framework}
        </h4>
      </div>
      <div className="flex justify-around my-3">
        <div className="flex w-[68px] h-8 items-center justify-center bg-orange-400 border-2 border-black border-solid rounded-md">
          <a href={linkToApp}>To App</a>
        </div>
        <h3 className="text-center">{gitHubLink}</h3>
      </div>
    </div>
  );
}

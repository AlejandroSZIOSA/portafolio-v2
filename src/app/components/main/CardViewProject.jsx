import React from "react";
import Image from "next/image";

export default function CardViewProject({ project }) {
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
    <div className="flex flex-col w-[320px] h-[400px] border-4 border-indigo-500 rounded-lg bg-[yellow] text-left">
      <div className="flex justify-center bg-black">
        <Image src={imgUrl} width={200} height="auto" alt="no image" />
      </div>
      <h2 className="text-center py-2">{title}</h2>
      <div>
        <h3>{description}</h3>
        <h4>Language: {language}</h4>
        <h4>Framework: {framework}</h4>
      </div>
      <div className="flex flex-row py-6 justify-around">
        <a href={linkToApp}>To App</a>
        <h3 className="text-center">{gitHubLink}</h3>
      </div>
    </div>
  );
}

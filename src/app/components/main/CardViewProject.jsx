import React from "react";
import Image from "next/image";

export default function CardViewProject({ project }) {
  const { title, description, imgUrl, gitHubLink } = project;

  return (
    <div className="flex flex-col w-[340px] h-[300px] border-4 border-indigo-500 rounded-lg bg-[yellow] text-left">
      <Image src={imgUrl} width={200} height={200} alt="no image" />
      <div>
        <h2 className="text-center">{title}</h2>
        <h3>{description}</h3>
      </div>
      <div>
        <h3 className="text-center">{gitHubLink}</h3>
        <a href="https://next-todolist-redux.vercel.app/">To App</a>
      </div>
    </div>
  );
}

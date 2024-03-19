import React from "react";
import Image from "next/image";

/* TODO: FIX IMAGEN SIZE */
export default function CardViewProject({ project }) {
  const { title, description, imgUrl, gitHubLink } = project;

  return (
    <div className="flex flex-col w-[340] h-[300] border-4 border-indigo-500 rounded-lg bg-[yellow] text-left">
      <h2 className="text-center">{title}</h2>
      <Image src={imgUrl} width={200} height={200} alt="no image" />
      <h3>{description}</h3>
      <h3>{gitHubLink}</h3>
    </div>
  );
}

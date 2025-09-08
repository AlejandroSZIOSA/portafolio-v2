import React from "react";

export default function TechItem({ tech }) {
  const { imgUrl, level } = tech;

  return (
    <div className="flex flex-col items-center justify-items-center">
      <img src={imgUrl} width={40} height={40} alt="Picture" />
      <p className="pt-2">{level}</p>
    </div>
  );
}

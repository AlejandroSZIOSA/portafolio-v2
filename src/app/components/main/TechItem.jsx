import React from "react";
import Image from "next/image";
/* const imgTechTest = "/static/images/techs/html.png"; */

export default function TechItem({ tech }) {
  const { imgUrl, level } = tech;
  return (
    <div className="flex flex-col items-center justify-items-center">
      <Image src={imgUrl} width={40} height={40} alt="Picture" />
      <p className="py-2">{level}</p>
    </div>
  );
}

import React from "react";
import Image from "next/image";

const imgTechTest = "/static/images/tech/deviconcss3.png";

export default function TechSection() {
  return (
    <div className="grid grid-cols-3 gap-4 p-6">
      <div>
        <Image
          src={imgTechTest}
          width={40}
          height={40}
          alt="Picture of the author"
        />
      </div>
      <div>
        <Image
          src={imgTechTest}
          width={40}
          height={40}
          alt="Picture of the author"
        />
      </div>
    </div>
  );
}

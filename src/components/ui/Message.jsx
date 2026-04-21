import React from "react";

export default function Message({ children, variant }) {
  let baseContent;
  switch (variant) {
    case "my-current-focus":
      baseContent =
        "mb-3 bg-[#00CED1] border-black text-black lg:w-fit lg:absolute lg:left-[30%] lg:bottom-[15%]";
      break;
    case "my-hobbies":
      baseContent =
        " bg-[#70A069] border-black text-white lg:w-fit lg:absolute lg:bottom-[53%] lg:left-[15%]";
      break;
    case "my-wish":
      baseContent =
        " bg-black border-[#FF5A01] opacity-75 text-green-400 lg:w-fit lg:absolute lg:top-[5%] lg:right-[3%]";
      break;
    default:
      baseContent = "bg-gray-red-500 text-white";
      break;
  }

  return (
    <div
      className={`inline-flex h-fit w-11/12 border-2 p-1 lg:border-4 mt-2 ${baseContent} text-center font-mono lg:p-5`}
    >
      <p>{children}</p>
    </div>
  );
}

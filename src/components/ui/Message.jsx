import React from "react";

export default function Message({ children, variant }) {
  let baseContent;
  switch (variant) {
    case "my-current-focus":
      baseContent = "mb-3 bg-[#00CED1] border-black text-black lg:hidden";
      break;
    case "my-hobbies":
      baseContent = " bg-[#70A069] border-black text-white lg:hidden";
      break;
    case "my-wish":
      baseContent =
        " bg-black border-[#FF5A01] opacity-75 text-green-400 lg:hidden";
      break;
    case "center-desktop":
      baseContent =
        "hidden lg:flex lg:w-[600px] lg:items-center lg:justify-center lg:absolute lg:top-1/2 lg:left-[38%] lg:-translate-x-1/2 lg:-translate-y-1/2 bg-[#9CB3A5] border-black";
      break;
    default:
      baseContent = "";
      break;
  }

  return (
    <div
      className={`inline-flex h-fit w-11/12 border-2 p-2 lg:border-4 mt-2 ${baseContent} text-center font-mono lg:p-5`}
    >
      <p>{children}</p>
    </div>
  );
}

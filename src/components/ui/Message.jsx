import React from "react";

export default function Message({ children, variant }) {
  let content;
  switch (variant) {
    case "my-current-focus":
      content =
        "mb-3 bg-[#00CED1] border-black text-black lg:w-fit lg:absolute lg:bottom-0 ";
      break;
    case "my-hobbies":
      content = " bg-[#70A069] border-black text-white lg:w-fit";
      break;
    case "my-wish":
      content = " bg-black border-[#FF5A01] opacity-75 text-green-400 lg:w-fit";
      break;
    default:
      content = "bg-gray-red-500 text-white";
      break;
  }

  return (
    <div
      className={`inline-flex w-11/12 border-2 mt-2 ${content} text-center font-mono p-1 ${variant === "my-current-focus" && "lg:absolute lg:bottom-0 lg:left-0"}`}
    >
      <p className="py-1">{children}</p>
    </div>
  );
}

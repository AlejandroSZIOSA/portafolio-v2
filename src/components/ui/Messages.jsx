import React from "react";

export default function Messages({ children, variant }) {
  let content;
  switch (variant) {
    case "my-wish":
      content = "bg-black border-[#FF5A01] text-green-400";
      break;
    case "my-hobbies":
      content = " bg-[#70A069] border-black text-white";
      break;
    case "my-current-focus":
      content = "mb-3 bg-[#00CED1] border-black text-black";
      break;
    default:
      content = "bg-gray-red-500 text-white";
      break;
  }

  return (
    <div
      className={`inline-flex w-11/12 border-2 mt-2 ${content} text-center font-mono p-1 lg:hidden`}
    >
      {/*   <span className="absolute left-3">🎯</span> */}
      <p className="py-1">{children}</p>
    </div>
  );
}

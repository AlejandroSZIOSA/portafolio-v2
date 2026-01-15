import React from "react";

export default function ToViewAppBtn({ children, linkToApp }) {
  return (
    <a
      href={linkToApp}
      className="bg-orange-400 hover:bg-orange-600 text-sm md:text-base text-black py-2 px-2 border-2 border-indigo-950 rounded-md "
    >
      {children}
    </a>
  );
}

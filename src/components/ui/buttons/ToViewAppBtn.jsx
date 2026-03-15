import React from "react";

export default function ToViewAppBtn({ children, linkToApp }) {
  return (
    <a
      href={linkToApp}
      className="p-1 bg-orange-400 hover:bg-orange-600 text-sm text-black  border-2 border-indigo-950 rounded-md lg:text-base"
    >
      {children}
    </a>
  );
}

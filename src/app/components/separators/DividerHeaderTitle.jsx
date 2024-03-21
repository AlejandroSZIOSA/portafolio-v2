import React from "react";

export default function DividerHeaderTitle({ sectionTitle }) {
  return (
    <>
      <h2 className="w-full py-2 text-center font-semibold border-black border-t-4 border-b-4 border-dashed">
        {sectionTitle}
      </h2>
    </>
  );
}

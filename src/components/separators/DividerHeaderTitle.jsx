import React from "react";

export default function DividerHeaderTitle({ sectionTitle }) {
  return (
    <>
      <h2
        /* I am using the id attribute to link the section to the anchor tag */
        id={sectionTitle}
        className="w-full py-2 text-center font-semibold border-black border-t-2 border-b-2 border-dashed"
      >
        {sectionTitle}
      </h2>
    </>
  );
}

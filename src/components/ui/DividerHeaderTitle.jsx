import React from "react";

export default function DividerHeaderTitle({ sectionTitle, sectionId }) {
  return (
    <>
      <h2
        /* I am using the Id attribute to link the section to the anchor tag */
        id={sectionId}
        className="w-full py-2 text-center font-semibold border-black border-t-2 border-b-2 border-dashed"
      >
        {sectionTitle}
      </h2>
    </>
  );
}

"use client";
import { useState } from "react";
import CvWebProject from "./card-views/CvWebProject";
import { useMedia } from "use-media";
import { CONSTANTS } from "@/utils/constants";

export default function Accordion({ projects }) {
  const [openIndex, setOpenIndex] = useState(null);

  const isMobile = useMedia(CONSTANTS.USE_MEDIA_MAX_WIDTH);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  //Fn render Jsx code accord to the current responsive mode
  function render(item, index) {
    if (isMobile) {
      return (
        <div key={index} className="border-b border-black bg-amber-100">
          <button
            onClick={() => toggleAccordion(index)}
            className="flex justify-between items-center w-full py-1 px-4 text-left"
          >
            <div className="ml-28">
              <h3>{item.title}</h3>
            </div>
            <div>{openIndex === index ? "−" : "+"}</div>
          </button>
          <div className="flex justify-center py-1">
            {openIndex === index && <CvWebProject project={item} />}
          </div>
        </div>
      );
    } else {
      return (
        <li className="inline-flex px-3" key={index}>
          <CvWebProject project={item} />
        </li>
      );
    }
  }

  //Showing conditional projects based on the responsive available mode
  return (
    <>
      {isMobile ? (
        <ol className="block">
          {projects
            .filter((item) => item.mobileUI)
            .map((item, index) => render(item, index))}
        </ol>
      ) : (
        <ol className="border px-6 pb-6 md:pb-5 flex space-x-2 overflow-x-auto scrollbar-hide">
          {projects.map((item, index) => render(item, index))}
        </ol>
      )}
    </>
  );
}

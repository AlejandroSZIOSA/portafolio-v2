"use client";
import { useState } from "react";
import CvWebProject from "./card-views/CvWebProject";
import { CONSTANTS } from "@/utils/constants";
import { useMedia } from "use-media";

export default function Accordion({ projects, variationLayout }) {
  const [openIndex, setOpenIndex] = useState(null);
  const isMobile = useMedia(CONSTANTS.USE_MEDIA_MAX_WIDTH);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  //Fn renders Jsx code accords to the current responsive mode
  function render(item, index) {
    if (isMobile) {
      return (
        <div
          key={index}
          className="flow-root border-b border-black bg-gray-300"
        >
          <button
            onClick={() => toggleAccordion(index)}
            className="flex justify-center items-center w-full py-1 px-4 text-left"
          >
            <h3>{item.title}</h3>
            <span className="ml-2 font-extrabold">
              {openIndex === index ? "−" : "+"}
            </span>
          </button>
          <div className="flex justify-center py-1">
            {openIndex === index && (
              <CvWebProject
                project={item}
                label={item.category}
                variationLayout={variationLayout}
              />
            )}
          </div>
        </div>
      );
    } else {
      return (
        <li className="inline-flex px-3" key={index}>
          <CvWebProject
            project={item}
            label={item.category}
            variationLayout={variationLayout}
          />
        </li>
      );
    }
  }

  //Component Shows conditionally, projects based on the type and the current responsive mode
  return (
    <>
      {isMobile ? (
        <ol className="block">
          {projects
            .slice()
            .reverse()
            .map((item, index) => render(item, index))}
        </ol>
      ) : (
        <ol className="border px-6 pb-6 md:pb-5 flex space-x-2 overflow-x-auto scrollbar-hide">
          {projects
            .slice()
            .reverse()
            .map((item, index) => render(item, index))}
        </ol>
      )}
    </>
  );
}

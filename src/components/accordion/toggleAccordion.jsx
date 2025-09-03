"use client";
import { useState } from "react";
import CVWebProject3 from "../card-views/CVWebProject3";

import { useMedia } from "use-media";

export default function Accordion({ projects }) {
  const isMobile = useMedia("(max-width: 765px)");

  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  //Render accord to responsive
  function render(item, index) {
    if (isMobile) {
      return (
        <div key={index} className="border-b border-black bg-amber-100">
          <button
            onClick={() => toggleAccordion(index)}
            className="flex justify-between items-center w-full py-1 px-4 text-left"
          >
            {/* <span className="font-medium">{item.title}</span> */}
            <div>
              <h3 className="ml-32">{item.title}</h3>
            </div>
            <span>{openIndex === index ? "−" : "+"}</span>
          </button>
          <div className="flex justify-center py-1">
            {openIndex === index && <CVWebProject3 project={item} />}
          </div>
        </div>
      );
    } else {
      return (
        <li className="inline-flex px-3" key={index}>
          <CVWebProject3 project={item} />
        </li>
      );
    }
  }

  return (
    <ol className=" block md:flex md:justify-center">
      {projects.map((item, index) => render(item, index))}
    </ol>
  );
}

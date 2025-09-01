"use client";
import { WEB_DATA_PROJECTS } from "/src/utils/data/web-projects";
import { useState } from "react";
import Accordion from "../accordion/toggleAccordion";
import CVWebProject3 from "../card-views/CVWebProject3";

const NAV_BUTTONS = "text-lg w-24 h-9 border-2 bg-[#00D8FF] rounded-md";

export default function ProjectsSection() {
  const [isWebListShowing, setIsWebListShowing] = useState(true);

  function renderProjectLists() {
    if (isWebListShowing) {
      return <Accordion projects={WEB_DATA_PROJECTS} />;
    } else {
      return <h2 className="text-center">Nothing yet.</h2>;
    }
    //IMPORTANT: DO NOT DELETE! Comment out and use the content below, When There are some mobile Projects to show :)
    /* else
      return MOBILE_PROJECTS.map((p) => {
        return <CVMobileProject key={p.id} project={p} />;
      }); */
  }

  return (
    <div className="contents">
      <div className="flex justify-between w-72 py-4">
        <div>
          <button
            className={NAV_BUTTONS}
            onClick={() => setIsWebListShowing(true)}
          >
            Web
          </button>
        </div>
        <div>
          <button
            className={NAV_BUTTONS}
            onClick={() => setIsWebListShowing(false)}
            disabled={false} /* Change this to make Btn funcional */
          >
            Mobile
          </button>
        </div>
      </div>
      <div className="flex flex-col w-full md:flex-row gap-2">
        {renderProjectLists()}
      </div>
    </div>
  );
}

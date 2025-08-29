"use client";
import { WEB_DATA_PROJECTS } from "/src/utils/data/web-projects";
import CVWebProject from "/src/components/card-views/CVWebProject";

import { MOBILE_PROJECTS } from "/src/utils/data/mobile-projects";

import { useState } from "react";
import CVMobileProject from "/src/components/card-views/CVMobileProject";
import CVWebProject2 from "../card-views/CVWebProject2";
import CVWebProject3 from "../card-views/CVWebProject3";

const NAV_BUTTONS = "text-lg w-24 h-9 border-2 bg-[#00D8FF] rounded-md";

export default function ProjectsSection() {
  const [isWebListShowing, setIsWebListShowing] = useState(true);

  function renderProjectLists() {
    if (isWebListShowing) {
      return WEB_DATA_PROJECTS.map((p) => {
        return <CVWebProject3 key={p.id} project={p} />;
      });
    } else {
      return <h2>Nothing yet!</h2>;
    }
    //IMPORTANT: DO NOT DELETE! Comment out and use the content below, When There are some mobile Projects to show :)
    /* else
      return MOBILE_PROJECTS.map((p) => {
        return <CVMobileProject key={p.id} project={p} />;
      }); */
  }

  return (
    <div className="flex flex-col">
      <div className="py-4">
        <nav>
          <ol className="flex flex-row justify-around">
            <li>
              <button
                className={NAV_BUTTONS}
                onClick={() => setIsWebListShowing(true)}
              >
                Web
              </button>
            </li>
            <li>
              <button
                className={NAV_BUTTONS}
                onClick={() => setIsWebListShowing(false)}
                disabled={false} /* Change this to make Btn funcional */
              >
                Mobile
              </button>
            </li>
          </ol>
        </nav>
      </div>
      <div className="flex flex-col md:flex-row gap-4">
        {renderProjectLists()}
      </div>
    </div>
  );
}

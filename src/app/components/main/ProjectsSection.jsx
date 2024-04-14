"use client";
import { WEB_DATA_PROJECTS } from "@/app/utils/data/projects/web";
import CVWebProject from "../card-views/CVWebProject";

import { MOBILE_PROJECTS } from "@/app/utils/data/projects/mobile";

import { useState } from "react";
import CVMobileProject from "../card-views/CVMobileProject";

const NAV_BTN_STYLE = "w-24 h-9 border-2 bg-[#00D8FF] rounded-md";

export default function ProjectsSection() {
  const [isWebListShowing, setIsWebListShowing] = useState(true);

  function renderProjectLists() {
    if (isWebListShowing) {
      return WEB_DATA_PROJECTS.map((p) => {
        return <CVWebProject key={p.id} project={p} />;
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
    <div className="pt-4">
      <div className="flex flex-col gap-8">
        <nav>
          <ol className="flex flex-row justify-around">
            <li>
              <button
                className={NAV_BTN_STYLE}
                onClick={() => setIsWebListShowing(true)}
              >
                Web
              </button>
            </li>
            <li>
              <button
                className={NAV_BTN_STYLE}
                onClick={() => setIsWebListShowing(false)}
              >
                Mobile
              </button>
            </li>
          </ol>
        </nav>
        {renderProjectLists()}
      </div>
    </div>
  );
}

"use client";
import { WEB_DATA_PROJECTS } from "/src/utils/data/web-projects";
import { useState } from "react";
import Accordion from "../accordion/toggleAccordion";
import CVWebProject3 from "../card-views/CVWebProject3";
import Tabs from "../ui/Tabs";

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
      <Tabs />
    </div>
  );
}

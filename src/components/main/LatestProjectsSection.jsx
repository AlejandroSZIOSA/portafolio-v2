import React from "react";
import { WEB_APPS_DATA } from "/src/utils/data/web-projects";
import CvWebProject from "../ui/card-views/CvWebProject";

export default function LatestProjectsSection() {
  const filteredItems = WEB_APPS_DATA.filter((p) => p.isNew === true);

  return (
    <div className="py-6">
      <div className="flex flex-col md:flex-row gap-8">
        {filteredItems.map((p) => {
          return <CvWebProject key={p.id} project={p} />;
        })}
      </div>
    </div>
  );
}

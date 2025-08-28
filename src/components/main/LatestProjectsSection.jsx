import React from "react";
import { WEB_DATA_PROJECTS } from "/src/utils/data/web-projects";
/* import CardViewProject from "../card-views/CVWebProject"; */
import CardViewProject2 from "../card-views/CVWebProject2";
export default function LatestProjectsSection() {
  const filteredItems = WEB_DATA_PROJECTS.filter((p) => p.isNew === true);

  return (
    <div className="py-9">
      <div className="flex flex-col md:flex-row gap-8">
        {filteredItems.map((p) => {
          return <CardViewProject2 key={p.id} project={p} />;
        })}
      </div>
    </div>
  );
}

import React from "react";
import { WEB_PROJECTS } from "@/app/utils/data/projects";
import CardViewProject from "./CardViewProject";

export default function LatestProjectsSection() {
  const filteredItems = WEB_PROJECTS.filter((p) => p.isOld === false);

  return (
    <div className="py-9">
      <div className="flex flex-col gap-8">
        {filteredItems.map((p) => {
          return <CardViewProject key={p.id} project={p} />;
        })}
      </div>
    </div>
  );
}

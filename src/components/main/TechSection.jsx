import React from "react";
import TechItem from "./TechItem";
import { TECHS } from "/src/utils/data/techs";

export default function TechSection() {
  return (
    <div className="grid grid-cols-5 w-full py-5 gap-5 md:grid-cols-6 md:py-9">
      {TECHS.map((t) => {
        return <TechItem key={t.id} tech={t} />;
      })}
    </div>
  );
}

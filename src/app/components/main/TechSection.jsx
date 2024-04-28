import React from "react";
import TechItem from "./TechItem";
import { TECHS } from "@/app/utils/data/techs";

export default function TechSection() {
  return (
    <div className="grid grid-cols-5 md:grid-cols-7 w-80 md:w-full gap-5 md:gap-0 py-5 md:py-9">
      {TECHS.map((t) => {
        return <TechItem key={t.id} tech={t} />;
      })}
    </div>
  );
}

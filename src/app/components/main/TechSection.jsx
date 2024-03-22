import React from "react";
import TechItem from "./TechItem";
import { TECHS } from "@/app/utils/data/techs";

export default function TechSection() {
  return (
    <div className="grid grid-cols-5 w-80 gap-5 py-5">
      {TECHS.map((t) => {
        return <TechItem tech={t} />;
      })}
    </div>
  );
}

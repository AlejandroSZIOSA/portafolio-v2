import TechItem from "./TechItem";
import { TECHS } from "@/utils/data";

export default function TechSection() {
  return (
    <div
      id="techs_container"
      className="grid grid-cols-5 w-full py-5 gap-5 lg:grid-cols-8 lg:py-9"
    >
      {TECHS.map((t) => {
        return <TechItem key={t.id} tech={t} />;
      })}
    </div>
  );
}

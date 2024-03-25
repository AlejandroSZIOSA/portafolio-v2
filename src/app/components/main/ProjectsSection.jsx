import { WEB_DATA_PROJECTS } from "@/app/utils/data/projects/web";
import CardViewProject from "../card-views/CardViewProject";

export default function ProjectsSection() {
  return (
    <div className="pt-9">
      <div className="flex flex-col gap-8">
        {WEB_DATA_PROJECTS.map((p) => {
          return <CardViewProject key={p.id} project={p} />;
        })}
      </div>
    </div>
  );
}

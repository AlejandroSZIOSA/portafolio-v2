import { PROJECTS } from "@/app/utils/data/projects";
import CardViewProject from "./CardViewProject";

export default function ProjectsSection() {
  return (
    <div className="py-14">
      <h2 className="text-center p-3">Projects</h2>
      <div className="flex flex-col gap-4">
        {PROJECTS.map((p) => {
          return <CardViewProject key={p.id} project={p} />;
        })}
      </div>
    </div>
  );
}

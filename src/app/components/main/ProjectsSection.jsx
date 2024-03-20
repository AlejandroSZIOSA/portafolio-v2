import { WEB_PROJECTS } from "@/app/utils/data/projects";
import CardViewProject from "./CardViewProject";

export default function ProjectsSection() {
  return (
    <div className="pt-9">
      {/* <div className="pb-6">
        <h2 className="p-2 text-center font-semibold border-black border-t-4 border-b-4 border-dashed">
          Projects
        </h2>
      </div> */}
      <div className="flex flex-col gap-8">
        {WEB_PROJECTS.map((p) => {
          return <CardViewProject key={p.id} project={p} />;
        })}
      </div>
    </div>
  );
}

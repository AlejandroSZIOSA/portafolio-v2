import { WEB_DATA } from "/src/utils/data/web-projects";
import CvWebProject from "../ui/card-views/CvWebProject";

export default function LatestProjectsSection() {
  const filteredItems = WEB_DATA.filter((p) => p.isNew === true);

  return (
    <div className="flex flex-col py-6 gap-8 md:flex-row ">
      {filteredItems.map((p) => {
        return <CvWebProject key={p.id} project={p} />;
      })}
    </div>
  );
}

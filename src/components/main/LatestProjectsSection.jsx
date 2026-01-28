import { WEB_DATA } from "/src/utils/data/web-projects";
import { WEB_APIS_DATA } from "/src/utils/data/web-apis-projects";
import { WEB_BACKEND_DB_DATA } from "@/utils/data/web-backend-db";

import CvWebProject from "../ui/card-views/CvWebProject";

export default function LatestProjectsSection() {
  const filteredWebDataItems = WEB_DATA.filter((p) => p.isNew === true);
  const filteredWebApiDataItems = WEB_APIS_DATA.filter((p) => p.isNew === true);
  const filteredWebBackendDbItems = WEB_BACKEND_DB_DATA.filter(
    (p) => p.isNew === true,
  );

  const filteredItems = [
    ...filteredWebDataItems,
    ...filteredWebApiDataItems,
    ...filteredWebBackendDbItems,
  ];
  return (
    <div className="flex flex-col py-6 gap-8 md:flex-row lg:items-center lg:h-full lg:px-14 lg:border-r-2 lg:border-black">
      {filteredItems.map((p) => {
        return (
          <CvWebProject
            key={p.id}
            project={p}
            label={p.category}
            variationLayout="no-link-to-details"
          />
        );
      })}
    </div>
  );
}

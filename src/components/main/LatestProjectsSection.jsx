import { WEB_DATA } from "@/utils/data/web-projects";
import { WEB_APIS_DATA } from "@/utils/data/web-apis-projects";
import { WEB_BACKEND_DB_DATA } from "@/utils/data/web-backend-db";
import { WEB_PRIVATE_APIS } from "@/utils/data/web-privateApis";

import CvWebProject from "../ui/card-views/CvWebProject";

export default function LatestProjectsSection() {
  const filteredWebDataItems = WEB_DATA.filter((p) => p.isNew === true);
  const filteredWebApiDataItems = WEB_APIS_DATA.filter((p) => p.isNew === true);
  const filteredWebBackendDbItems = WEB_BACKEND_DB_DATA.filter(
    (p) => p.isNew === true,
  );
  const filteredWebPrivateApis = WEB_PRIVATE_APIS.filter(
    (p) => p.isNew === true,
  );

  const filteredItems = [
    ...filteredWebDataItems,
    ...filteredWebApiDataItems,
    ...filteredWebBackendDbItems,
    ...filteredWebPrivateApis,
  ];
  return (
    <div className="flex flex-col py-6 gap-8 items-center md:flex-row lg:items-baseline lg:px-14 lg:mt-4 ">
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

//importing multiple constants from index.js in data folder and exports
import * as DATA_PROJECTS from "@/utils/data";

//in this case doesn't need breaks because returns in each case
export function getDataProjects(dataIdentifier) {
  switch (dataIdentifier) {
    case "allProjects":
      return [
        ...DATA_PROJECTS.WEB_DATA,
        ...DATA_PROJECTS.WEB_APIS_DATA,
        ...DATA_PROJECTS.WEB_BACKEND_DB_DATA,
      ];
    case "allWebProjects":
      return DATA_PROJECTS.WEB_DATA;
    case "allWebApis":
      return DATA_PROJECTS.WEB_APIS_DATA;
    case "allWebBackendDbProjects":
      return DATA_PROJECTS.WEB_BACKEND_DB_DATA;
    default:
      return [];
  }
}

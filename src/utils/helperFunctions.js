//importing multiple constants from index.js in data folder and exports
import * as DATA_PROJECTS from "@/utils/data";

export function getDataProjects(dataIdentifier) {
  switch (dataIdentifier) {
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

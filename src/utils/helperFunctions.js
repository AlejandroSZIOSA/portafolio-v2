//importing multiple constants from index.js in data folder and exports
import * as DATA_PROJECTS from "@/utils/data/index";

export function getDataProjects(dataIdentifier) {
  switch (dataIdentifier) {
    case "mobileUIwebApps":
      return DATA_PROJECTS.WEB_DATA.filter((item) => item.responsiveUI[0]);
    case "mobileUIwebApis":
      return DATA_PROJECTS.WEB_APIS_DATA.filter((item) => item.responsiveUI[0]);
    case "desktopUIwebApps":
      return DATA_PROJECTS.WEB_DATA.filter((item) => item.responsiveUI[1]);
    case "desktopUIwebApis":
      return DATA_PROJECTS.WEB_APIS_DATA.filter((item) => item.responsiveUI[1]);
    case "webBackendDbProjects": // exception for responsive UI
      return DATA_PROJECTS.WEB_BACKEND_DB_DATA;
    default:
      return [];
  }
}

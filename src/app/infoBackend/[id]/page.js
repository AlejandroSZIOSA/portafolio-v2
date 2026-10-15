import React from "react";

import { getDataProjects } from "@/utils/helperFunctions";

const onlyBackendInfoPage = ({ params }) => {
  const { id } = React.use(params); //change the name of an variable after destructuring :)

  /* const project = getDataProjects("allWebBackendDbProjects").find(
    (item) => item.id.toString() === id,
  ); */

  console.log(id);

  let content = "";

  return (
    <div>
      <h1>Backend Info</h1>
      {id}
    </div>
  );
};

export default onlyBackendInfoPage;

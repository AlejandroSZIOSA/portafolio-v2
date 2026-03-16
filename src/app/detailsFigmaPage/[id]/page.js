import React from "react";

export default function FigmaDetailsPage({ params, searchParams }) {
  const { id: projectId } = React.use(params);
  const extraParamValue = React.use(searchParams);
  const variant = extraParamValue.extraParam;

  return <div></div>;
}

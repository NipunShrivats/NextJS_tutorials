import React from "react";

const CatchAllOptional = async ({
  params,
}: {
  params: Promise<{ slug?: string[] }>;
}) => {
  const { slug } = await params;
  console.log("slug", slug);

  return <div>Catch All Optional {slug}</div>;
};

export default CatchAllOptional;

// If in catch all routes we do not make arent page then we must have to pass params or else it will give 404

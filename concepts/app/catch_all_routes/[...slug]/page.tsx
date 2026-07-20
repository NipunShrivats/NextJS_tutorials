import React from "react";

const ProductDetailsAll = async ({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}) => {
  const { slug } = await params;
  console.log("slug", slug);

  return <div>ProductDetailsAll {slug}</div>;
};

export default ProductDetailsAll;

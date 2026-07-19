import React from "react";

const ProductDetails = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const { slug } = await params;
  console.log("slug", slug);

  return <div>ProductDetails {slug}</div>;
};

export default ProductDetails;

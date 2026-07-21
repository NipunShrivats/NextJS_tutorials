import { Metadata } from "next";
import React from "react";

const dummyData = {
  "1": {
    title: "One",
  },
  "2": {
    title: "Two",
  },
  "3": {
    title: "Three",
  },
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const data = dummyData[slug as keyof typeof dummyData];
  console.log("data", data);
  return {
    title: data.title,
    description: data.title,
  };
}

const DynamicMetadataExample = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const { slug } = await params;
  const data = dummyData[slug as keyof typeof dummyData];
  return <div>{data.title} METADATA</div>;
};

export default DynamicMetadataExample;

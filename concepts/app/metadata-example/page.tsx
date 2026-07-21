import { Metadata } from "next";
import Link from "next/link";
import React from "react";

export const metadata: Metadata = {
  title: "Metadata examples",
  description: "This is my example of writing static metadata",
};

const MetaData = () => {
  const example = [
    {
      id: "1",
      title: "One",
    },
    {
      id: "2",
      title: "Two",
    },
    {
      id: "3",
      title: "Three",
    },
  ];
  return (
    <div>
      <h1>Metadata Examples</h1>
      <ul>
        {example.map((item) => (
          <li key={item.id}>
            <Link href={`/metadata-example/${item.id}`}>{item.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MetaData;

import React from "react";

async function getData() {
  await new Promise((resolve) => setTimeout(resolve, 2000));

  return {
    stats: {
      user: 1000,
    },
  };
}

const LoadingExample = async () => {
  const data = await getData();
  return (
    <div>
      <h1>Loading Example</h1>
      <p className="font-bold text-sm">{data.stats.user}</p>
    </div>
  );
};

export default LoadingExample;

import React from "react";
async function getProducts() {
  const shouldError = Math.random() > 0.5;
  if (shouldError) {
    throw new Error("Failed to fetch products");
  }
  return [
    {
      id: 1,
      name: "one",
    },
    {
      id: 2,
      name: "Two",
    },
    {
      id: 3,
      name: "Three",
    },
  ];
}

const ErrorExample = async () => {
  const products = await getProducts();
  return (
    <div className="p-4">
      <h1>Products List</h1>
      <div className="grid gap-4">
        {products.map((product) => {
          return <p key={product.id}>{product.name}</p>;
        })}
      </div>
    </div>
  );
};

export default ErrorExample;

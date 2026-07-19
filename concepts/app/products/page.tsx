import Link from "next/link";
import React from "react";

const Products = () => {
  const product = [
    { id: "1", name: "Mobile", price: 500 },
    { id: "2", name: "Bike", price: 1500 },
    { id: "3", name: "Car", price: 2500 },
    { id: "4", name: "Truck", price: 3500 },
  ];
  return (
    <div className="text-2xl font-bold mb-4">
      <div className="grid gap-4">
        {product.map((product) => {
          return (
            <div key={product.id}>
              <h2>{product.name}</h2>
              <h2>{product.price}</h2>
              <Link href={`/products/${product.id}`}>View Details</Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Products;

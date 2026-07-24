import React from "react";

// default - fetch() caches responses automatically
// cache-> reload, no-store, force-cache

interface products {
  id: number;
  title: string;
  price: number;
  category: string;
}
interface productResponse {
  products: products[];
  total: number;
}

async function getProducts(): Promise<productResponse> {
  const response = await fetch("https://dummyjson.com/products", {
    // cache: "no-store", //never caches ur response, always fetches fresh
    // cache: "force-cache",
    cache: "reload",
  });
  if (!response.ok) {
    throw new Error("Failed to fetch products");
  }
  return response.json();
}
const ServerSideFetch = async () => {
  const products = await getProducts();
  console.log(products);
  return (
    <div>
      <h1>ServerSideFetch</h1>
      <h3>{products?.total} no. of products</h3>
    </div>
  );
};

export default ServerSideFetch;

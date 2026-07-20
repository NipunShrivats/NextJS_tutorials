"use client";
import { useRouter } from "next/navigation";
import React from "react";

const NotFound = () => {
  const router = useRouter();
  const goHome = () => {
    router.push("/");
  };
  return (
    <div>
      <h1> PAGE NOT FOUND</h1>
      <button
        onClick={goHome}
        className="bg-black p-5 text-white cursor-pointer"
      >
        GO TO HOME
      </button>
    </div>
  );
};

export default NotFound;

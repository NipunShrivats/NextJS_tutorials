"use client";
import React, { useEffect } from "react";

const ErrorFallback = ({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) => {
  useEffect(() => {}, [error]);
  return (
    <div className="text-red-500">{error?.message || "An error occured"}</div>
  );
};

export default ErrorFallback;

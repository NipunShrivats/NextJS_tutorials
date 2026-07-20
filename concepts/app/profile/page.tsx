"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React from "react";

const Profile = () => {
  const router = useRouter();
  const pathName = usePathname();
  const searchParams = useSearchParams();
  console.log("router", router);
  console.log("pathName", pathName);
  console.log("searchParams", searchParams);
  const handleNavigate = () => {
    router.push("/");
  };
  return (
    <div>
      <h1>Profile componnet - client</h1>
      <button
        onClick={handleNavigate}
        style={{
          border: "2px solid red",
          cursor: "pointer",
        }}
      >
        Navigate to home page
      </button>
    </div>
  );
};

export default Profile;

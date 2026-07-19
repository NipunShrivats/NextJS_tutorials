import Link from "next/link";
import React from "react";

const Dashboardlayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <div>Dashboard</div>
      <ul>
        <li>
          <Link href={"/dashboard"}>Dashboard Home</Link>
          <Link href={"/dashboard/analytics"}>Dashboard Analytics</Link>
        </li>
      </ul>
      <div className="flex-1 p-5">{children}</div>
    </div>
  );
};

export default Dashboardlayout;

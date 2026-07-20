import Link from "next/link";
import React from "react";

function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      Marketing Layout
      <header>
        <nav>
          <Link href={"/"}>Home</Link>
          <Link href={"/about"}>About</Link>
          <Link href={"/contact"}>Contact</Link>
        </nav>
      </header>
      {children}
    </div>
  );
}
export default RootLayout;

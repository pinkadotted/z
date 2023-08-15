import { UserButton } from "@clerk/nextjs";
import Image from "next/image";
import React from "react";

const Header = () => {
  return (
    <div className="flex justify-between px-5 py-4 items-center sticky top-0 h-20 bg-white bg-opacity-60 backdrop-blur-sm">
      <Image src="/twitter.png" alt="logo" width={60} height={60} />

      <h1>Home</h1>

      <UserButton afterSignOutUrl="/" />
    </div>
  );
};

export default Header;

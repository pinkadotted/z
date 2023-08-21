"use client";

import { UserButton } from "@clerk/nextjs";
import Image from "next/image";
import React from "react";
import SearchBar from "./SearchBar";
import ProfileHeader from "./Profile/ProfileHeader";

const Header = ({ route }: any) => {
  return (
    <div className="flex w-full justify-between px-5 py-4 items-center sticky top-0 h-20 bg-white bg-opacity-60 backdrop-blur-sm z-10">
      {route === "home" && <h1 className="font-bold text-2xl">Home</h1>}
      {route === "explore" && <SearchBar placeholder="explore" />}
      {route === "profile" && <ProfileHeader />}
      {route === "activities" && <h1 className="font-bold text-2xl">Activities</h1>}
      <div className="flex">
        <UserButton afterSignOutUrl="/" />
      </div>
    </div>
  );
};

export default Header;

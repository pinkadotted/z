'use client'
import ExploreContent from "@/_components/ExploreContent";
import Header from "@/_components/Header";
import TweetCard from "@/_components/TweetCard";
import React from "react";

const page = () => {
  return (
    <div className="flex flex-col h-screen justify-between items-center">
      <Header route="explore" />
      <ExploreContent />
      <br/>
    </div>
  );
};

export default page;

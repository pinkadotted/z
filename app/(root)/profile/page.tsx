"use client";

import Header from "@/_components/Header";
import ProfileSection from "@/_components/Profile/ProfileSection";
import TweetCard from "@/_components/TweetCard";
import { getAllPosts, getMyPosts } from "@/lib/actions/posts.action";
import { PostObj } from "@/types/type";
import React, { useEffect, useState } from "react";

const page = () => {
  const [tweets, setTweets] = useState<PostObj[] | undefined>();

  getAllPosts()

  const fetchMyPosts = async () => {
    try {
      const myPosts = await getMyPosts("n2yxmwmzkvk08oy"); // returns postobj
      console.log("my posts: ", myPosts);
      setTweets(myPosts);
    } catch (error) {
      console.error("Error fetching my posts:", error);
    }
  };

  useEffect(() => {
    fetchMyPosts();
  }, []);

  return (
    <div className="flex flex-col">
      <Header route="profile" />
      <ProfileSection />

      {tweets?.map((tweet) => (
        <TweetCard postobj={tweet} />
      ))}

    </div>
  );
};

export default page;

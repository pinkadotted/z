"use client";
//app/page.tsx
import { UserButton, currentUser } from "@clerk/nextjs";
import RootLayout from "./layout";
import LeftMenu from "@/_components/LeftMenu";
import CreateTweetCard from "@/_components/CreateTweetCard";
import TweetCard from "@/_components/TweetCard";
import Header from "@/_components/Header";
import {
  getAllUsers,
  getMe,
  printCurrentUser,
} from "@/lib/actions/users.action";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { getCurrentUser } from "@/store/currentUserSlice";

export default function Home() {
  console.log("Home is rendered");
  const dispatch = useAppDispatch();

  // we fetch the current user based on the username retrieved from Clerk, and then update the global store
  useEffect(() => {
    const fetchCurrentUser = async () => {
      try {
        const me = await getMe(); // Wait for the promise to resolve
        dispatch(getCurrentUser(me));
      } catch (error) {
        console.error("Error fetching current user:", error);
      }
    };
    fetchCurrentUser();
  }, [dispatch]);

  const currUserFromStore = useAppSelector((state) => state.currentUser);

  return (
    <div className="flex flex-col">
      <Header route="home" />
      <CreateTweetCard />
      <div className="divide-y divide-blue-200">
        <TweetCard hasMedia={false} />
        <TweetCard hasMedia={false} />
        <TweetCard hasMedia={true} />
        <TweetCard hasMedia={false} />
        <TweetCard hasMedia={true} />
      </div>
    </div>
  );
}

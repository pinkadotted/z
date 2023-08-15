"use-client";
//app/page.tsx
import { UserButton } from "@clerk/nextjs";
import RootLayout from "./layout";
import LeftMenu from "@/_components/LeftMenu";
import CreateTweetCard from "@/_components/CreateTweetCard";
import TweetCard from "@/_components/TweetCard";

export default function Home() {
  return (
    <div className="flex flex-col">
      <CreateTweetCard />
      <TweetCard/>
    </div>
  );
}

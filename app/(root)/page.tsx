"use-client";
//app/page.tsx
import { UserButton } from "@clerk/nextjs";
import RootLayout from "./layout";
import LeftMenu from "@/_components/LeftMenu";
import CreateTweetCard from "@/_components/CreateTweetCard";
import TweetCard from "@/_components/TweetCard";
import Header from "@/_components/Header";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Header route='home'/>
      <CreateTweetCard />
      <div className="divide-y divide-blue-200">
        <TweetCard 
        hasMedia={false} 
        />      
        <TweetCard 
        hasMedia={false} 
        />
        <TweetCard 
        hasMedia={true} 
        />
        <TweetCard 
        hasMedia={false} 
        />
        <TweetCard 
        hasMedia={true} 
        />
    </div>
    </div>
  );
}

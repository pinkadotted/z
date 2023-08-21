"use client";
//app/page.tsx
import { UserButton, currentUser } from "@clerk/nextjs";
import RootLayout from "./layout";
import LeftMenu from "@/_components/LeftMenu";
import CreateTweetCard from "@/_components/CreateTweetCard";
import TweetCard from "@/_components/TweetCard";
import Header from "@/_components/Header";
import { getAllUsers, printCurrentUser } from "@/lib/actions/users.action";
import { useEffect } from "react";

export default function Home() {

  console.log('Home is rendered')

  useEffect( () => {
      const getUsers = async () => {
        const allUsers = await getAllUsers()
        const currentUser = await printCurrentUser()
        console.log('all users: ', allUsers)
        console.log('current user: ', currentUser)
      }
      getUsers()
    }, [])
    

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

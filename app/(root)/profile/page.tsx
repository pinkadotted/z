'use client'

import Header from '@/_components/Header';
import ProfileSection from '@/_components/Profile/ProfileSection';
import TweetCard from '@/_components/TweetCard';
import React from 'react'

const page = () => {
  return (
    <div className="flex flex-col">
      <Header route="profile" />
      <ProfileSection />
      <TweetCard hasMedia={false}/>
      <TweetCard hasMedia={false}/>
      <TweetCard hasMedia={false}/>
      <TweetCard hasMedia={false}/>
      <TweetCard hasMedia={false}/>
    </div>
  );
};

export default page
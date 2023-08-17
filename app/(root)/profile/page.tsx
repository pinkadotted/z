import Header from '@/_components/Header';
import ProfileSection from '@/_components/Profile/ProfileSection';
import React from 'react'

const page = () => {
  return (
    <div className="flex flex-col">
      <Header route="profile" />
      <ProfileSection />
    </div>
  );
};

export default page
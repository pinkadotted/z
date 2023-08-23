"use client";

import { useAppSelector } from "@/store/hooks";
import { ArrowBackIcon } from "@chakra-ui/icons";
import { IconButton } from "@chakra-ui/react";
import React from "react";

const ProfileHeader = () => {

// Store subscription
const currentUser = useAppSelector((state) => state.currentUser);
console.log('currUser: ', currentUser)

  return (
    <div className="flex w-full px-8">
      <>
        <IconButton
          onClick={() => console.log("clicked back button!")}
          aria-label="Search database"
          icon={<ArrowBackIcon />}
          size="lg"
          isRound={true}
        />{" "}
        <div className="flex flex-col">
          {/* <div> */}
          <h1 className="font-bold">{currentUser.displayName}</h1>
          <p>{currentUser.noPosts} posts</p>
          {/* </div> */}
        </div>
      </>
    </div>
  );
};

export default ProfileHeader;

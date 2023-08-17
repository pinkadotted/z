"use client";

import { ArrowBackIcon } from "@chakra-ui/icons";
import { IconButton } from "@chakra-ui/react";
import React from "react";

const ProfileHeader = () => {
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
          <h1 className="font-bold">CCL ❤️ EVERLAND</h1>
          <p>20.7K posts</p>
          {/* </div> */}
        </div>
      </>
    </div>
  );
};

export default ProfileHeader;

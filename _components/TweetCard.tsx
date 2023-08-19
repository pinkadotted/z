"use client";

import React, { useState } from "react";
import { IconButton, Avatar } from "@chakra-ui/react";
import { IconContext } from "react-icons";
import { PiRepeatBold } from "react-icons/pi";
import { FaRegComment, FaRegHeart } from "react-icons/fa";
import ProfileSummaryCard from "./Cards/ProfileSummaryCard";

const TweetCard = ({ hasMedia }: { hasMedia: boolean }) => {
  const [isHovering, setIsHovering] = useState(false);


  let hoverTimeout:any;

  const handleMouseEnter = () => {
    clearTimeout(hoverTimeout);
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    hoverTimeout = setTimeout(() => {
      setIsHovering(false);
    }, 2000); // Set the delay to 2000 milliseconds (2 seconds)
  };

  return (
    <div className="flex px-6 py-2 pt-4">
      <div className="flex flex-col w-[100%] justify-between">
        <div>
        <div className="flex items-center relative "> {/* Add relative positioning */}
            <Avatar
              name="Andrew Alfred"
              src="/sun-profile.jpg"
              size="lg"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            />
            {isHovering && (
              <div className="absolute top-full left-0 z-10"> {/* Absolute positioning */}
                <ProfileSummaryCard />
              </div>
            )}
            <div className="flex flex-col justify-center p-4">
              <strong>Andrew Alfred</strong>
              <span className="text-slate-500">@screamingsun</span>
            </div>
          </div>
          <p className="flex p-4">
            Hello this is Andrew Alfred the screaming sun and it's my first time
            using Z. Hope to make new friends and share new memories with
            everyone. Cheers. x
          </p>
        </div>
        <div className="flex justify-around align-self-end">
          <IconButton
            onClick={() => console.log("clicked comment button!")}
            aria-label="Comment"
            icon={
              <IconContext.Provider value={{ size: "20" }}>
                <FaRegComment />
              </IconContext.Provider>
            }
            size="lg"
            isRound={true}
            _hover={{
              color: "blue.500",
            }}
            variant={"outline"}
            border={"none"}
          />
          <IconButton
            onClick={() => console.log("clicked retweet button!")}
            aria-label="Retweet"
            icon={
              <IconContext.Provider value={{ size: "20" }}>
                <PiRepeatBold />
              </IconContext.Provider>
            }
            size="lg"
            isRound={true}
            _hover={{
              color: "green.500",
            }}
            variant={"outline"}
            border={"none"}
          />
          <IconButton
            onClick={() => console.log("clicked like button!")}
            aria-label="Like"
            icon={
              <IconContext.Provider value={{ size: "20" }}>
                <div>
                  <FaRegHeart />
                </div>
              </IconContext.Provider>
            }
            size="lg"
            isRound={true}
            _hover={{
              color: "red.500",
            }}
            variant={"outline"}
            border={"none"}
          />
        </div>
      </div>
      {hasMedia && (
        <div className="border-2 border-red-300 w-[2400px] m-2 grid grid-cols-2 aspect-[4/3]">
          <div className="w-full h-full"></div>
          <div className="w-full h-full"></div>
          <div className="w-full h-full"></div>
          <div className="w-full h-full"></div>
        </div>
      )}
    </div>
  );
};

export default TweetCard;

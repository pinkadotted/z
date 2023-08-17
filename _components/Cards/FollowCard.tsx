"use client";
import { Heading, Avatar, Text } from "@chakra-ui/react";
import React from "react";
import { IconContext } from "react-icons";
import { FaUser } from "react-icons/fa";

const FollowCard = () => {
  return (
    <div className="flex px-6 py-2 pt-4 ">
      <div className="flex">
        <div className="flex items-center pr-8">
          <IconContext.Provider value={{ size: "40", color:'#aedbfc'}}>
            <FaUser />
          </IconContext.Provider>
        </div>
        <div className="flex min-w-fit items-center">
        <Avatar
            name="Andrew Alfred"
            src="/sun-profile.jpg"
            size="lg"
            />
        </div>
        <div className="flex flex-col justify-center p-4">
          <strong>Andrew Alfred</strong>
          <span className="text-slate-500">@screamingsun</span>
        </div>
      </div>
      <div className="flex min-w-[28%] items-center pl-4">
        <Text fontSize="24" >is now following you! 🎉</Text>
      </div>
    </div>
  );
};

export default FollowCard;

"use client";
import { Avatar, Text } from "@chakra-ui/react";
import React from "react";
import { IconContext } from "react-icons";
import { FaHeart, FaUser } from "react-icons/fa";
import { PiRepeatBold } from "react-icons/pi";

const LikeCard = ( {text}:any ) => {
  return (
    <div className="flex px-6 py-2 pt-4 ">
      <div className="flex">
        <div className="flex items-center pr-8">
        <IconContext.Provider value={{ size: "40", color: '#ff7ca8'}}>
                <div>
                  <FaHeart />
                </div>
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
        <Text fontSize="24" >liked your tweet!</Text>
      </div>
        <p className="flex max-w-md ml-10 items-center text-gray-500">
            {text}
        </p>
    </div>
  );
};

export default LikeCard;
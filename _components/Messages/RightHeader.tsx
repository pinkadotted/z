"use client";
import { Avatar, IconButton } from "@chakra-ui/react";
import React from "react";
import { IconContext } from "react-icons";
import { AiOutlineInfoCircle } from "react-icons/ai";

const RightHeader = () => {
  return (
    <div className="flex justify-between items-center px-4 h-20 w-full">
      <Avatar name="Segun Adebayo" src="https://bit.ly/sage-adebayo" />
      <h1 className="font-bold text-xl">Vviolet</h1>
      <IconButton
        onClick={() => console.log("clicked like button!")}
        aria-label="New Message"
        icon={
          <IconContext.Provider value={{ size: "30" }}>
            <AiOutlineInfoCircle />
          </IconContext.Provider>
        }
        size="lg"
        isRound={true}
        _hover={{
          color: "gray.500",
        }}
        variant={"outline"}
        border={"none"}
      />
    </div>
  );
};

export default RightHeader;

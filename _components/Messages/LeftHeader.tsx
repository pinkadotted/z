"use client";
import React from "react";
import SearchBar from "../SearchBar";
import { IconButton, Text } from "@chakra-ui/react";
import { IconContext } from "react-icons";
import { LuMailPlus } from "react-icons/lu";

const LeftHeader = () => {
  return (
    <div className="flex flex-col w-full justify-around items-center pb-4">
      <div className="flex justify-between items-center w-full p-3">
        {/* Top Left Heading*/}
        <h1 className="text-2xl font-bold">Messages</h1>
        {/* Top Right Message Icon*/}
        <IconButton
            onClick={() => console.log("clicked like button!")}
            aria-label="New Message"
            icon={
              <IconContext.Provider value={{ size: "30" }}>
              <LuMailPlus />
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

      <div className="flex w-full">
        {/* Searchbar */}
        <SearchBar placeholder="Search Messages"/>
      </div>
    </div>
  );
};

export default LeftHeader;

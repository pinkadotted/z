"use client";

import React, { useState } from "react";
import MenuItem from "./MenuItem";
import CreateTweetModal from "./CreateTweetModal";
import { useDisclosure } from "@chakra-ui/react";

const menuItems = [
  {
    name: "Home",
    icon: ["/assets/home-outline.png", "/assets/home-filled.png"],
    route: "/",
  },
  {
    name: "Explore",
    icon: ["/assets/search-outline.png", "/assets/search-filled.png"],
    route: "/explore",
  },
  {
    name: "Activities",
    icon: [
      "/assets/notification-outline.png",
      "/assets/notification-filled.png",
    ],
    route: "/activities",
  },
  {
    name: "Messages",
    icon: ["/assets/messages-outline.png", "/assets/messages-filled.png"],
    route: "/messages",
  },
  {
    name: "Profile",
    icon: ["/assets/profile-outline.png", "/assets/profile-filled.png"],
    route: "/profile",
  },
];

const LeftMenu = () => {
  const [selected, setSelected] = useState("Home");
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <div className="flex flex-col w-1/5 justify-start h-max sticky top-20">
        <CreateTweetModal isOpen={isOpen} onOpen={onOpen} onClose={onClose}/>

        <div className="justify-center pb-20">
          {menuItems.map((item) => {
            return (
              <MenuItem
                name={item.name}
                key={item.name}
                icon={item.icon}
                isActive={selected === item.name}
                sendDataToParent={() => setSelected(item.name)}
                route={item.route}
              />
            );
          })}
        </div>
        <div className="flex justify-center h-16">
          <button
            onClick={onOpen}
            className="rounded-full bg-sky-500  w-3/4 text-white font-semibold text-xl transform transition-transform duration-300 hover:scale-105"
          >
            Post
          </button>
        </div>
      </div>
    </>
  );
};

export default LeftMenu;
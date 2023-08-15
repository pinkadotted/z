"use client";

import { Avatar, Textarea } from "@chakra-ui/react";
import EmojiPicker from "emoji-picker-react";
import Image from "next/image";
import React, { useState } from "react";
import { useFilePicker } from "use-file-picker";

const CreateTweetCard = ({ isModal }: any) => {
  const [openEmoji, setOpenEmoji] = useState(false);
  const [tweetText, setTweetText] = useState("");
  const [openFileSelector, { filesContent, loading }] = useFilePicker({
    accept: "image/*",
  });

  const addEmoji = (emoji: any) => {
    setTweetText((prev) => prev + emoji);
  };

  console.log("isModal: ", isModal);

  return (
    <div className="flex max-h-80 min-h-fit pb-4 border-2 border-red-600 justify-between">
      {/* left profile photo section */}
      <div className="flex w-1/6 pl-4 pt-4 items-start justify-center">
        <Avatar
          name="Segun Adebayo"
          size={isModal ? 'lg' : "2xl"}
          src="https://bit.ly/sage-adebayo"
        />
      </div>

      {/* middle text section */}
      <div className="flex w-2/3 rounded-lg border-gray-300 m-2">
        <Textarea
          placeholder="What is happening?!"
          size={"xl"}
          className="p-4 text-xl w-full rounded-lg"
          value={tweetText}
          onChange={(event) => setTweetText(event.target.value)}
        />
      </div>

      {/* right tools section */}
      <div className="flex flex-col w-1/6 justify-center items-center m-2 relative">
        <Image
          src="/assets/add-image.png"
          alt="image-picker"
          width={30}
          height={30}
          className="m-3 cursor-pointer"
          onClick={() => openFileSelector()}
        />
        <Image
          src="/assets/emoji.png"
          alt="image-picker"
          width={30}
          height={30}
          className="m-3 cursor-pointer"
          onClick={() => setOpenEmoji(!openEmoji)}
        />
        {openEmoji && (
          <div className="absolute top-24 left-16">
            <EmojiPicker onEmojiClick={(event) => addEmoji(event.emoji)} />
          </div>
        )}
        {!isModal && (
          <button
            className={`rounded-full bg-sky-500 text-white font-semibold text-md h-10 w-1/2 ${
              tweetText.length === 0 ? "disabled:opacity-50" : ""
            }`}
            onClick={() => console.log("button clicked")}
            disabled={tweetText.length === 0}
          >
            Post
          </button>
        )}
      </div>
    </div>
  );
};

export default CreateTweetCard;

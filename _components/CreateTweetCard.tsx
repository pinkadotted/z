"use client";

import { createPostAction } from "@/lib/actions/posts.action";
import { useAppSelector } from "@/store/hooks";
import { Avatar, SkeletonCircle, Textarea } from "@chakra-ui/react";
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

  // Store subscription
  const currentUser = useAppSelector((state) => state.currentUser);

  const addEmoji = (emoji: any) => {
    setTweetText((prev) => prev + emoji);
  };

  // Handing button click to trigger creation of post
  const createPostHandler = async () => {
    const content = tweetText;
    console.log("content: ", content);
    // create an obj
    const postObj = {
      content,
      author: currentUser.id
    };
    console.log('postObj: ', postObj)
    createPostAction(postObj);
  };

  return (
    <div className="flex max-h-80 min-h-fit pb-4 border-2 border-slate-200 rounded-lg justify-between">
      {/* left profile photo section */}
      <div className="flex w-1/6 pl-4 pt-4 items-start justify-center">
        <Avatar
          name={currentUser.displayName}
          size={isModal ? "lg" : "2xl"}
          src={currentUser.profilephotourl}
        />
      </div>

      {/* middle text section */}
      <div className="flex w-2/3 rounded-lg m-2">
        <Textarea
          placeholder="What is happening?!"
          size={"xl"}
          variant="outline"
          padding="4"
          w="full"
          rounded="lg"
          fontSize="lg"
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
            onClick={createPostHandler}
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

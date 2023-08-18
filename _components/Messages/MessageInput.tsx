"use client";
import { CheckIcon, PhoneIcon } from "@chakra-ui/icons";
import {
  IconButton,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
} from "@chakra-ui/react";
import React from "react";
import { IconContext } from "react-icons";
import { BsEmojiSmile, BsImage } from "react-icons/bs";
import { BiSmile, BiSolidSend } from "react-icons/bi";

const MessageInput = () => {
  return (
    <div className="flex items-center justify-between">
        <IconButton
        onClick={() => console.log("clicked image button!")}
        aria-label="Image"
        icon={
        <IconContext.Provider value={{ size: "20" }}>
            <BsImage />
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
            onClick={() => console.log("clicked emoji button!")}
            aria-label="Emoji"
            icon={
            <IconContext.Provider value={{ size: "20" }}>
                <BiSmile />
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
        <InputGroup>
            <Input type="text" placeholder="Type message here" width='100%' rounded='2xl' focusBorderColor='blue.200' borderWidth='small' />
        </InputGroup>
        <IconButton
            onClick={() => console.log("clicked send button!")}
            aria-label="Send"
            icon={
            <IconContext.Provider value={{ size: "20" }}>
                <BiSolidSend />
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
    </div>
  );
};

export default MessageInput;

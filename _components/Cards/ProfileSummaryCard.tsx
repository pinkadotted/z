import { Avatar, Button, ButtonGroup } from "@chakra-ui/react";
import React from "react";

const ProfileSummaryCard = () => {
  return (
    // <div className="flex flex-col border-2 border-red-300 w-fit h-60 bg-white drop-shadow-2xl z-50 rounded-xl justify-around pb-3">
     <div className='flex flex-col justify-around'> 
      <div className="flex p-2  justify-between">
        <Avatar name="Andrew Alfred" src="/sun-profile.jpg" size="md" />
        <button className="rounded-3xl text-white bg-sky-300 px-3">
          Following
        </button>
      </div>
      <div className="flex flex-col px-3">
        <p className="font-semibold">하현상 (HAHYUNSANG_OFFICIAL)</p>
        <p className="text-slate-400">@hahyunsang_twt</p>
        <p className=" pt-3">하현상 공식 트위터입니다.</p>
      </div>
      <ButtonGroup
          spacing="2"
        //   border="1px solid black" borderWidth="2"
          px='4'
          pt="3"
          justifySelf='around'
        >
          <Button variant="link" colorScheme="blue">
            98 Following{""}
          </Button>
          <Button variant="link" colorScheme="blue">
            314 Followers
          </Button>
        </ButtonGroup>
    </div>
  );
};

export default ProfileSummaryCard;

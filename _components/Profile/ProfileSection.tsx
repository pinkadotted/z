"use client";

import { useAppSelector } from "@/store/hooks";
import {
  Avatar,
  Box,
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardFooter,
  Divider,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";

const ProfileSection = () => {

  // Store subscription
  const currentUser = useAppSelector((state) => state.currentUser);
  console.log('currUser: ', currentUser)


  return (
    // <div className="flex flex-col border-2 border-green-500 m-5 p-5">
    <Card w="full" h="fit">
      <CardBody>
        <div className=" max-h-[400px]">
          <Image
            src={currentUser.profilephotourl}
            alt="Green double couch with wooden legs"
            borderRadius="lg"
            h="xs"
            w="full"
            // border="1px solid black"
            // borderWidth="2"
          />
          <Avatar
            name={currentUser.displayName}
            w="200px"
            h="200px"
            src={currentUser.profilephotourl}
            position="relative"
            zIndex="1"
            top="-28"
            left="20"
            border="6px solid white"
          />
        </div>
        <Stack mt="6" spacing="3" 
        // border="1px solid black" borderWidth="2"
        >
          <div className="flex justify-between">
            <div className="flex w-1/2">
              <div>
                <Heading size="md" 
                // border="1px solid black" borderWidth="2"
                >
                  {currentUser.displayName}
                </Heading>
                <Text
                  fontSize="sm"
                  // border="1px solid black" borderWidth="2"
                >
                  @{currentUser.username}
                </Text>
              </div>
            </div>
            <div className="flex w-1/2 justify-end items-center">
              <Button variant='outline' rounded='2xl' border='1px solid gray'>Edit Profile</Button>
            </div>
          </div>

          <Text>
          {currentUser.bio}
          </Text>
        </Stack>
        <ButtonGroup
          spacing="2"
          // border="1px solid black" borderWidth="2"
          // px='4'
          pt="3"
        >
          <Button variant="link" colorScheme="blue">
            {currentUser.noFollowing} Following{""}
          </Button>
          <Button variant="link" colorScheme="blue">
            {currentUser.noFollowers} Followers
          </Button>
        </ButtonGroup>
      </CardBody>
    </Card>
  );
};

export default ProfileSection;

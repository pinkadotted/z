"use server";

import PocketBase from "pocketbase";
import { currentUser } from "@clerk/nextjs";

const pb = new PocketBase("http://127.0.0.1:8090");

export const getAllUsers = async () => {
  try {
    const allUsers = await pb.collection("users").getFullList();
    console.log("allUsers server: ", allUsers);
    return allUsers;
  } catch (error) {
    console.log(error);
  }
};

export const getMe = async () => {
  // get username from Clerk
  const curUsr = await currentUser();
  if (curUsr != null) {
    const username = curUsr.username;
    const profilephotourl = curUsr.profileImageUrl;
    const allUsers = await pb.collection("users").getFullList();
    const me = allUsers.find((user) => user.username === username);
    if (me) {
      //  parse the me const to include only necessary fields, before passing it to the redux fn
      const parsed_me = {
        id: me.id,
        username: me.username,
        displayName: me.displayName,
        bio: me.bio,
        profilephotourl: profilephotourl,
        noFollowing: me.noFollowing,
        noFollowers: me.noFollowers,
        noPosts: me.noPosts,
        onboarded: me.onboarded,
      };
      // console.log("parsed_me: ", parsed_me);
      return parsed_me;
    }
  }
};

export const printCurrentUser = async () => {
  try {
    const curUser = await currentUser();
    if (curUser != null) {
      return curUser;
    } else {
      console.log("curUser is null");
    }
  } catch (error) {
    console.log(error);
  }
};

export const onboardUser = async (formValues: object) => {
  try {
    const curUser = await currentUser();
    if (curUser != null) {
      const userDetails = await pb.collection("users").create({
        ...formValues,
      });
    } else {
      console.log("curUser is null");
    }
  } catch (error) {
    console.log("the error is: ", error);
  }
};

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

export const printCurrentUser = async () => {
  try {
    const curUser = await currentUser();
    if (curUser != null) {
      console.log("curUser: ", curUser.id);
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

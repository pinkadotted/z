"use server";

import { PostObj } from "@/types/type";
import { currentUser } from "@clerk/nextjs";
import PocketBase from "pocketbase";

const pb = new PocketBase("http://127.0.0.1:8090");

export const getAllPosts = async () => {
  try {
    const allPosts = await pb
      .collection("posts")
      .getFullList({ expand: "author" });
    const test = await pb.collection('posts').getFullList({filter:'content="brah"'})
    // const test = await pb.collection('posts').getFullList('content="brah"')
    console.log('test: ', test)
    return allPosts;
  } catch (error) {
    console.log("getAllPosts error: ", error);
  }
};

export const getMyPosts = async (
  currentUserId: string
): Promise<PostObj[] | undefined> => {
  try {
    const allPosts = await getAllPosts();
    const myPosts = allPosts?.filter((post) => post.author === currentUserId);
    if (myPosts) {
      console.log("myPosts: ", myPosts);
      const myPostObjects: PostObj[] = myPosts.map((post) => {
        const myPostFields: PostObj = {
          id: post.id,
          content: post.content,
          likes: post.likes,
          retweets: post.retweets,
          comments: post.comments,
          images: post.images,
          author: post.expand.author,
          parentPost: post.parentPost,
          likedBy: post.likedBy,
          repostedBy: post.repostedBy,
          created: post.created,
          updated: post.updated,
        };
        return myPostFields;
      });
      console.log("myPostObjects: ", myPostObjects);
      return myPostObjects;
    }
    // return myPosts
  } catch (error) {
    console.log("getMyPosts error: ", error);
  }
};

export const createPostAction = async (postObj: any) => {
  try {
    console.log("creating a post in the db...");
    const userDetails = await pb.collection("posts").create(postObj);
    console.log("userDetails: ", userDetails);
  } catch (error) {
    console.log("createPostAction error: ", error);
  }
};

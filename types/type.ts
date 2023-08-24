// used rarely, only when interacting with the Clerk API
export type ClerkUserObj = {};

// use this for pocketbase things as well
export type ReduxUserObj = {
  id: string;
  username: string;
  displayName: string;
  bio: string;
  profilephotourl: string;
  onboarded: boolean;
  noFollowing: number;
  noFollowers: number;
  noPosts: number;
  Following: ReduxUserObj[];
  Followers: ReduxUserObj[];
  // TODO
  // double-check the type of created and updated
  created: string;
  updated: string;
};

export type PostObj = {
  id: string;
  content: string;
  likes: number;
  retweets: number;
  comments: number;
  images: Array<string>;
  author: any;
  parentPost: PostObj;
  likedBy: ReduxUserObj[];
  repostedBy: ReduxUserObj[];
  created: string;
  updated: string;
};

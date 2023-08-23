import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "./store";

interface UserState {
  id: string;
  username: string;
  displayName: string;
  bio: string;
  profilephotourl: string;
  noFollowing: number;
  noFollowers: number;
  noPosts: number;
  onboarded: boolean;
}

const initialState: UserState = {
  id: "",
  username: "",
  displayName: "",
  bio: "",
  profilephotourl: "",
  noFollowing: 0,
  noFollowers: 0,
  noPosts: 0,
  onboarded: false,
};

const currentUserSlice = createSlice({
  name: "currentUser",
  initialState,
  reducers: {
    getCurrentUser: (state, action) => {
      state.id = action.payload.id;
      state.username = action.payload.username;
      state.displayName = action.payload.displayName;
      state.profilephotourl = action.payload.profilephotourl;
      state.onboarded = action.payload.onboarded;
      state.bio = action.payload.bio;
      state.noFollowers = action.payload.noFollowers,
      state.noFollowing = action.payload.noFollowing;
      state.noPosts = action.payload.noPosts;
    },
  },
});

export const { getCurrentUser } = currentUserSlice.actions;

export default currentUserSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { id: "1", title: "Learning redux toolkit", content: "i have good things" },
];

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {},
});

export const selectAllPosts = (state) => state.posts;
export default postsSlice.reducer;

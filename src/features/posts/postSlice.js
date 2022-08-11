import { createSlice, nanoid } from "@reduxjs/toolkit";
// import moment from "moment";
import { sub } from "date-fns";
const initialState = [
  {
    id: "1",
    title: "Learning redux toolkit",
    content: "i have good things",
    date: sub(new Date(), { minutes: 10 }).toISOString(),
  },
];

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    postAdded: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare(title, content, userId) {
        return {
          payload: {
            id: nanoid(),
            title,
            content,
            userId,
          },
        };
      },
    },
  },
});
// produce a reducer and a prepare callback for our postAdded reducer function
export const selectAllPosts = (state) => state.posts;
export const { postAdded } = postsSlice.actions;
export default postsSlice.reducer;

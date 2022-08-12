import { createSlice, nanoid } from "@reduxjs/toolkit";
// import moment from "moment";
import { sub } from "date-fns";
const initialState = [
  {
    id: "1",
    title: "Learning redux toolkit",
    content: "i have good things",
    date: sub(new Date(), { minutes: 10 }).toISOString(),
    reactions: {
      thumbsUp: 0,
      wow: 0,
      heart: 0,
      rocket: 0,
      coffee: 0,
    },
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
            date: new Date().toISOString(),
            reactions: {
              thumbsUp: 0,
              wow: 0,
              heart: 0,
              rocket: 0,
              coffee: 0,
            },
          },
        };
      },
    },
    reactionsAdded(state, action) {
      const { postId, reaction } = action.payload;
      const existingPost = state.find((post) => post.id === postId);
      existingPost && existingPost.reactions[reaction]++;
      //  [...existingPost, existingPost.reactions(reaction)++]
    },
  },
});
// produce a reducer and a prepare callback for our postAdded reducer function
export const selectAllPosts = (state) => state.posts;
export const { postAdded, reactionsAdded } = postsSlice.actions;
export default postsSlice.reducer;

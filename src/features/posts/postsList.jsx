import { useSelector, useDispatch } from "react-redux";

import React from "react";
import {
  selectAllPosts,
  getPostError,
  getPostStatus,
  fetchPosts,
} from "./postSlice";
// import PostAuthor from "./PostAuthor";
// import TimeAgo from "./TimeAgo";
// import ReactionButton from "./ReactionButton";
import { useEffect } from "react";
import PostsExercept from "./PostsExercept";
const PostsList = () => {
  const dispatch = useDispatch();

  const posts = useSelector(selectAllPosts);
  const postsStatus = useSelector(getPostStatus);
  const postsError = useSelector(getPostError);

  useEffect(() => {
    let isCancelled = false;
    postsStatus === "idle" && !isCancelled && dispatch(fetchPosts());
    // clean up function
    return () => {
      console.log("cancelled");
      isCancelled = true;
    };
  }, [postsStatus, dispatch]);
  // reverse postion of all post when created
  // const orderedPosts = posts
  //   .slice()
  //   .sort((a, b) => b.date.localeCompare(a.date));
  // //?.subString(0, 100)
  // const renderPosts = orderedPosts.map((post) => (
  //   <PostsExercept key={post.id} />
  // ));

  let content;
  if (postsStatus === "loading") {
    content = <p>"loading ..."</p>;
  } else if (postsStatus === "success") {
    const orderedPosts = posts
      .slice()
      .sort((a, b) => b.date.localeCompare(a.date));
    content = orderedPosts.map((post) => (
      <PostsExercept post={post} key={post.id} />
    ));
  } else if (postsStatus === "failed") {
    content = <p>"error"</p>;
  }
  return (
    <>
      <section>
        <h1>posts</h1>
        {content}
      </section>
    </>
  );
};

export default PostsList;

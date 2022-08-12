import { useSelector, useDispatch } from "react-redux";

import React from "react";
import {
  selectAllPosts,
  getPostError,
  getPostStatus,
  fetchPosts,
} from "./postSlice";
import PostAuthor from "./PostAuthor";
import TimeAgo from "./TimeAgo";
import ReactionButton from "./ReactionButton";
import { useEffect } from "react";
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
  const orderedPosts = posts
    .slice()
    .sort((a, b) => b.date.localeCompare(a.date));
  //?.subString(0, 100)
  const renderPosts = orderedPosts.map((post) => (
    <article key={post.id}>
      <h3>{post.title}</h3>
      <p>{post.content}</p>
      <p className="postCredit">
        <PostAuthor userId={post.user} />
        <TimeAgo timestamp={post.date} />
      </p>
      <ReactionButton post={post} />
    </article>
  ));
  return (
    <>
      <section>
        <h1>posts</h1>
        {renderPosts}
      </section>
    </>
  );
};

export default PostsList;

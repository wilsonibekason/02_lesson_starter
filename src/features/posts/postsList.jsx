import { useSelector } from "react-redux";

import React from "react";
import { selectAllPosts } from "./postSlice";
import PostAuthor from "./PostAuthor";
import TimeAgo from "./TimeAgo";
const PostsList = () => {
  const posts = useSelector(selectAllPosts);
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

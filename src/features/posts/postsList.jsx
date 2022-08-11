import { useSelector } from "react-redux";

import React from "react";
import { selectAllPosts } from "./postSlice";
import PostAuthor from "./PostAuthor";
const PostsList = () => {
  const posts = useSelector(selectAllPosts);
  //?.subString(0, 100)
  const renderPosts = posts.map((post) => (
    <article key={post.id}>
      <h3>{post.title}</h3>
      <p>{post.content}</p>
      <p className="postCredit">
        <PostAuthor userId={post.user} />
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

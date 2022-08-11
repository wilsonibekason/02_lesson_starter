import { useSelector } from "react-redux";

import React from "react";
import { selectAllPosts } from "./postSlice";
import postAuthor from "./postAuthor";
const PostsList = () => {
  const posts = useSelector(selectAllPosts);
  //?.subString(0, 100)
  const renderPosts = posts.map((post) => (
    <article key={post.id}>
      <h3>{post.title}</h3>
      <p>{post.content}</p>
      <p className="postCredit">
        <postAuthor userId={post.user} />
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

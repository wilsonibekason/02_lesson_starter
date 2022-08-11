import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
import { postAdded } from "./posts/postSlice";
const AddPostForm = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  // handlechange
  const ontitleChange = (e) => setTitle(e.target.value);
  const onContentChange = (e) => setContent(e.target.value);
  const onSavePostClicked = (e) => {
    e.preventDefault();
    if (title && content) {
      dispatch(postAdded(title, content));
      setTitle("");
      setContent("");
    }
  };
  return (
    <>
      <section>
        <h2>Add a title</h2>
        <form>
          <label htmlFor="postTitle">Post title: </label>
          <input
            type="text"
            id="postTitle"
            name="postTitle"
            value={title}
            onChange={ontitleChange}
          />
          <label htmlFor="postContent">Post Content</label>
          <input
            type="text"
            id="postContent"
            name="postContent"
            value={content}
            onChange={onContentChange}
          />
          <button type="button" onClick={onSavePostClicked}>
            save changes
          </button>
        </form>
      </section>
    </>
  );
};
export default AddPostForm;

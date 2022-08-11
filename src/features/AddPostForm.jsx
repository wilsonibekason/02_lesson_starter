import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectAllUsers } from "./users/usersSlice";
import { nanoid } from "@reduxjs/toolkit";
import { postAdded } from "./posts/postSlice";
const AddPostForm = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [userId, setuserId] = useState("");

  // handlechange
  const users = useSelector(selectAllUsers);
  const ontitleChange = (e) => setTitle(e.target.value);
  const onContentChange = (e) => setContent(e.target.value);
  const onAuthorChange = (e) => setuserId(e.target.value);
  const onSavePostClicked = (e) => {
    e.preventDefault();
    if (title && content) {
      dispatch(postAdded(title, content, userId));
      setTitle("");
      setContent("");
    }
  };
  const canSave = Boolean(title) && Boolean(content) && Boolean(userId);
  const userOptions = users.map((user, index) => {
    const { id, name } = user;
    return (
      <option value={id} key={id}>
        {name}
      </option>
    );
  });
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
          <label htmlFor="userContent">User Content</label>
          <select
            name=""
            id="postAuthor"
            value={userId}
            onChange={onAuthorChange}
          >
            <option value=""></option>
            {userOptions}{" "}
          </select>
          <label htmlFor="postContent">Post Content</label>
          <input
            type="text"
            id="postContent"
            name="postContent"
            value={content}
            onChange={onContentChange}
          />
          <button type="button" onClick={onSavePostClicked} disabled={!canSave}>
            save changes
          </button>
        </form>
      </section>
    </>
  );
};
export default AddPostForm;

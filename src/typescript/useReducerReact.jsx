import React, { useReducer } from "react";
import { INITIAL_STATE, postReducer } from "./postReducer";
import { ACTION_TYPES } from "./actionTypes";
// usereducer useage
/**
 *
 * @returns
 * when you updaye multiple states in a function
 */
const { FETCH_ERROR, FETCH_START, FETCH_SUCCESS } = ACTION_TYPES;
const UseReducerReact = () => {
  const [state, dispatch] = useReducer(postReducer, INITIAL_STATE);

  const handleFetch = () => {
    dispatch({ type: FETCH_START });
    fetch("json.placeholder.typicode.com/posts/1")
      .then((res) => {
        dispatch({ type: FETCH_SUCCESS });
        res.json();
      })
      .catch((error) => {
        dispatch({ type: FETCH_ERROR });
        console.log(error?.message);
      });
  };
  return (
    <>
      <div>
        <button onClick={handleFetch}>
          {state.loading ? "loading ... " : "fetch the post "}
        </button>
        <p>{state.post?.title}</p>
        <span>{state.error && "something went wrong"}</span>
      </div>
    </>
  );
};

export default UseReducerReact;

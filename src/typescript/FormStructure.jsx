import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { formReducer, INITIAL_STATE } from "./Form";

const FormStructure = () => {
  const tagRef = useRef();
  const [state, dispatch] = useDispatch(INITIAL_STATE, formReducer);
  const handleState = (e) => {
    dispatch({
      type: "CHANGE_INPUT",
      payload: {
        name: e.target.name,
        value: e.target.value,
      },
    });
    const handleTags = () => {
      const tags = tagRef.current.value.split(",");
      tags.forEach((tag) => {
        dispatch({ type: "ADD_TAG", payload: tag });
      });
    };
  };

  return (
    <>
      <div>
        <input type="text " onChange={handleState} />
      </div>
    </>
  );
};

export default FormStructure;

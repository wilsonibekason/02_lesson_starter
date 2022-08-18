import React, { useReducer } from 'react'
import { INITIAL_STATE, postReducer } from './postReducer'
// usereducer useage
/**
 * 
 * @returns 
 * when you updaye multiple states in a function
 */
const usereducer = () => {
    const [state, dispatch(name: string)] = useReducer(postReducer,INITIAL_STATE);

    const handleFetch = () =>{
        dispatch({type: "FETCH_START"});
        fetch("json.placeholder.typicode.com/posts/1").then((res) => {
            res.json()
        }).catch((error) =>{
            dispatch({type:})
            console.log(error?.message);
            
        })
    }
  return (
<>
<div>
    <button onClick={handleFetch}>{state.loading ? "loading ... " : "fetch the post "}</button>
    <p>{state.post?.title}</p>
    <span>{state.error && "something went wrong"}</span>
</div>
</>
    )
}

export default usereducer
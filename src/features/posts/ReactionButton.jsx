import { useDispatch } from "react-redux";
import { reactionsAdded } from "./postSlice";

const reactionEmoji = {
  thumbsup: "",
  wow: "",
  heart: "",
  rocket: "",
  coffee: "",
};

const ReactionButton = ({ post }) => {
  const dispatch = useDispatch();
  const reactionsButton = Object.entries(reactionEmoji).map(([name, emoji]) => {
    return (
      <button
        className="reactionButton"
        key={name}
        type="button"
        onClick={() =>
          dispatch(reactionsAdded({ postId: post.id, reaction: name }))
        }
      >
        {emoji} {post.reactions[name]}
      </button>
    );
  });
  return <div>{reactionsButton}</div>;
};

export default ReactionButton;

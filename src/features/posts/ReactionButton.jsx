import { useDispatch } from "react-redux";
import { reactionsAdded } from "./postSlice";

const reactionEmoji = {
  thumbsup: "ff",
  wow: "ff",
  heart: "ff",
  rocket: "ff",
  coffee: "f",
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

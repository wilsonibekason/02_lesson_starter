export const INITIAL_STATE = {
  title: "",
  description: "",
  tags: [],
  price: "",
  category: "",
  images: {
    sm: "",
    md: "",
    lg: "",
  },
  quantity: 0,
};

export const formReducer = (state, action) => {
  switch (state.type) {
    case "CHANGE_INPUT":
      return { ...state, [action.payload?.name]: action.payload.value };
    case "ADD_TAG":
      return {
        ...state,
        tags: [...state.tags, action.payload],
      };
    case "REMOVE_TAG":
      return {
        ...state,
        tags: [...state.tags.filter((tag) => tag !== action.payload)],
      };
    case "INCREASE":
      return {
        ...state,
        quantity: state.quantity + 1,
      };
    case "DECREASE":
      return {
        ...state,
        quantity: state.quantity - 1,
      };
    default:
      return state;
  }
};
/// complete add all swich statement for the usereducer actions

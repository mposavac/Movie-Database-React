const initState = {
  indicator: "",
  list: undefined
};

const listReducer = (state = initState, action) => {
  switch (action.type) {
    case "LIST_RESPONSE":
      return {
        ...state,
        list: action.data,
        indicator: action.indicator
      };
    case "LIST_ERROR":
      return state;
    case "SET_DEFAULT":
      return initState;
    default:
      return state;
  }
};

export default listReducer;

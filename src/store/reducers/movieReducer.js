const initState = {
  indicator: "movie",
  isLoading: true,
  ratingLoaded: false,
  movie: undefined,
  cast: undefined,
  similar: undefined,
  fullCastShown: false,
  fixSmall: false,
  highlightIndex: 0
};

const movieReducer = (state = initState, action) => {
  switch (action.type) {
    case "MOVIE_RESPONSE":
      return { ...state, movie: action.data };
    case "MOVIE_ERROR":
      return state;
    case "CAST_RESPONSE":
      return { ...state, cast: action.data };
    case "CAST_ERROR":
      return state;
    case "SIMILAR_RESPONSE":
      return { ...state, similar: action.data, isLoading: false };
    case "SIMILAR_ERROR":
      return state;
    case "FULL_CAST":
      return { ...state, fullCastShown: !state.fullCastShown };
    case "LOAD_RATING":
      return { ...state, ratingLoaded: true };
    case "FIX_SMALL":
      return { ...state, fixSmall: !state.fixSmall };
    case "SET_DEFAULT":
      return initState;
    case "HIGHTLIGHT_CHANGE":
      return { ...state, highlightIndex: action.data };
    default:
      return state;
  }
};
export default movieReducer;

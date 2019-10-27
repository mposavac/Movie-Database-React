const initState = {
  indicator: "tv",
  ratingLoaded: false,
  activeSeason: 1,
  tv: undefined,
  cast: undefined,
  season: undefined,
  similar: undefined,
  fullCastShown: false,
  fixSmall: false,
  highlightIndex: 0
};

const tvReducer = (state = initState, action) => {
  switch (action.type) {
    case "TV_RESPONSE":
      return { ...state, tv: action.data };
    case "TV_ERROR":
      return state;
    case "CAST_RESPONSE":
      return { ...state, cast: action.data };
    case "CAST_ERROR":
      return state;
    case "SIMILAR_RESPONSE":
      return { ...state, similar: action.data };
    case "SIMILAR_ERROR":
      return state;
    case "SEASON_RESPONSE":
      return { ...state, season: action.data };
    case "SEASON_ERROR":
      return state;
    case "CHANGE_SEASON":
      return { ...state, activeSeason: action.data };
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
export default tvReducer;

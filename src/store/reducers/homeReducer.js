const initState = {
  isLoading: true,
  hotMovies: undefined,
  inTheaters: undefined,
  upcomingMovies: undefined,
  tvTrending: undefined,
  search: "",
  searchResults: null,
  isTyping: false
};

const homeReducer = (state = initState, action) => {
  switch (action.type) {
    case "HOT_RESPONSE":
      return { ...state, hotMovies: action.data };
    case "INTHEATERS_RESPONSE":
      return { ...state, inTheaters: action.data };
    case "UPCOMING_RESPONSE":
      return { ...state, upcomingMovies: action.data };
    case "TVTRENDING_RESPONSE":
      return { ...state, tvTrending: action.data, isLoading: false };
    case "TYPING_ACTION":
      return { ...state, isTyping: !state.isTyping };
    case "SEARCH_QUERY":
      return { ...state, search: action.data };
    case "SEARCH_RESPONSE":
      return { ...state, searchResults: action.data };
    default:
      return state;
  }
};

export default homeReducer;

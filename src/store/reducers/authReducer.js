const initialState = {
  status: null,
  favourites: []
};

export default function authReducer(state = initialState, action) {
  switch (action.type) {
    case "LOGIN_SUCCESS":
      return { ...state, status: "Login susccess" };
    case "LOGIN_ERROR":
      return { ...state, status: "Login failed" };
    case "SIGNOUT_SUCCESS":
      return { ...state, status: null, favourites: [] };
    case "SIGNUP_SUCCESS":
      return { ...state, status: "Login susccess" };
    case "SIGNUP_ERROR":
      return { ...state, status: action.err.message };
    //case "USER_SINGIN": return {...state, userData: action.data}
    case "GET_FAVOURITES":
      return { ...state, favourites: action.favourites };
    case "FAVOURITE_ADDED":
      return { ...state, favourites: action.favourites };
    case "FAVOURITE_REMOVED":
      return { ...state, favourites: action.favourites };
    default:
      return state;
  }
}

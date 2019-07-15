import { combineReducers } from "redux";
import authReducer from "./authReducer";
import movieReducer from "./movieReducer";
import personReducer from "./personReducer";
import listReducer from "./listReducer";
import tvReducer from "./tvReducer";
import homeReducer from "./homeReducer";

import { firebaseReducer } from "react-redux-firebase";
import { firestoreReducer } from "redux-firestore";

const rootReducer = combineReducers({
  auth: authReducer,
  movie: movieReducer,
  tv: tvReducer,
  list: listReducer,
  person: personReducer,
  home: homeReducer,
  firebase: firebaseReducer,
  firestore: firestoreReducer
});

export default rootReducer;

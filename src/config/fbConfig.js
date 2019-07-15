import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyAzVoOktm04eBiel5e3zSlpGwxrQgkJpNc",
  authDomain: "react-moviedb-2019tmdb.firebaseapp.com",
  databaseURL: "https://react-moviedb-2019tmdb.firebaseio.com",
  projectId: "react-moviedb-2019tmdb",
  storageBucket: "react-moviedb-2019tmdb.appspot.com",
  messagingSenderId: "1081622351720",
  appId: "1:1081622351720:web:17669efe400ec4ba"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;

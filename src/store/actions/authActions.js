export const signIn = userData => {
  return (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();
    firebase
      .auth()
      .signInWithEmailAndPassword(userData.email, userData.password)
      .then(() => {
        dispatch({ type: "LOGIN_SUCCESS" });
      })
      .catch(err => {
        dispatch({ type: "LOGIN_ERROR", err });
      });
  };
};

export const signOut = () => {
  return (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();
    firebase
      .auth()
      .signOut()
      .then(() => {
        dispatch({ type: "SIGNOUT_SUCCESS" });
      });
  };
};

export const signUp = newUser => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firebase = getFirebase();
    const firestore = getFirestore();

    firebase
      .auth()
      .createUserWithEmailAndPassword(newUser.userMail, newUser.password)
      .then(response => {
        return firestore
          .collection("users")
          .doc(response.user.uid)
          .set({
            userName: newUser.userName
          });
      })
      .then(() => dispatch({ type: "SIGNUP_SUCCSESS" }))
      .catch(err => dispatch({ type: "SIGNUP_ERROR", err }));
  };
};

export const getFavourites = () => {
  return async (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();
    let favourites = await collectionResposne(firestore, getState);
    dispatch({ type: "GET_FAVOURITES", favourites });
  };
};

export const addFavourite = favouriteData => {
  return (dispatch, getState, { getFirestore }) => {
    const firestore = getFirestore();
    let indicator = favouriteData.indicator,
      id = favouriteData[indicator].id,
      poster_path = favouriteData[indicator].poster_path,
      rating = favouriteData[indicator].vote_average,
      title,
      release_date;

    if (indicator === "movie") {
      title = favouriteData.movie.title;
      release_date = favouriteData.movie.release_date.substring(0, 4);
    } else {
      title = favouriteData.tv.name;
      release_date = favouriteData.tv.first_air_date.substring(0, 4);
    }
    firestore
      .collection("users")
      .doc(getState().firebase.auth.uid)
      .collection("favourite")
      .doc(String(id))
      .set({
        id: id,
        indicator: indicator,
        title: title,
        rating: rating,
        poster_path: poster_path,
        release_date: release_date
      })
      .then(async () => {
        let favourites = await collectionResposne(firestore, getState);
        dispatch({ type: "FAVOURITE_ADDED", favourites });
      })
      .catch(err => dispatch({ type: "FAVOURITE_ERROR", err }));
  };
};

export const removeFavourite = movieId => {
  return (dispatch, getState, { getFirestore }) => {
    const firestore = getFirestore();

    firestore
      .collection("users")
      .doc(getState().firebase.auth.uid)
      .collection("favourite")
      .doc(String(movieId))
      .delete()
      .then(async () => {
        let favourites = await collectionResposne(firestore, getState);
        dispatch({ type: "FAVOURITE_REMOVED", favourites });
      });
  };
};
async function collectionResposne(firestore, getState) {
  let favourites = [];
  const favouriteCollection = await firestore
    .collection("users")
    .doc(getState().firebase.auth.uid)
    .collection("favourite")
    .get();
  favouriteCollection.forEach(doc => {
    favourites.push(doc.data());
  });
  return favourites;
}

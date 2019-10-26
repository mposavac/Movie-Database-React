import { getFavourites } from "./authActions";
export const tvFetch = tvId => {
  return (dispatch, getState) => {
    fetch(
      `https://api.themoviedb.org/3/tv/${tvId}?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US`
    )
      .then(res => res.json())
      .then(data => dispatch({ type: "TV_RESPONSE", data }))
      .catch(err => dispatch({ type: "TV_ERROR", err }))
      .then(() => dispatch(seasonFetch(1)));

    fetch(
      `https://api.themoviedb.org/3/tv/${tvId}/credits?api_key=${process.env.REACT_APP_TMDB_API_KEY}`
    )
      .then(res => res.json())
      .then(data => dispatch({ type: "CAST_RESPONSE", data }))
      .catch(err => dispatch({ type: "CAST_ERROR", err }));

    fetch(
      `https://api.themoviedb.org/3/tv/${tvId}/recommendations?api_key=${process.env.REACT_APP_TMDB_API_KEY}`
    )
      .then(res => res.json())
      .then(data => dispatch({ type: "SIMILAR_RESPONSE", data }))
      .catch(err => dispatch({ type: "SIMILAR_ERROR", err }));
    if (getState().firebase.auth.uid) dispatch(getFavourites());
  };
};

export const seasonChange = seasonSelected => {
  return dispatch => {
    dispatch({ type: "CHANGE_SEASON", data: seasonSelected });
    dispatch(seasonFetch(seasonSelected));
  };
};

const seasonFetch = activeSeason => {
  return (dispatch, getState) => {
    if (getState().tv.tv) {
      fetch(
        `https://api.themoviedb.org/3/tv/${
          getState().tv.tv.id
        }/season/${activeSeason}?api_key=${
          process.env.REACT_APP_TMDB_API_KEY
        }&language=en-US`
      )
        .then(res => res.json())
        .then(data => dispatch({ type: "SEASON_RESPONSE", data }))
        .catch(err => dispatch({ type: "SEASON_ERR", err }));
    }
  };
};

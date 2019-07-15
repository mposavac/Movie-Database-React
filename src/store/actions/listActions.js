export const listFetch = (indicator, page) => {
  return dispatch => {
    let path;
    if (indicator === "/popular") path = "movie/popular";
    else if (indicator === "/topRated") path = "movie/top_rated";
    else if (indicator === "/tvShows") path = "tv/popular";
    fetch(
      `https://api.themoviedb.org/3/${path}?api_key=${
        process.env.REACT_APP_TMDB_API_KEY
      }&page=${page}`
    )
      .then(res => res.json())
      .then(data => dispatch({ type: "LIST_RESPONSE", data, indicator }))
      .catch(err => dispatch({ type: "LIST_ERROR", err }));
  };
};

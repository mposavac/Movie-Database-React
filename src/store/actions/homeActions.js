export const homeFetch = () => {
  return dispatch => {
    fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=${
        process.env.REACT_APP_TMDB_API_KEY
      }&language=en-US&page=1`
    )
      .then(res => res.json())
      .then(data => dispatch({ type: "HOT_RESPONSE", data }));
    fetch(
      `https://api.themoviedb.org/3/movie/now_playing?api_key=${
        process.env.REACT_APP_TMDB_API_KEY
      }&language=en-US&page=1`
    )
      .then(res => res.json())
      .then(data => dispatch({ type: "INTHEATERS_RESPONSE", data }));
    fetch(
      `https://api.themoviedb.org/3/movie/upcoming?api_key=${
        process.env.REACT_APP_TMDB_API_KEY
      }&language=en-US&page=1`
    )
      .then(res => res.json())
      .then(data => dispatch({ type: "UPCOMING_RESPONSE", data }));
    fetch(
      `https://api.themoviedb.org/3/trending/tv/day?api_key=${
        process.env.REACT_APP_TMDB_API_KEY
      }`
    )
      .then(res => res.json())
      .then(data => dispatch({ type: "TVTRENDING_RESPONSE", data }));
  };
};

export const searchFetch = query => {
  return dispatch => {
    dispatch({ type: "SEARCH_QUERY", data: query });
    if (query.length > 0) {
      fetch(
        `https://api.themoviedb.org/3/search/multi?api_key=${
          process.env.REACT_APP_TMDB_API_KEY
        }&language=en-US&query=${query}&page=1&include_adult=false`
      )
        .then(res => res.json())
        .then(data =>
          dispatch({ type: "SEARCH_RESPONSE", data: data.results.slice(0, 10) })
        );
    }
  };
};

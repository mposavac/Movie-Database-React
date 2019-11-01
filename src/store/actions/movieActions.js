import { getFavourites } from './authActions';
export const movieFetch = movieId => {
  return async (dispatch, getState) => {
    await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US`
    )
      .then(res => res.json())
      .then(data => dispatch({ type: 'MOVIE_RESPONSE', data }))
      .catch(err => dispatch({ type: 'MOVIE_ERROR', err }));

    await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${process.env.REACT_APP_TMDB_API_KEY}`
    )
      .then(res => res.json())
      .then(data => dispatch({ type: 'CAST_RESPONSE', data }))
      .catch(err => dispatch({ type: 'CAST_ERROR', err }));

    await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/recommendations?api_key=${process.env.REACT_APP_TMDB_API_KEY}`
    )
      .then(res => res.json())
      .then(data => dispatch({ type: 'SIMILAR_RESPONSE', data }))
      .catch(err => dispatch({ type: 'SIMILAR_ERROR', err }));
    await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${process.env.REACT_APP_TMDB_API_KEY}`
    )
      .then(res => res.json())
      .then(data => dispatch({ type: 'YT_RESPONSE', data }))
      .catch(err => dispatch({ type: 'YT_ERROR', err }));
    if (getState().firebase.auth.uid) dispatch(getFavourites());
  };
};

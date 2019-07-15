import _ from "lodash";
export const personAction = personId => {
  return dispatch => {
    fetch(
      `https://api.themoviedb.org/3/person/${personId}?api_key=${
        process.env.REACT_APP_TMDB_API_KEY
      }&language=en-US`
    )
      .then(res => res.json())
      .then(data => {
        dispatch({ type: "PERSON_RESPONSE", data });
      })
      .catch(err => {
        dispatch({ type: "PERSON_ERRORR", err });
      });
    fetch(
      `https://api.themoviedb.org/3/person/${personId}/combined_credits?api_key=${
        process.env.REACT_APP_TMDB_API_KEY
      }&language=en-US`
    )
      .then(res => res.json())
      .then(data => {
        const creditsByYear = sortCreditsByYear(data);
        dispatch({ type: "PERSON_KNOWNFOR", credits: creditsByYear });
      });
  };
};

export const fullBioAction = state => {
  return dispatch => {
    if (state) dispatch({ type: "HIDE_BIO" });
    else dispatch({ type: "SHOW_BIO" });
  };
};

/*SORT FUNCTION*/
function sortCreditsByYear(data) {
  const undefinedCheck = data.cast.filter(
    element =>
      (element.media_type === "movie" && element.release_date !== undefined) ||
      (element.media_type === "tv" && element.first_air_date !== undefined)
  );
  Object.keys(undefinedCheck).forEach(function(key) {
    undefinedCheck[key].media_type === "movie"
      ? (undefinedCheck[key].date = undefinedCheck[key].release_date)
      : (undefinedCheck[key].date = undefinedCheck[key].first_air_date);
    undefinedCheck[key].date = undefinedCheck[key].date.substring(0, 4);
    delete undefinedCheck[key].release_date;
  });
  const lodash = _.chain(undefinedCheck)
    .groupBy("date")
    .map((datails, year) => ({ year, datails }))
    .value();
  _.orderBy(lodash, "year", "asc");
  const sortedByYears = _.orderBy(lodash, "year", "desc");
  return { titleNumber: data.cast.length, credits: sortedByYears };
}

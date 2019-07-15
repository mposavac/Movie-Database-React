import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";

import { movieFetch } from "../../../store/actions/movieActions";

import Loading from "../../Loading";
import MainContent from "./components/MainContent";

export class MoviePage extends Component {
  componentDidMount() {
    window.addEventListener("scroll", this.onScroll, false);
    const movieId = this.props.match.params.movieId;
    this.props.movieFetch(movieId);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.onScroll, false);
    this.props.resetAction();
  }

  componentDidUpdate() {
    if (
      this.props.movieData.movie &&
      String(this.props.movieData.movie.id) !== this.props.match.params.movieId
    ) {
      window.scroll(0, 0);
      const movieId = this.props.match.params.movieId;
      this.props.resetAction();
      this.props.movieFetch(movieId);
      console.log("ComponentDidUpdate");
    }
  }

  onScroll = () => {
    if (
      window.pageYOffset > 150 &&
      !this.props.movieData.ratingLoaded &&
      !this.props.movieData.isLoading
    )
      this.props.loadRating();

    if (!this.props.movieData.fullCastShown) {
      if (!this.props.movieData.fixSmall && window.pageYOffset > 875) {
        this.props.fixSmallTite();
      }

      if (this.props.movieData.fixSmall && window.pageYOffset < 875) {
        this.props.fixSmallTite();
      }
    }
  };

  handleClickCast = () => {
    this.props.fullCast();
  };
  handleChangeHighlight = highlightIndex => {
    this.props.highlightChange(highlightIndex);
  };
  render() {
    const { movie, cast, similar, isLoading } = this.props.movieData;
    return (
      <React.Fragment>
        <Loading color={"mo"} isLoading={isLoading} />
        {movie && movie.status_code ? (
          <Redirect to="/error" />
        ) : (
          similar &&
          cast &&
          movie && (
            <MainContent
              data={this.props.movieData}
              handleClickCast={this.handleClickCast}
              handleChangeHighlight={this.handleChangeHighlight}
            />
          )
        )}
      </React.Fragment>
    );
  }
}
const mapStateToProps = state => {
  console.log("MOVIE state", state);
  return {
    movieData: state.movie
  };
};

const mapStateToDispatch = dispatch => {
  return {
    movieFetch: movieId => dispatch(movieFetch(movieId)),
    resetAction: () => dispatch({ type: "SET_DEFAULT" }),
    loadRating: () => dispatch({ type: "LOAD_RATING" }),
    fixSmallTite: () => dispatch({ type: "FIX_SMALL" }),
    fullCast: () => dispatch({ type: "FULL_CAST" }),
    highlightChange: highlightIndex =>
      dispatch({ type: "HIGHTLIGHT_CHANGE", data: highlightIndex })
  };
};

export default connect(
  mapStateToProps,
  mapStateToDispatch
)(MoviePage);

import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import { movieFetch } from '../../../store/actions/movieActions';
import {
  addFavourite,
  removeFavourite
} from '../../../store/actions/authActions';

import Loading from '../../Loading';
import MainContent from './components/MainContent';

export class MoviePage extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
    window.addEventListener('scroll', this.onScroll, false);
    const movieId = this.props.match.params.movieId;
    this.props.movieFetch(movieId);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.onScroll, false);
    this.props.resetAction();
  }

  componentDidUpdate() {
    if (
      this.props.movieData.movie &&
      String(this.props.movieData.movie.id) !== this.props.match.params.movieId
    ) {
      window.scrollTo(0, 0);
      const movieId = this.props.match.params.movieId;
      this.props.resetAction();
      this.props.movieFetch(movieId);
      console.log('ComponentDidUpdate');
    }
  }

  onScroll = () => {
    if (
      window.pageYOffset > 110 &&
      window.pageYOffset < 350 &&
      !this.props.movieData.ratingLoaded &&
      this.props.movieData.movie !== undefined
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
  handleFavourite = () => {
    if (this.checkIfFavourite())
      this.props.removeFavourite(this.props.movieData.movie.id);
    else this.props.addFavourite(this.props.movieData);
  };
  checkIfFavourite = () => {
    if (this.props.isLogged) {
      for (let favourite of this.props.favourites)
        if (favourite.id === this.props.movieData.movie.id) return true;

      return false;
    }
  };
  render() {
    const { movie, cast, similar } = this.props.movieData;
    return (
      <React.Fragment>
        <Loading color={'mo'} isLoading={movie ? false : true} />
        {movie && movie.status_code ? (
          <Redirect to="/error" />
        ) : similar && cast && movie ? (
          <MainContent
            data={this.props.movieData}
            isLogged={this.props.isLogged}
            isFavourite={this.checkIfFavourite()}
            handleClickCast={this.handleClickCast}
            handleChangeHighlight={this.handleChangeHighlight}
            handleFavouriteClick={this.handleFavourite}
          />
        ) : (
          <div style={{ minHeight: '100vh' }} />
        )}
      </React.Fragment>
    );
  }
}
const mapStateToProps = state => {
  console.log('MOVIE state', state);
  return {
    movieData: state.movie,
    isLogged: state.firebase.auth.uid ? true : false,
    favourites: state.auth.favourites
  };
};

const mapStateToDispatch = dispatch => {
  return {
    movieFetch: movieId => dispatch(movieFetch(movieId)),
    resetAction: () => dispatch({ type: 'SET_DEFAULT' }),
    loadRating: () => dispatch({ type: 'LOAD_RATING' }),
    fixSmallTite: () => dispatch({ type: 'FIX_SMALL' }),
    fullCast: () => dispatch({ type: 'FULL_CAST' }),
    highlightChange: highlightIndex =>
      dispatch({ type: 'HIGHTLIGHT_CHANGE', data: highlightIndex }),
    addFavourite: movieData => dispatch(addFavourite(movieData)),
    removeFavourite: movieId => dispatch(removeFavourite(movieId))
  };
};

export default connect(
  mapStateToProps,
  mapStateToDispatch
)(MoviePage);

import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import { tvFetch, seasonChange } from '../../../store/actions/tvActions';
import {
  addFavourite,
  removeFavourite
} from '../../../store/actions/authActions';

import Loading from '../../Loading';
import MainContent from './components/MainContent';

export class TvPage extends Component {
  componentDidMount() {
    window.addEventListener('scroll', this.onScroll, false);
    const tvId = this.props.match.params.tvId;
    this.props.tvFetch(tvId);
  }

  componentDidUpdate() {
    if (
      this.props.tvData.tv &&
      String(this.props.tvData.tv.id) !== this.props.match.params.tvId
    ) {
      window.scrollTo(0, 0);
      const tvId = this.props.match.params.tvId;
      this.props.resetAction();
      this.props.tvFetch(tvId);
      console.log('ComponentDidUpdate');
    }
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.onScroll, false);
    this.props.resetAction();
  }

  onScroll = () => {
    if (
      window.pageYOffset > 155 &&
      !this.props.tvData.ratingLoaded &&
      this.props.tvData.tv !== undefined
    )
      this.props.loadRating();

    if (!this.props.tvData.fullCastShown) {
      if (!this.props.tvData.fixSmall && window.pageYOffset > 875) {
        this.props.fixSmallTite();
      }

      if (this.props.tvData.fixSmall && window.pageYOffset < 875) {
        this.props.fixSmallTite();
      }
    }
  };

  handleClickCast = () => {
    this.props.fullCast();
  };

  handleClickSeason = seasonSelected => {
    this.props.seasonChange(seasonSelected);
  };

  handleChangeHighlight = highlightIndex => {
    this.props.highlightChange(highlightIndex);
  };

  handleFavourite = () => {
    if (this.checkIfFavourite())
      this.props.removeFavourite(this.props.tvData.tv.id);
    else this.props.addFavourite(this.props.tvData);
  };

  checkIfFavourite = () => {
    if (this.props.isLogged) {
      for (let favourite of this.props.favourites)
        if (favourite.id === this.props.tvData.tv.id) return true;

      return false;
    }
  };

  render() {
    const { tv, cast, similar, videos } = this.props.tvData;
    return (
      <React.Fragment>
        <Loading color={'tv'} isLoading={tv ? false : true} />
        {tv && tv.status_code ? (
          <Redirect to="/error" />
        ) : similar && cast && tv && videos ? (
          <MainContent
            data={this.props.tvData}
            isLogged={this.props.isLogged}
            isFavourite={this.checkIfFavourite()}
            handleClickCast={this.handleClickCast}
            handleClickSeason={this.handleClickSeason}
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
  console.log('TV state', state);
  return {
    tvData: state.tv,
    isLogged: state.firebase.auth.uid ? true : false,
    favourites: state.auth.favourites
  };
};

const mapStateToDispatch = dispatch => {
  return {
    tvFetch: tvId => dispatch(tvFetch(tvId)),
    seasonChange: seasonSelected => dispatch(seasonChange(seasonSelected)),
    resetAction: () => dispatch({ type: 'SET_DEFAULT' }),
    loadRating: () => dispatch({ type: 'LOAD_RATING' }),
    fixSmallTite: () => dispatch({ type: 'FIX_SMALL' }),
    fullCast: () => dispatch({ type: 'FULL_CAST' }),
    highlightChange: highlightIndex =>
      dispatch({ type: 'HIGHTLIGHT_CHANGE', data: highlightIndex }),
    addFavourite: tvData => dispatch(addFavourite(tvData)),
    removeFavourite: tvId => dispatch(removeFavourite(tvId))
  };
};
export default connect(
  mapStateToProps,
  mapStateToDispatch
)(TvPage);

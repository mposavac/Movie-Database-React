import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";

import { tvFetch, seasonChange } from "../../../store/actions/tvActions";

import Loading from "../../Loading";
import MainContent from "./components/MainContent";

export class TvPage extends Component {
  componentDidMount() {
    window.addEventListener("scroll", this.onScroll, false);
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
      console.log("ComponentDidUpdate");
    }
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.onScroll, false);
    this.props.resetAction();
  }

  onScroll = () => {
    if (
      window.pageYOffset > 155 &&
      !this.props.tvData.ratingLoaded &&
      !this.props.tvData.isLoading
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

  render() {
    const { tv, cast, similar, isLoading } = this.props.tvData;
    return (
      <React.Fragment>
        <Loading color={"tv"} isLoading={isLoading} />
        {tv && tv.status_code ? (
          <Redirect to="/error" />
        ) : (
          similar &&
          cast &&
          tv && (
            <MainContent
              data={this.props.tvData}
              handleClickCast={this.handleClickCast}
              handleClickSeason={this.handleClickSeason}
              handleChangeHighlight={this.handleChangeHighlight}
            />
          )
        )}
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  console.log("TV state", state);
  return {
    tvData: state.tv
  };
};

const mapStateToDispatch = dispatch => {
  return {
    tvFetch: tvId => dispatch(tvFetch(tvId)),
    seasonChange: seasonSelected => dispatch(seasonChange(seasonSelected)),
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
)(TvPage);

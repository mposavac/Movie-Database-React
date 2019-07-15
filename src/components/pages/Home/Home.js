import React, { Component } from "react";
import { connect } from "react-redux";

import { homeFetch, searchFetch } from "../../../store/actions/homeActions";

import Loading from "../../Loading";
import MainContent from "./components/HomeMainContent";

export class Home extends Component {
  state = {
    search: ""
  };
  componentDidMount() {
    this.props.homeFetch();
  }

  handleChangeSearch = event => {
    const query = event.target.value;
    this.setState({ search: query });
    this.props.searchFetch(query);
  };

  handleFocus = () => {
    const typingStatus = this.props.homeData.isTyping;
    !typingStatus && window.scrollTo(0, 0);
    this.props.typingAction();
  };

  render() {
    const {
      hotMovies,
      inTheaters,
      upcomingMovies,
      tvTrending,
      isLoading
    } = this.props.homeData;
    document.title = "The MDB";
    return (
      <React.Fragment>
        <Loading color={"mo"} isLoading={isLoading} />
        {hotMovies && inTheaters && upcomingMovies && tvTrending && (
          <MainContent
            data={this.props.homeData}
            onChange={this.handleChangeSearch}
            onFocus={this.handleFocus}
          />
        )}
      </React.Fragment>
    );
  }
}
const mapStateToProps = state => {
  console.log("HOME STATE", state);
  return {
    homeData: state.home
  };
};

const mapStateToDispatch = dispatch => {
  return {
    homeFetch: () => dispatch(homeFetch()),
    searchFetch: query => dispatch(searchFetch(query)),
    typingAction: () => dispatch({ type: "TYPING_ACTION" })
  };
};

export default connect(
  mapStateToProps,
  mapStateToDispatch
)(Home);

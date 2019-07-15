import React, { Component } from "react";
import { connect } from "react-redux";

import { listFetch } from "../../../store/actions/listActions";

import Container from "./components/Container";
import PageIndicator from "./components/PageIndicator";
import Loading from "../../Loading";

export class TvShows extends Component {
  componentDidMount() {
    this.props.listFetch("/tvShows", 1);
  }

  componentDidUpdate() {
    if (
      this.props.listData.list &&
      this.props.match.params.page &&
      String(this.props.listData.list.page) !== this.props.match.params.page
    ) {
      this.props.resetAction();
      this.props.listFetch("/tvShows", this.props.match.params.page);
    }
  }

  componentWillUnmount() {
    this.props.resetAction();
  }
  render() {
    document.title = "Best of TV";
    const { list: tv, indicator, isLoading } = this.props.listData;
    return (
      <React.Fragment>
        <Loading color={"tv"} isLoading={isLoading} />
        {indicator === "/tvShows" && (
          <section className="list-grid-container list-tv-shows">
            {tv &&
              tv.results.map(element => (
                <Container
                  key={element.id}
                  tv={element}
                  indicator={indicator}
                />
              ))}
          </section>
        )}

        {tv && (
          <PageIndicator
            page={tv.page}
            totalPages={tv.total_pages}
            indicator={indicator}
          />
        )}
      </React.Fragment>
    );
  }
}
const mapStateToProps = state => {
  return {
    listData: state.list
  };
};

const mapStateToDispatch = dispatch => {
  return {
    listFetch: (indicator, page) => dispatch(listFetch(indicator, page)),
    resetAction: () => dispatch({ type: "SET_DEFAULT" })
  };
};

export default connect(
  mapStateToProps,
  mapStateToDispatch
)(TvShows);

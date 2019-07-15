import React, { Component } from "react";
import { connect } from "react-redux";

import { listFetch } from "../../../store/actions/listActions";

import Container from "./components/Container";
import PageIndicator from "./components/PageIndicator";
import Loading from "../../Loading";

export class TopRated extends Component {
  componentDidMount() {
    this.props.listFetch("/topRated", 1);
  }

  componentDidUpdate() {
    if (
      this.props.listData.list &&
      this.props.match.params.page &&
      String(this.props.listData.list.page) !== this.props.match.params.page
    ) {
      this.props.resetAction();
      this.props.listFetch("/topRated", this.props.match.params.page);
    }
  }
  componentWillUnmount() {
    this.props.resetAction();
  }
  render() {
    document.title = "Top Rated";
    const { list: movie, indicator, isLoading } = this.props.listData;
    return (
      <React.Fragment>
        <Loading color={"mo"} isLoading={isLoading} />
        {indicator === "/topRated" && (
          <section className="list-grid-container">
            {movie &&
              movie.results.map(element => (
                <Container
                  key={element.id}
                  movie={element}
                  indicator={indicator}
                />
              ))}
          </section>
        )}

        {movie && (
          <PageIndicator
            page={movie.page}
            totalPages={movie.total_pages}
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
)(TopRated);

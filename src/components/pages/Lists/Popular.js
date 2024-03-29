import React, { Component } from "react";
import { connect } from "react-redux";

import { listFetch } from "../../../store/actions/listActions";

import Container from "./components/Container";
import PageIndicator from "./components/PageIndicator";
import Loading from "../../Loading";

export class List extends Component {
  componentDidMount() {
    this.props.listFetch("/popular", 1);
  }

  componentDidUpdate() {
    if (
      this.props.listData.list &&
      this.props.match.params.page &&
      String(this.props.listData.list.page) !== this.props.match.params.page
    ) {
      this.props.resetAction();
      this.props.listFetch("/popular", this.props.match.params.page);
    }
  }

  componentWillUnmount() {
    this.props.resetAction();
  }

  render() {
    document.title = "Trending";
    const { list: movie, indicator } = this.props.listData;
    return (
      <React.Fragment>
        <Loading color={"mo"} isLoading={movie ? false : true} />
        {indicator === "/popular" && (
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
  console.log(state);
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
)(List);

import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { getFavourites } from "../../../../store/actions/authActions";

export class UserFavourites extends Component {
  state = {
    sortOption: ""
  };
  componentDidMount() {
    this.props.getFavourites();
  }
  handleSortOption = event => {
    switch (event.target.value) {
      case "Name":
        this.setState({ sortOption: "Name" });
        break;
      case "Rating":
        this.setState({ sortOption: "Rating" });
        break;
      case "Year":
        this.setState({ sortOption: "Year" });
        break;
      default:
        this.setState({ sortOption: "Random" });
        break;
    }
  };
  sortArray = () => {
    let favourites = this.props.favourites;
    switch (this.state.sortOption) {
      case "Name":
        return favourites.sort((a, b) => (a.title > b.title ? 1 : -1));
      case "Rating":
        return favourites.sort((a, b) => b.rating - a.rating);
      case "Year":
        return favourites.sort((a, b) => a.release_date - b.release_date);
      case "Random":
        return favourites.sort((a, b) => a.id - b.id);
      default:
        return this.props.favourites;
    }
  };
  render() {
    let favourites = this.sortArray();
    console.log(favourites);
    return (
      <div className="user-profile">
        <div className="background">
          <div className="lines">
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
          </div>
        </div>
        <div className="container">
          <h2>
            {favourites.length === 0
              ? "You don't have any favourites"
              : "This are your favourite titles"}
          </h2>
          <hr />
          <select name="sort" id="sort" onChange={this.handleSortOption}>
            <option value="Random">Random</option>
            <option value="Name">Name</option>
            <option value="Rating">Rating</option>
            <option value="Year">Year</option>
          </select>
          <div className="favourites-grid">
            {favourites.length === 0 && (
              <Link to={"/popular"} className="link-add">
                Click to add titles
              </Link>
            )}
            {favourites &&
              favourites.map(element => (
                <div className="favourite" key={element.id}>
                  {" "}
                  <Link to={`/${element.indicator}/${element.id}`}>
                    <img
                      src={
                        "https://image.tmdb.org/t/p/w500" + element.poster_path
                      }
                      alt="noImg"
                    />
                    <h5 className="title">
                      {element.title} <span>({element.release_date})</span>
                    </h5>
                  </Link>
                </div>
              ))}
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    favourites: state.auth.favourites
  };
};
const mapStateToDispatch = dispatch => {
  return {
    getFavourites: () => dispatch(getFavourites())
  };
};
export default connect(
  mapStateToProps,
  mapStateToDispatch
)(UserFavourites);

import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { signOut, getFavourites } from "../../../../store/actions/authActions";

export class UserFavourites extends Component {
  componentDidMount() {
    this.props.getFavourites();
  }
  render() {
    return (
      <div className="user-profile">
        <div className="container">
          <button onClick={this.props.signOut}>LOG OUT</button>
          <div className="favourites-grid">
            {this.props.favourites &&
              this.props.favourites.map(element => (
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
                      {element.title} <span>{element.release_date}</span>
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
    signOut: () => dispatch(signOut()),
    getFavourites: () => dispatch(getFavourites())
  };
};
export default connect(
  mapStateToProps,
  mapStateToDispatch
)(UserFavourites);

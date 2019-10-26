import React, { Component } from "react";
import { connect } from "react-redux";

import Login from "./components/LoginForm";
import SignUp from "./components/SignUpForm";
import OverlayMsg from "./components/OverlayMsg";
import UserFavourites from "./components/UserFavourites";

export class Account extends Component {
  state = {
    background: undefined,
    optionShowed: "login"
  };
  componentDidMount() {
    fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=5c9b7f26ee7ebb9e910bf1ec551bf09b&language=en-US&page=1"
    )
      .then(res => res.json())
      .then(data => {
        this.setState({ background: data.results[0].backdrop_path });
      });
  }

  handleClick = () => {
    if (this.state.optionShowed === "login")
      this.setState({ optionShowed: "signUp" });
    else this.setState({ optionShowed: "login" });
  };
  render() {
    const { background, optionShowed } = this.state;
    const backgroundStyle = {
      background: `url(https://image.tmdb.org/t/p/original${background}) no-repeat center/cover`
    };
    document.title = "Account";

    return (
      <React.Fragment>
        <div
          className="account-background"
          style={background !== undefined ? backgroundStyle : undefined}
        />
        <div className="account-page">
          {this.props.isLogged ? (
            <UserFavourites />
          ) : (
            <div
              className={
                "account-container " +
                (optionShowed === "login" ? "" : "right-panel-active")
              }
            >
              <Login />
              <SignUp />
              <OverlayMsg onClick={this.handleClick} />
            </div>
          )}
        </div>
      </React.Fragment>
    );
  }
}
const mapStateToProps = state => {
  console.log("ACCOUNT", state);
  return {
    isLogged: state.firebase.auth.uid ? true : false
  };
};

const mapStateToDispatch = dispatch => {
  return {};
};

export default connect(
  mapStateToProps,
  mapStateToDispatch
)(Account);

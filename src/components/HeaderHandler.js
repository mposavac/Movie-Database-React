import React, { Component } from "react";
import { connect } from "react-redux";
import Header from "./Header";

import { signOut } from "../store/actions/authActions";
export class HeaderHandler extends Component {
  state = {
    sideMenuShown: false
  };

  handleMenuClick = () => {
    this.setState(prevState => {
      return { sideMenuShown: !prevState.sideMenuShown };
    });
  };
  setStateToFalse = () => {
    this.setState({ sideMenuShown: false });
  };

  render() {
    return (
      <Header
        shown={this.state.sideMenuShown}
        isLogged={this.props.isLogged}
        handleMenuClick={this.handleMenuClick}
        handleSignOut={this.props.signOut}
        hideMenu={this.setStateToFalse}
        menuColor={this.props.location.pathname.substring(1, 3)}
      />
    );
  }
}
const mapStateToProps = state => {
  return {
    isLogged: state.firebase.auth.uid ? true : false
  };
};

const mapStateToDispatch = dispatch => {
  return {
    signOut: () => dispatch(signOut())
  };
};

export default connect(
  mapStateToProps,
  mapStateToDispatch
)(HeaderHandler);

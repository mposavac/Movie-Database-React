import React, { Component } from "react";

import Header from "./Header";

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
        handleMenuClick={this.handleMenuClick}
        hideMenu={this.setStateToFalse}
        menuColor={this.props.location.pathname.substring(1, 3)}
      />
    );
  }
}

export default HeaderHandler;

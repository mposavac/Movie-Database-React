import React, { Component } from "react";
import { Link } from "react-router-dom";

import { connect } from "react-redux";

export class Login extends Component {
  state = {
    userName: "",
    password: ""
  };
  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };
  handleSubmit = event => {
    event.preventDefault();
    //TODO: this.props.login(this.state)
  };

  render() {
    //console.log(this.state);
    return (
      <section className="form-container log-in-container">
        <form onSubmit={this.handleSubmit}>
          <h2>Log in</h2>
          <input
            type="text"
            name="userName"
            placeholder="Username or e-mail"
            id="userLogin"
            required
            pattern="[A-Za-z0-9].{5,}"
            onChange={this.handleChange}
          />
          <input
            type="password"
            name="password"
            placeholder="Enter Password"
            id="passwordLogin"
            required
            pattern=".{6,}"
            onChange={this.handleChange}
          />
          <Link to="/error">Forgot your password?</Link>
          <button type="submit">Log in</button>
        </form>
      </section>
    );
  }
}

const mapStateToProps = state => {
  console.log("LOGIN", state);
  return {
    auth: state.firebase.auth
  };
};

const mapStateToDispatch = dispatch => {
  return {};
};

export default connect(
  mapStateToProps,
  mapStateToDispatch
)(Login);

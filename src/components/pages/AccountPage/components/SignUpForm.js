import React, { Component } from "react";

import { connect } from "react-redux";

export class SignIn extends Component {
  state = {
    userName: "",
    userMail: "",
    password: "",
    passwordRepeat: ""
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    if (this.state.password !== this.state.passwordRepeat) {
      console.log("IZBACITI ERROR za sifre");
    } else {
      console.log("NAPRAVLJEN RACUN");
    }
  };

  render() {
    //console.log(this.state);
    return (
      <section className="form-container sign-up-container">
        <form onSubmit={this.handleSubmit}>
          <h2>Create Account</h2>
          <input
            type="text"
            name="userName"
            placeholder="Username"
            id="user"
            required
            pattern="[A-Za-z0-9].{5,}"
            onChange={this.handleChange}
          />
          <input
            type="text"
            name="userMail"
            placeholder="E-mail"
            id="e-mail"
            required
            onChange={this.handleChange}
          />
          <input
            type="password"
            name="password"
            placeholder="Enter Password"
            id="password"
            required
            pattern=".{6,}"
            onChange={this.handleChange}
          />
          <input
            type="password"
            name="passwordRepeat"
            placeholder="Repeat Password"
            required
            pattern=".{6,}"
            onChange={this.handleChange}
          />
          <button>Sign Up</button>
        </form>
      </section>
    );
  }
}

const mapStateToProps = state => {
  return {};
};

const mapStateToDispatch = dispatch => {
  return {};
};

export default connect(
  mapStateToProps,
  mapStateToDispatch
)(SignIn);

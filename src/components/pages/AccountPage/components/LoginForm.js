import React, { Component } from "react";
import { Link } from "react-router-dom";

import { connect } from "react-redux";
import { signIn } from "../../../../store/actions/authActions";

export class Login extends Component {
  state = {
    email: "",
    password: ""
  };
  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };
  handleSubmit = event => {
    event.preventDefault();
    this.props.signIn(this.state);
  };

  render() {
    //console.log(this.state);
    return (
      <section className="form-container log-in-container">
        <form onSubmit={this.handleSubmit}>
          <h2>Log in</h2>
          <input
            type="text"
            name="email"
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
          <div
            className={
              this.props.authStatus === "Login failed"
                ? "error-msg error-msg-anim"
                : "error-msg"
            }
          >
            {this.props.authStatus === "Login failed" && (
              <p>{this.props.authStatus}</p>
            )}
          </div>
          <button type="submit" className="btn login-btn">
            Log in
          </button>
        </form>
      </section>
    );
  }
}

const mapStateToProps = state => {
  console.log("LOGIN", state);
  return {
    authStatus: state.auth.status
  };
};

const mapStateToDispatch = dispatch => {
  return {
    signIn: userData => dispatch(signIn(userData))
  };
};

export default connect(
  mapStateToProps,
  mapStateToDispatch
)(Login);

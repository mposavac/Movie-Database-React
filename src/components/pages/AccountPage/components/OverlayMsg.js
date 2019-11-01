import React from "react";

export default function OverlayMsg(props) {
  return (
    <div className="overlay-container">
      <div className="overlay">
        <div className="overlay-panel panel-left">
          <h2>Welcome Back!</h2>
          <p>
            Don't have an account? (Why?)
            <br /> Make it already.
          </p>
          <button className="btn-contrast" onClick={props.onClick}>
            Sing Up
          </button>
        </div>
        <div className="overlay-panel panel-right">
          <h2>Hello and Welcome</h2>
          <p>
            Wait... You do have an account, right?
            <br /> Log in then!
          </p>
          <button className="btn-contrast" onClick={props.onClick}>
            Log In
          </button>
        </div>
      </div>
    </div>
  );
}

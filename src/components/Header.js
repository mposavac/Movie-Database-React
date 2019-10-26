import React from "react";
import { NavLink } from "react-router-dom";

export default function Header(props) {
  const navigation = ["POPULAR", "TOP RATED", "TV SHOWS"];
  if (props.isLogged) navigation.push("ACCOUNT");
  else navigation.push("LOGIN");
  const path = ["/popular", "/topRated", "/tvShows", "/account"];
  return (
    <header
      className={
        props.menuColor === "tv" || props.menuColor === "pe"
          ? props.menuColor
          : ""
      }
    >
      <div className="header-container">
        <div className="header-logo">
          <NavLink to="/">
            <h1>TMDBase</h1>
          </NavLink>
        </div>
        <nav>
          <ul>
            {navigation.map((element, i) => (
              <li key={i}>
                <NavLink to={path[i]}>{element}</NavLink>
              </li>
            ))}
          </ul>
          <div className="lines-container" onClick={props.handleMenuClick}>
            <div
              className="line"
              style={
                props.shown
                  ? { transform: "translateY(11px) rotate(45deg) " }
                  : null
              }
            />
            <div
              className="line"
              style={props.shown ? { opacity: "0" } : { opacity: "1" }}
            />
            <div
              className="line"
              style={
                props.shown
                  ? { transform: "translateY(-11px) rotate(-45deg)" }
                  : null
              }
            />
          </div>
        </nav>
      </div>
      <div className={"side-menu " + (props.shown ? "side-active" : "")}>
        <ul>
          {navigation.map((element, i) => (
            <li key={i} onClick={props.hideMenu}>
              <NavLink to={path[i]}>{element}</NavLink>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}

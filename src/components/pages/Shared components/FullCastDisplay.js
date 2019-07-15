import React from "react";
import { Link } from "react-router-dom";
import FixedInfoSmall from "./FixedInfoSmall";
// import { Transition, animated } from "react-spring/renderprops";

import "../../../style/fullCast.scss";

export default function FullCastDisplay(props) {
  const content = props.indicator === "movie" ? props.movie : props.tv;
  window.scrollTo(0, 0);
  return (
    <section
      className={
        "full-cast-display " + (props.indicator === "tv" ? "full-cast-tv" : "")
      }
    >
      <div className="heading">
        <i onClick={props.onClick} className="far fa-times-circle close" />
        <FixedInfoSmall
          content={content}
          indicator={props.indicator}
          fixSmall={"true"}
        />
      </div>
      {props.cast.cast.map(element => (
        <div
          key={element.id + +new Date().getMilliseconds()}
          className="casting"
        >
          <Link to={"/person/" + element.id}>
            <img
              alt="noPicture"
              src={"https://image.tmdb.org/t/p/w500" + element.profile_path}
            />
          </Link>
          <p className="castName">{element.name}</p>
          <p className="role">({element.character})</p>
        </div>
      ))}
      <div className="casting-crew">
        {props.cast.crew.length !== 0 ? <h4>Crew:</h4> : ""}
        {props.cast.crew.map(element => (
          <p key={element.id + Math.random()}>
            <span>{element.job}: </span>
            {element.name}
          </p>
        ))}
      </div>
    </section>
  );
}

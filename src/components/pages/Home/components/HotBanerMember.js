import React from "react";
import { Link } from "react-router-dom";

export default function HotBanerMember(props) {
  return (
    <div className={props.containerClass + " home-hot"}>
      <Link to={"/movie/" + props.movie.id}>
        <img
          className="hot-img"
          alt="NoPosterAvaible"
          src={
            "https://image.tmdb.org/t/p/" +
            (props.containerClass === "hot-first" ||
            props.containerClass === "hot-six"
              ? "original"
              : "w500") +
            props.movie.backdrop_path
          }
        />
        <div className="hot-img-box">
          <h4 className="hot-img-title">{props.movie.title}</h4>
        </div>
      </Link>
    </div>
  );
}

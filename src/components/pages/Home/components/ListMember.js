import React from "react";
import { Link } from "react-router-dom";

export default function ListMember(props) {
  return (
    <Link to={"/movie/" + props.movie.id}>
      <li>
        <img
          src={"https://image.tmdb.org/t/p/w500" + props.movie.poster_path}
          alt="noImg"
        />
        <div className="title">
          <p>{props.movie.title}</p>
          <span>({props.movie.vote_average} / 10)</span>
        </div>
      </li>
    </Link>
  );
}

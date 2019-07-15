import React from "react";
import { Link } from "react-router-dom";

export default function ListMember(props) {
  return (
    <Link to={"/movie/" + props.movie.id}>
      <li>
        {props.movie.title} <span>({props.movie.vote_average} / 10)</span>
      </li>
    </Link>
  );
}

import React from "react";
import { Link } from "react-router-dom";

export default function OnTvMember(props) {
  return (
    <Link to={"/tv/" + props.tvTrending.id}>
      <div className="tv-content">
        <img
          src={"https://image.tmdb.org/t/p/w500" + props.tvTrending.poster_path}
          alt="NoImage"
        />
        <p className="tv-title">{props.tvTrending.name}</p>

        <p className="tv-vote">{props.tvTrending.vote_average} / 10</p>
        <p className="tv-date">
          First aired: {props.tvTrending.first_air_date}
        </p>
      </div>
    </Link>
  );
}

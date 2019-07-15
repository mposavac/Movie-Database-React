import React from "react";
import { Link } from "react-router-dom";

export default function OnTvMember(props) {
  return (
    <div className="tv-content">
      <Link to={"/tv/" + props.tvTrending.id}>
        <img
          src={"https://image.tmdb.org/t/p/w500" + props.tvTrending.poster_path}
          alt="NoImage"
        />
      </Link>
      <p className="tv-title">{props.tvTrending.name}</p>
    </div>
  );
}

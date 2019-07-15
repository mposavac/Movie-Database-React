import React from "react";
import { Link } from "react-router-dom";

export default function Container(props) {
  const indicator =
    props.indicator === "/popular" || props.indicator === "/topRated"
      ? "movie"
      : "tv";
  const content =
    props.indicator === "/popular" || props.indicator === "/topRated"
      ? props.movie
      : props.tv;
  return (
    <div className="list-content">
      <div className="content-img-container">
        <Link to={(indicator === "movie" ? "/movie/" : "/tv/") + content.id}>
          <img
            className="content-poster"
            alt="No poster available"
            src={"https://image.tmdb.org/t/p/w500" + content.poster_path}
          />
          <p className="content-rating">
            {content.vote_average === 0
              ? "Not Rated"
              : content.vote_average + " / 10"}
          </p>
        </Link>
      </div>
      <div className="content-info">
        <Link to={(indicator === "movie" ? "/movie/" : "/tv/") + content.id}>
          <h3 className="content-title">
            {indicator === "movie" ? content.title : content.name}
          </h3>
        </Link>
        <h4 className="content-date">
          {indicator === "movie"
            ? content.release_date
            : content.first_air_date.substring(0, 4)}
        </h4>
        <p className="content-description">
          {content.overview.length > 300
            ? content.overview.substring(0, 300) + " ..."
            : content.overview}
        </p>
      </div>
    </div>
  );
}

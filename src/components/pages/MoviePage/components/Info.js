import React from "react";
import RatingBar from "../../Shared components/RatingBar";

export default function Info(props) {
  return (
    <section className="mtv-info">
      <RatingBar
        rating={props.movie.vote_average * 10}
        ratingLoaded={props.ratingLoaded}
      />
      <h4 className="mtv-original-title">{props.movie.original_title} </h4>
      <h4 className="mtv-date">
        ( {props.movie.release_date.substring(0, 4)} )
      </h4>
      {props.isLogged && (
        <i
          className="far fa-heart"
          onClick={props.handleClick}
          style={
            props.isFavourite
              ? { fontWeight: "900", color: "orange" }
              : { fontWeight: "400", color: "red" }
          }
        />
      )}
      <p className="mtv-description">{props.movie.overview}</p>
      <div className="mtv-details">
        <p className="mtv-rated">{props.movie.adult ? "R" : "PG"}</p>
        <p className="mtv-run-time">{props.movie.runtime} min</p>
        <p className="mtv-category">
          {props.movie.genres.map(genres => genres.name).join(",  ")}
        </p>
        <hr />
      </div>
    </section>
  );
}

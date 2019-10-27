import React from "react";
import RatingBar from "./RatingBar";

export default function Info(props) {
  const indicator = props.movie ? "movie" : "tv";
  return (
    <section className="mtv-info">
      <RatingBar
        rating={props[indicator].vote_average * 10}
        ratingLoaded={props.ratingLoaded}
        indicator={indicator}
      />
      {props.movie ? (
        <h4 className="mtv-original-title">{props.movie.original_title} </h4>
      ) : (
        <h4 className="mtv-original-title whiteT">
          {props.tv.number_of_seasons} seasons
        </h4>
      )}
      <h4 className="mtv-date">
        ({" "}
        {props.movie
          ? props.movie.release_date.substring(0, 4)
          : props.tv.first_air_date.substring(0, 4)}
        )
      </h4>

      {props.isLogged && (
        <i
          className="far fa-heart"
          onClick={props.handleClick}
          style={
            props.isFavourite
              ? { fontWeight: "900", color: "orange" }
              : { fontWeight: "400", color: "#f1614b" }
          }
        />
      )}
      {props.tv && (
        <h4 className="mtv-air-date">
          {props.tv.next_episode_to_air === null ? (
            <span>Last episode: </span>
          ) : (
            <span>Next episode: </span>
          )}
          {props.tv.next_episode_to_air === null
            ? props.tv.last_air_date
            : props.tv.next_episode_to_air.name}
          {props.tv.next_episode_to_air !== null &&
            " (" + props.tv.next_episode_to_air.air_date + ")"}
        </h4>
      )}

      <p className="mtv-description whiteT">{props[indicator].overview}</p>
      <div className="mtv-details whiteT">
        <p className="mtv-tv">{props[indicator].adult ? "R" : "PG"}</p>
        <p className="mtv-run-time">
          {props.movie
            ? props.movie.runtime
            : props.tv.episode_run_time.join("-")}{" "}
          min
        </p>
        <p className="mtv-category">
          {props[indicator].genres.map(genres => genres.name).join(",  ")}
        </p>
        <hr />
      </div>
    </section>
  );
}

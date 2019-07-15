import React from "react";
import RatingBar from "../../Shared components/RatingBar";

export default function Info(props) {
  return (
    <section className="mtv-info">
      <RatingBar
        rating={props.tv.vote_average * 10}
        ratingLoaded={props.ratingLoaded}
        indicator={"tv"}
      />
      <h4 className="mtv-original-title whiteT">
        {props.tv.number_of_seasons} seasons
      </h4>
      <h4 className="mtv-date">
        ( {props.tv.first_air_date.substring(0, 4)} )
      </h4>
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
      <p className="mtv-description whiteT">{props.tv.overview}</p>
      <div className="mtv-details whiteT">
        <p className="mtv-tv">{props.tv.adult ? "R" : "PG"}</p>
        <p className="mtv-run-time">{props.tv.episode_run_time} min</p>
        <p className="mtv-category">
          {props.tv.genres.map(genres => genres.name).join(",  ")}
        </p>
        <hr />
      </div>
    </section>
  );
}

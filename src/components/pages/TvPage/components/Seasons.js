import React from "react";

export default function(props) {
  return (
    <section className="tv-page-seasons whiteT">
      <div>
        <ul className="tv-page-season-flex">
          {props.tv.seasons.map((element, i) =>
            element.season_number === props.active ? (
              <li key={element.name} className="active-season">
                <h4>{element.name}</h4>
              </li>
            ) : (
              <li
                key={element.name}
                onClick={props.onClickSeason.bind(this, i)}
              >
                <h4>{element.name}</h4>
              </li>
            )
          )}
        </ul>
      </div>
      <hr />
      <div className="seasons-episodes-flex">
        <img
          className="season-poster"
          alt="NoImg"
          src={"https://image.tmdb.org/t/p/w500" + props.episodes.poster_path}
        />
        <div className="episode-list">
          <ul>
            {props.episodes.episodes.map(element => (
              <li key={element.name}>
                {element.episode_number}. {element.name}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

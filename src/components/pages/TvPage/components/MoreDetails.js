import React from "react";

export default function MoreDetails(props) {
  return (
    <section className="mtv-more-details">
      <div>
        <p>
          <span>Network:</span>
        </p>
        {props.tv.networks.map(element => (
          <img
            className="tv-network"
            alt="NoImg"
            key={element.logo_path}
            src={"https://image.tmdb.org/t/p/w500" + element.logo_path}
          />
        ))}
      </div>
      <p>
        <span>Language:</span> {props.tv.original_language}
      </p>
      <p>
        <span>Production companies: </span>
        {props.tv.production_companies.map(element => element.name).join(", ")}
      </p>
      <a
        className="imdb-btn"
        href={"https://www.imdb.com/title/" + props.imdbId}
        target="_blank"
        rel="noopener noreferrer"
      >
        IMDb
      </a>
      <a
        className="homepage-btn"
        href={props.tv.homepage}
        target="_blank"
        rel="noopener noreferrer"
      >
        HomePage
      </a>
    </section>
  );
}

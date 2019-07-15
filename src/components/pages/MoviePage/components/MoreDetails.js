import React from "react";

export default function MoreDetails(props) {
  return (
    <section className="mtv-more-details">
      <div>
        <p>Tagline: "{props.movie.tagline}"</p>
        <p>Spoken language:{props.movie.language}</p>
        <p>Budget: $ {props.movie.budget}</p>
        <p>Ravenue: $ {props.movie.revenue}</p>
        <p>Status: {props.movie.status}</p>
        <a
          className="imdb-btn"
          href={"https://www.imdb.com/title/" + props.movie.imdb_id}
          target="_blank"
          rel="noopener noreferrer"
        >
          IMDb
        </a>
        <a
          className="homepage-btn"
          href={props.movie.homepage}
          target="_blank"
          rel="noopener noreferrer"
        >
          HomePage
        </a>
      </div>
      <div className="mtv-production">
        <h3>Production:</h3>
        <p className="mtv-production-companies">
          {" "}
          {props.movie.production_companies
            .map(element => element.name)
            .join(", ")}
        </p>
      </div>
    </section>
  );
}

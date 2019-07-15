import React from "react";
import { Link } from "react-router-dom";

export default function KnownForComponent(props) {
  return (
    <React.Fragment>
      <h3 className="known-for-year">{props.credits.year}</h3>
      <div className="known-for-title">
        {props.credits.datails.map(element => (
          <Link
            key={element.id}
            to={
              element.media_type === "movie"
                ? "/movie/" + element.id
                : "/tv/" + element.id
            }
          >
            <h4>
              {element.title === undefined ? element.name : element.title}
            </h4>
            <p> ({element.character})</p>
          </Link>
        ))}
      </div>
    </React.Fragment>
  );
}

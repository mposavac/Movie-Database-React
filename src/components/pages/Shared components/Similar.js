import React from "react";
import SimilarM from "./SimilarMember";
import { Link } from "react-router-dom";

export default function Similar(props) {
  const { results } = props.similar;
  return (
    <section className="mtv-similar-titles">
      <h3 className={props.indicator === "tv" ? "whiteT" : undefined}>
        You may also like this titles:{" "}
      </h3>
      <div className="similar-highlight">
        <Link
          to={
            (props.indicator === "tv" ? "/tv/" : "/movie/") +
            results[props.index].id
          }
        >
          <img
            className="similar-poster-small"
            src={
              results[0].poster_path === null
                ? "https://gamepedia.cursecdn.com/arksurvivalevolved_gamepedia/a/ac/No_image_available.svg"
                : "https://image.tmdb.org/t/p/w500" +
                  results[props.index].poster_path
            }
            alt="NoMoviePoster"
          />
          <div className="title-container">
            <h4 className="title">
              {props.indicator === "movie"
                ? results[props.index].title
                : results[props.index].name}
            </h4>
            <p className="description">
              {results[props.index].overview.length > 300
                ? results[props.index].overview.substring(0, 300) + " ..."
                : results[props.index].overview}
            </p>
          </div>
        </Link>
      </div>
      <div className="grid-similar">
        {results.map((element, i) => (
          <SimilarM
            key={element.id}
            content={element}
            index={i}
            handleChangeHighlight={props.handleChangeHighlight}
            indicator={props.indicator}
          />
        ))}
      </div>
    </section>
  );
}

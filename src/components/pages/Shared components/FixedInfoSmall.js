import React from "react";

export default function FixedInfoSmall(props) {
  const { content, fixSmall: fixed, indicator } = props;
  return (
    <div
      className={"fixed-small-info " + (fixed && "fixed-active")}
      onClick={() => {
        window.scrollTo(0, 0);
      }}
    >
      <div className="fixed-img-container">
        <img
          src={"https://image.tmdb.org/t/p/original" + content.backdrop_path}
          alt="NoImg"
        />
      </div>
      <h3 className="fixed-small-title">
        {indicator === "movie" ? content.title : content.name}{" "}
        <span>
          (
          {indicator === "movie"
            ? content.release_date.substring(0, 4)
            : content.first_air_date.substring(0, 4)}
          )
        </span>
      </h3>
    </div>
  );
}

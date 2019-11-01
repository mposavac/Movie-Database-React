import React from "react";

export default function SimilarM(props) {
  return (
    <div
      className="similar-small"
      onClick={() => {
        props.handleChangeHighlight(props.index);
      }}
    >
      <img
        className="similar-poster-small"
        src={
          props.content.poster_path === null
            ? "https://gamepedia.cursecdn.com/arksurvivalevolved_gamepedia/a/ac/No_image_available.svg"
            : "https://image.tmdb.org/t/p/w500" + props.content.poster_path
        }
        alt="Movie poster"
      />
      <p className="similar-title-small">
        {props.indicator === "movie" ? props.content.title : props.content.name}
      </p>
    </div>
  );
}

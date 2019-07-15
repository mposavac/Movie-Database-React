import React from "react";
import MtvImgCont from "../../Shared components/MtvImgCont";
import Info from "./Info";
import Casting from "./Casting";
import MoreDeatils from "./MoreDetails";
import Similar from "../../Shared components/Similar";
import FullCastDisplay from "../../Shared components/FullCastDisplay";

export default function MainContent(props) {
  const {
    movie,
    indicator,
    similar,
    ratingLoaded,
    cast,
    fullCastShown,
    fixSmall,
    highlightIndex
  } = props.data;
  document.title = movie.title;
  return (
    <React.Fragment>
      {!fullCastShown && (
        <main className="mtv-page movie-container">
          <MtvImgCont movie={movie} indicator={indicator} fixSmall={fixSmall} />
          <Info movie={movie} ratingLoaded={ratingLoaded} />
          <Casting cast={cast} onClick={props.handleClickCast} />
          <MoreDeatils movie={movie} />
          {similar.results.length !== 0 && (
            <Similar
              indicator={indicator}
              similar={similar}
              index={highlightIndex}
              handleChangeHighlight={props.handleChangeHighlight}
            />
          )}
        </main>
      )}
      {fullCastShown && (
        <FullCastDisplay
          fullCastShown={fullCastShown}
          indicator={indicator}
          movie={movie}
          cast={cast}
          onClick={props.handleClickCast}
        />
      )}
    </React.Fragment>
  );
}

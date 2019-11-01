import React from 'react';
import Loading from '../../../Loading';
import Casting from './Casting';
import Info from '../../Shared components/Info';
import MoreDetails from './MoreDetails';
import Seasons from './Seasons';
import Similar from '../../Shared components/Similar';
import MtvImgCont from '../../Shared components/MtvImgCont';
import FullCastDisplay from '../../Shared components/FullCastDisplay';

export default function MainContent(props) {
  document.title = props.data.tv.name;
  const {
    fullCastShown,
    indicator,
    tv,
    cast,
    similar,
    season,
    imdbId,
    videos,
    ratingLoaded,
    fixSmall,
    activeSeason,
    highlightIndex
  } = props.data;
  return (
    <React.Fragment>
      {!fullCastShown && (
        <main className="mtv-page tv-page" onScroll={props.handleScroll}>
          <MtvImgCont tv={tv} indicator={indicator} fixSmall={fixSmall} />
          <Info
            tv={tv}
            videos={videos.results}
            ratingLoaded={ratingLoaded}
            handleClick={props.handleFavouriteClick}
            isLogged={props.isLogged}
            isFavourite={props.isFavourite}
          />
          <Casting
            cast={cast}
            created={tv.created_by}
            onClick={props.handleClickCast}
          />
          {season === undefined ? (
            <Loading color={'tv'} />
          ) : (
            <Seasons
              episodes={season}
              active={activeSeason}
              tv={tv}
              onClickSeason={props.handleClickSeason}
            />
          )}
          <MoreDetails tv={tv} imdbId={imdbId} />
          {similar.results.length !== 0 && (
            <Similar
              similar={similar}
              indicator={indicator}
              index={highlightIndex}
              handleChangeHighlight={props.handleChangeHighlight}
            />
          )}
        </main>
      )}

      {fullCastShown && (
        <FullCastDisplay
          indicator={indicator}
          tv={tv}
          cast={cast}
          onClick={props.handleClickCast}
        />
      )}
    </React.Fragment>
  );
}

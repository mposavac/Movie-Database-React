import React from "react";
import FixedInfoSmall from "./FixedInfoSmall";
import { ParallaxProvider, Parallax } from "react-scroll-parallax";

export default function MtvImgCont(props) {
  const content = props.indicator === "movie" ? props.movie : props.tv;
  return (
    <React.Fragment>
      <FixedInfoSmall
        content={content}
        fixSmall={props.fixSmall}
        indicator={props.indicator}
      />
      <div className="mtv-img-container">
        <img
          className="mtv-poster"
          alt="NoImageAvaible"
          src={
            content.poster_path === null
              ? "https://gamepedia.cursecdn.com/arksurvivalevolved_gamepedia/a/ac/No_image_available.svg"
              : "https://image.tmdb.org/t/p/original" + content.poster_path
          }
        />
        <div className="mtv-overlay">
          <ParallaxProvider>
            <Parallax y={[-37, 43]}>
              <div className="mtv-background">
                <img
                  alt="NoBackground"
                  src={
                    "https://image.tmdb.org/t/p/original" +
                    content.backdrop_path
                  }
                />
              </div>
            </Parallax>
          </ParallaxProvider>
        </div>
        <h3 className="mtv-title">
          {props.indicator === "movie" ? content.title : content.name}
        </h3>
      </div>
    </React.Fragment>
  );
}

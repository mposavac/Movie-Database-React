import React from "react";
import HotBanerMember from "./HotBanerMember";

export default function HotBaner(props) {
  const classNames = [
    "hot-first",
    "hot-second",
    "hot-third",
    "hot-forth",
    "hot-five",
    "hot-six"
  ];
  return (
    <section
      className="hot-container home-container"
      style={
        props.isTyping
          ? { opacity: "0", visibility: "hidden" }
          : { opacity: "1", visibility: "visible" }
      }
    >
      {props.hotMovies.results.map(
        (element, i) =>
          i < 6 && (
            <HotBanerMember
              key={i}
              containerClass={classNames[i]}
              movie={element}
            />
          )
      )}
    </section>
  );
}

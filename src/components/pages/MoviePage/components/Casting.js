import React from "react";
import CastMember from "../../Shared components/CastMember";

export default function Casting(props) {
  const screenplay = props.cast.crew.filter(
    element =>
      element.job === "Screenplay" ||
      element.job === "Story" ||
      element.job === "Writer"
  );
  return (
    <section className="mtv-credits">
      <p className="mtv-director">
        <span>Director: </span>
        {props.cast.crew
          .map(element => (element.job === "Director" ? element.name : null))
          .join(" ")}
      </p>
      <br />
      <p className="mtv-screenplay">
        <span>Writers: </span>
        {screenplay
          .map(element => element.name + " (" + element.job + ")")
          .join(", ")}
      </p>
      <h3>Top billed Cast: </h3>
      <div className="mtv-casting-container">
        {props.cast.cast.map(
          element =>
            element.order < 10 && (
              <CastMember key={element.id} castM={element} />
            )
        )}
      </div>
      <button className="full-cast-btn" onClick={props.onClick}>
        SHOW FULL CAST
      </button>
    </section>
  );
}

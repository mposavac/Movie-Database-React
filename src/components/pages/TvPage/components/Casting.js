import React from "react";
import CastMember from "../../Shared components/CastMember";

export default function Casting(props) {
  return (
    <section className="mtv-credits">
      <p className="mtv-director">
        <span>Created by: </span>
        {props.created.map(element => element.name).join(", ")}
      </p>
      <br />
      <h3>Top billed Cast: </h3>
      <div className="mtv-casting-container">
        {props.cast.cast.map(
          element =>
            element.order < 10 && (
              <CastMember key={element.id} castM={element} />
            )
        )}
      </div>
      <button onClick={props.onClick} className="full-cast-btn">
        SHOW FULL CAST
      </button>
    </section>
  );
}

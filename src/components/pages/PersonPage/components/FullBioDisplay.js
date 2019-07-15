import React from "react";

export default function FullBioDisplay(props) {
  return (
    <section className="full-bio-display">
      <i onClick={props.onClick} className="far fa-times-circle close-btn" />
      <p>{props.biography}</p>
    </section>
  );
}

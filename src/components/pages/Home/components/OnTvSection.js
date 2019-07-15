import React from "react";
import OnTvMember from "./OnTvMember";

export default function OnTvSection(props) {
  return (
    <section className="best-of-tv home-container">
      <h2>TRENDING ON TV</h2>
      <div className="hometv-grid">
        {props.tvTrending.results.map(
          (element, i) =>
            i < 5 && <OnTvMember key={element.id} tvTrending={element} />
        )}
      </div>
    </section>
  );
}

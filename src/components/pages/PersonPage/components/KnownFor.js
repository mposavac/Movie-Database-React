import React from "react";
import KnownForComponent from "./KnownForComponent";

export default function KnownFor(props) {
  const { personData, personCredits, fullBioShown } = props.data;
  return (
    <div className="person-scroll-container">
      <h3 style={{ color: "white", paddingTop: "0.5rem" }}>
        You 've mabye seen{" "}
        {personData.name.slice(0, personData.name.indexOf(" "))} in this titles:
      </h3>
      <p style={{ color: "white", paddingTop: "0.25rem" }}>
        ({personCredits.titleNumber} titles)
      </p>
      <div
        className="person-known-for"
        style={fullBioShown ? { pointerEvents: "none" } : {}}
      >
        {personCredits.credits.map(element => (
          <KnownForComponent key={element.year} credits={element} />
        ))}
      </div>
    </div>
  );
}

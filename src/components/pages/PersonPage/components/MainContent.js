import React from "react";
import BasicInfo from "./BasicInfo";
import KnownFor from "./KnownFor";

export default function MainContent(props) {
  const { personData, fullBioShown, personCredits } = props.data;
  document.title = personData.name;

  return (
    <section
      className="person-container"
      onClick={fullBioShown ? props.handleClickBio : undefined}
      style={fullBioShown ? { filter: "blur(15px)" } : {}}
    >
      <BasicInfo
        person={personData}
        bioShown={fullBioShown}
        onClick={props.handleClickBio}
      />
      {personCredits && <KnownFor data={props.data} />}
    </section>
  );
}

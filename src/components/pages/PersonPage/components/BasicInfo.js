import React from "react";

export default function BasicInfo(props) {
  let bgShorten;
  return (
    <div
      className="person-info-container"
      style={props.bioShown ? { pointerEvents: "none" } : {}}
    >
      <img
        className="profile-img"
        src={"https://image.tmdb.org/t/p/w500/" + props.person.profile_path}
        alt="NoProfilePicture"
      />
      <div className="person-info">
        <h2>{props.person.name}</h2>
        <p>
          Born: {props.person.birthday} ({props.person.place_of_birth})
        </p>
        {props.person.deathday !== null && (
          <p>Death: {props.person.deathday}</p>
        )}
        <p className="person-biography">
          {(bgShorten = setUpBiography(props.person.biography))}
        </p>
        {bgShorten.length === 665 && (
          <button className="full-bio-btn" onClick={props.onClick}>
            Show Full Biography
          </button>
        )}
      </div>
    </div>
  );
}

function setUpBiography(biography) {
  if (biography.length > 660) {
    return biography.substring(0, 660) + ". . .";
  } else return biography;
}

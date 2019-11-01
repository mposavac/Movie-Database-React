import React from "react";
import { Link } from "react-router-dom";

export default function CastMember(props) {
  return (
    <div className="mtv-cast-member">
      <Link to={"/person/" + props.castM.id}>
        <img
          alt="NoProfilePicture"
          src={
            props.castM.profile_path === null
              ? "https://gamepedia.cursecdn.com/arksurvivalevolved_gamepedia/a/ac/No_image_available.svg"
              : "https://image.tmdb.org/t/p/w500" + props.castM.profile_path
          }
        />
      </Link>
      <p>{props.castM.name}</p>
      <p className="cast-role">({props.castM.character})</p>
    </div>
  );
}

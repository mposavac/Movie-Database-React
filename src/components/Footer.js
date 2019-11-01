import React from "react";
import logoImg from "../img/408x161-powered-by-rectangle-blue-10d3d41d2a0af9ebcb85f7fb62ffb6671c15ae8ea9bc82a2c6941f223143409e.png";

export default function Footer(props) {
  const footerColor = props.location.pathname.substring(1, 3);
  return (
    <footer
      className={
        footerColor === "tv" || footerColor === "pe" ? footerColor : ""
      }
    >
      <a href="https://www.themoviedb.org/">
        <img src={logoImg} alt="https://www.themoviedb.org/" />
      </a>
      <h3 className="footer">
        &copy; Coypright: Matej Posavac, {new Date().getFullYear()}.
      </h3>
    </footer>
  );
}

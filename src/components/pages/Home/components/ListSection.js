import React from "react";
import ListMember from "./ListMember";

export default function ListSection(props) {
  const sectionsName = ["inTheaters", "upcomingMovies"];
  const sectionsTitles = ["In Theaters", "Coming Soon"];
  return (
    <section className="home-cinema">
      {sectionsName.map((element, i) => (
        <article key={i} className={sectionsName[i]}>
          <h4>{sectionsTitles[i]}</h4>
          <ul>
            {i === 0
              ? props.inTheaters.results.map(element => (
                  <ListMember key={element.id} movie={element} />
                ))
              : props.upcomingMovies.results.map(element => (
                  <ListMember key={element.id} movie={element} />
                ))}
          </ul>
        </article>
      ))}
    </section>
  );
}

import React from "react";
import { Link } from "react-router-dom";

export default function SearchBar(props) {
  return (
    <React.Fragment>
      <section
        className={
          "search-container " + (props.isTyping ? "mobile-search" : "")
        }
        style={props.isTyping ? { transform: "translateY(-75vh)" } : undefined}
      >
        <div>
          <div className="search-field">
            <i className="fas fa-search magnifier" />
            <input
              id="inputSearch"
              className="search-bar"
              name="id"
              onChange={props.onChange}
              onFocus={props.onFocus}
              onBlur={() => setTimeout(props.onFocus, 150)}
              placeholder="Search Movies, TV shows, Casting..."
              value={props.search}
              autoComplete="off"
            />
            <div
              className="search-bar-border"
              style={props.isTyping ? { width: "85%" } : { width: "0" }}
            />
          </div>

          {props.search.length > 1 && props.searchResults !== null && (
            <div
              className="search-results"
              style={
                props.isTyping ? { display: "block" } : { display: "none" }
              }
            >
              {props.searchResults.map(element => (
                <Link
                  key={element.id}
                  className="search-result"
                  to={"/" + setSearchResultLink(element) + "/" + element.id}
                >
                  {setSearchResult(element)}
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
      <div
        className="before-search-background"
        style={
          props.isTyping
            ? { transform: "translateY(0vh)" }
            : { transform: "translateY(-110vh)" }
        }
      />
    </React.Fragment>
  );
}

function setSearchResult(element) {
  return element.media_type === "movie" ? element.title : element.name;
}
function setSearchResultLink(element) {
  if (element.media_type === "movie") return "movie";
  if (element.media_type === "tv") return "tv";
  return "person";
}

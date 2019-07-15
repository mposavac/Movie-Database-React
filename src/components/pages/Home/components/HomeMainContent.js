import React from "react";
import HotBaner from "./HotBaner";
import ListSection from "./ListSection";
import OnTvSection from "./OnTvSection";
import SearchBar from "./SearchBar";

export default function HomeMainContent(props) {
  return (
    <main className="home-background">
      <HotBaner
        hotMovies={props.data.hotMovies}
        isTyping={props.data.isTyping}
      />
      <SearchBar
        onChange={props.onChange}
        searching={props.data}
        onFocus={props.onFocus}
        isTyping={props.data.isTyping}
        search={props.data.search}
        searchResults={props.data.searchResults}
      />
      <ListSection
        inTheaters={props.data.inTheaters}
        upcomingMovies={props.data.upcomingMovies}
      />
      <OnTvSection tvTrending={props.data.tvTrending} />
    </main>
  );
}

import React from "react";
import MovieCard from "./MovieCard";

const SearchResults = ({ shows, searchString }) => {
  return (
    <div className="searchResults grid-flow">
      <h1 className="title">
        Found {shows.length} {shows.length > 1 ? "Results" : "Result"} for '
        {searchString}'
      </h1>
      <div className="search-results grid-flow">
        {shows.map((show) => (
          <MovieCard movie={show} key={show.title} />
        ))}
      </div>
    </div>
  );
};

export default SearchResults;

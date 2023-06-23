import React, { useEffect, useState } from "react";
import MovieCard from "../MovieCard";
import data from "../../data.json";
import SearchResults from "../SearchResults";

const Movies = ({ searchString }) => {
  const [shows, setShows] = useState([]);

  useEffect(() => {
    const newData = data.filter((show) => {
      let match;
      const words1 = searchString.trim().split(" ");
      const words2 = show.title.split(" ");
      for (const word1 of words1) {
        match = false;
        for (const word2 of words2) {
          if (
            word2.toLowerCase().slice(0, word1.length) === word1.toLowerCase()
          )
            match = true;
        }
        if (!match) break;
      }

      return (
        (match ||
          show.title.toLowerCase().slice(0, searchString.length) ===
            searchString) &&
        show.category === "Movie"
      );
    });
    setShows(newData);
  }, [searchString]);

  if (searchString)
    return <SearchResults shows={shows} searchString={searchString} />;

  const movies = data.filter((movie) => movie.category === "Movie");
  return (
    <section className="movies-page grid-flow">
      <h1 className="title">Movies</h1>
      <div className="movies grid-flow">
        {movies.map((movie) => (
          <MovieCard movie={movie} key={movie.title} />
        ))}
      </div>
    </section>
  );
};

export default Movies;

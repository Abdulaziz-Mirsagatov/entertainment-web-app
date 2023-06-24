import React from "react";
import data from "../data.json";
import MovieCard from "./MovieCard";

const Recommended = () => {
  const movies = data.filter((movie) => !movie.isTrending);

  return (
    <section className="recommended-section">
      <h1 className="title">Recommended for you</h1>
      <div className="recommended-shows grid-flow">
        {movies.map((movie) => (
          <MovieCard movie={movie} key={movie.title} />
        ))}
      </div>
    </section>
  );
};

export default Recommended;

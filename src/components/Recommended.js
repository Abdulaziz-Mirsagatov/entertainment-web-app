import React from "react";
import movies from "../data.json";
import MovieCard from "./MovieCard";

const Recommended = () => {
  movies = movies.filter((movie) => !movie.isTrending);

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

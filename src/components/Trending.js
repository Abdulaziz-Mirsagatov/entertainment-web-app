import React from "react";
import data from "../data.json";
import TrendingMovieCard from "./TrendingMovieCard";

const Trending = () => {
  const movies = data.filter((movie) => movie.isTrending);

  return (
    <section className="trending-section grid-flow">
      <h1 className="title">Trending</h1>
      <div className="trending-shows flexbox">
        {movies.map((movie) => (
          <TrendingMovieCard movie={movie} key={movie.title} />
        ))}
      </div>
    </section>
  );
};

export default Trending;

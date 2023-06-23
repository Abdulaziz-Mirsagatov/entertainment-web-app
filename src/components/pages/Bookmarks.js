import React, { useEffect, useState } from "react";
import MovieCard from "../MovieCard";
import SearchResults from "../SearchResults";
import data from "../../data.json";

const Bookmarks = ({ searchString }) => {
  const [shows, setShows] = useState([]);

  useEffect(() => {
    const newData = data.filter((show) => {
      let match = false;
      show.title.split(" ").forEach((word) => {
        if (
          word.toLowerCase().slice(0, searchString.length) ===
          searchString.toLowerCase()
        )
          match = true;
      });

      return (
        (match ||
          show.title.toLowerCase().slice(0, searchString.length) ===
            searchString) &&
        show.isBookmarked
      );
    });
    setShows(newData);
  }, [searchString]);

  if (searchString)
    return <SearchResults shows={shows} searchString={searchString} />;

  const bookmarkedTVSeries = data.filter(
    (tvSerie) => tvSerie.category === "TV Series" && tvSerie.isBookmarked
  );
  const bookmarkedMovies = data.filter(
    (movie) => movie.category === "Movie" && movie.isBookmarked
  );
  return (
    <section className="bookmarks-page grid-flow">
      <section className="bookmarked-movies">
        <h1 className="title">Bookmarked Movies</h1>
        <div className="bookmarks grid-flow">
          {bookmarkedMovies.map((movie) => (
            <MovieCard movie={movie} key={movie.title} />
          ))}
        </div>
      </section>

      <section className="bookmarked-tv-series">
        <h1 className="title">Bookmarked TV Series</h1>
        <div className="bookmarks grid-flow">
          {bookmarkedTVSeries.map((movie) => (
            <MovieCard movie={movie} key={movie.title} />
          ))}
        </div>
      </section>
    </section>
  );
};

export default Bookmarks;

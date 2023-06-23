import React, { useEffect, useState } from "react";
import data from "../../data.json";
import MovieCard from "../MovieCard";
import SearchResults from "../SearchResults";

const TVSeries = ({ searchString }) => {
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
        show.category === "TV Series"
      );
    });
    setShows(newData);
  }, [searchString]);

  if (searchString)
    return <SearchResults shows={shows} searchString={searchString} />;

  const tvSeries = data.filter((tvSerie) => tvSerie.category === "TV Series");
  return (
    <section className="tv-series-page grid-flow">
      <h1 className="title">TV Series</h1>
      <div className="tv-series grid-flow">
        {tvSeries.map((tvSerie) => (
          <MovieCard movie={tvSerie} key={tvSerie.title} />
        ))}
      </div>
    </section>
  );
};

export default TVSeries;

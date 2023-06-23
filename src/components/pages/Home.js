import React, { useEffect, useState } from "react";
import Trending from "../Trending";
import Recommended from "../Recommended";
import data from "../../data.json";
import SearchResults from "../SearchResults";

const Home = ({ searchString }) => {
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
        match ||
        show.title.toLowerCase().slice(0, searchString.length) === searchString
      );
    });
    setShows(newData);
  }, [searchString]);

  if (searchString)
    return <SearchResults shows={shows} searchString={searchString} />;

  return (
    <div className="home-page grid-flow">
      <Trending />
      <Recommended />
    </div>
  );
};

export default Home;

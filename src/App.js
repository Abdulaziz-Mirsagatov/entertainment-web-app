import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/pages/Home";
import Searchbox from "./components/Searchbox";
import Movies from "./components/pages/Movies";
import TVSeries from "./components/pages/TVSeries";
import Bookmarks from "./components/pages/Bookmarks";
import "./styles/css/index.css";
import { Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";

function App() {
  const searchString = useSelector((state) => state.searchString.value);

  return (
    <div className="wrapper grid-flow">
      <Navbar />
      <main className="main grid-flow">
        <Searchbox searchString={searchString} />
        <Routes>
          <Route
            path="/"
            index
            element={<Home searchString={searchString} />}
          />
          <Route
            path="/movies"
            element={<Movies searchString={searchString} />}
          />
          <Route
            path="/tv-series"
            element={<TVSeries searchString={searchString} />}
          />
          <Route
            path="/bookmarks"
            element={<Bookmarks searchString={searchString} />}
          />
        </Routes>
      </main>
    </div>
  );
}

export default App;

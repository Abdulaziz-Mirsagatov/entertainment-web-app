import React, { useState } from "react";
import movieIcon from "../assets/icon-category-movie.svg";

const MovieCard = ({ movie }) => {
  const [bookmarked, setBookmarked] = useState(movie.isBookmarked);

  const thumbnailUrl = movie.thumbnail.regular.small;
  const thumbnailImg = require(`../${thumbnailUrl.slice(
    2,
    thumbnailUrl.length - 3
  )}jpg`);

  return (
    <div className="movie-card">
      <div
        className="movie-container"
        style={{ backgroundImage: `url(${thumbnailImg})` }}
      >
        <div
          className="bookmark-icon-container grid-flow"
          onClick={() => {
            movie.isBookmarked = !movie.isBookmarked;
            setBookmarked((prev) => !prev);
          }}
        >
          <svg
            width="12"
            height="14"
            xmlns="http://www.w3.org/2000/svg"
            className={bookmarked ? "active" : ""}
          >
            <path
              d="m10.518.75.399 12.214-5.084-4.24-4.535 4.426L.75 1.036l9.768-.285Z"
              strokeWidth="1.5"
            />
          </svg>
        </div>

        <div className="overlay"></div>
        <div className="play-container flexbox">
          <svg width="30" height="30" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M15 0C6.713 0 0 6.713 0 15c0 8.288 6.713 15 15 15 8.288 0 15-6.712 15-15 0-8.287-6.712-15-15-15Zm-3 21V8l9 6.5-9 6.5Z"
              fill="#FFF"
            />
          </svg>
          <p>Play</p>
        </div>
      </div>

      <div className="description-container">
        <div className="container flexbox">
          <p>{movie.year}</p>
          <div className="dot"></div>
          <div className="flexbox">
            <img src={movieIcon} alt="movie icon" />
            <p>{movie.category}</p>
          </div>
          <div className="dot"></div>
          <p>{movie.rating}</p>
        </div>
        <h2 className="title">{movie.title}</h2>
      </div>
    </div>
  );
};

export default MovieCard;

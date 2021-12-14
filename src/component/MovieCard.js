import StarRatingComponent from "react-star-rating-component";
import React from "react";
import "./MovieCard.css";

const MovieCard = ({ movie }) => {
  return (
    <div className="MovieCard" style={{ width: "10rem" }}>
      <div className="image-container">
        <img src={movie.posterUrl} alt="movie"></img>
      </div>

      <div className="CardTitle">
        <h1 className="Title"> {movie.Title}</h1>
      </div>

      <div className="rate">
        <StarRatingComponent
          name="rate"
          editing={false}
          starCount={5}
          value={movie.rate}
        />
      </div>
    </div>
  );
};

export default MovieCard;

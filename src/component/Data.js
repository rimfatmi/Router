import React from "react";
import { useParams } from "react-router-dom";
import "./Data.css";

function Data({ movies }) {
  const { movieTitle } = useParams();
  const movie = movies.find((movie) => movie.Title === movieTitle);

  return (
    <div className="mov">
      <div className="title">
        <h1 className="ttitle">{movie.Title}</h1>
      </div>
      <div className="video">
        <iframe
          width="600"
          height="350"
          src={movie.video}
          title="Film"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
      <h5 className="desc" style={{ color: "#fff" }}>
        {movie.description}
      </h5>
    </div>
  );
}

export default Data;

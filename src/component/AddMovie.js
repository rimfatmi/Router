import React from "react";
import { useState } from "react";
import MovieCard from "./MovieCard";

function ShowMovie({ addMovie }) {
  const [showMovie, setShowMovie] = useState(false);
  const openMovie = () => {
    setShowMovie(!showMovie);
  };
  return (
    <>
      <Container>
        <Button onClick={openMovie}>Add Movie</Button>
        <MovieCard
          showMovie={showMovie}
          setShowMovie={setShowMovie}
          addMovie={addMovie}
        />
      </Container>
    </>
  );
}

export default ShowMovie;

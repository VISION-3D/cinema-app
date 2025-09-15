import React from "react";
import MovieCard from "./MovieCard";

// Liste de toutes les cartes de films
function MovieList({ movies }) {
  return (
    <div className="movie-list">
      {movies.map((movie, index) => (
        <MovieCard key={index} movie={movie} />
      ))}
    </div>
  );
}

export default MovieList;

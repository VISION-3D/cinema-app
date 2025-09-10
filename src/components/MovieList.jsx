import React from "react";
import MovieCard from "./MovieCard";
import "../App.css";

function MovieList({ movies = [], filterTitle = "", filterRating = 0 }) {
  //  Applique les filtres sur la liste de films
  const filteredMovies = movies.filter(
    (m) =>
      (m.title || "").toLowerCase().includes((filterTitle || "").toLowerCase()) &&
      Number(m.rating || 0) >= Number(filterRating || 0)
  );

  return (
    <div className="MovieList">
      {filteredMovies.length > 0 ? (
        filteredMovies.map((movie, idx) => <MovieCard key={movie.title + idx} movie={movie} />)
      ) : (
        <p>Aucun film trouvé</p>
      )}
    </div>
  );
}

export default MovieList;

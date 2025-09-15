import React from "react";
import { Link } from "react-router-dom";

function MovieCard({ movie }) {
  return (
    <div className="movie-card">
      <Link to={`/movie/${movie.title}`} style={{ textDecoration: "none", color: "inherit" }}>
        <img src={movie.posterUrl} alt={movie.title} />
        <div className="content">
          <h3>{movie.title}</h3>
          <p>{movie.description}</p>
          <p className="rating">⭐ {movie.rating}/5</p>
        </div>
      </Link>
    </div>
  );
}

export default MovieCard;

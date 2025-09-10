import React from "react";
import "../App.css";

function MovieCard({ movie }) {
  //  Debug : affiche le film reçu en console
  console.log("Movie reçu dans MovieCard :", movie);

  //  Récupère l'URL de l'image
  const imgSrc = (
    movie.posterUrl || 
    movie.posterURL || 
    movie.imageUrl || 
    movie.url || 
    ""
  ).toString().trim();

  return (
    <div className="MovieCard">
      {/*  Image du film */}
      <img
        src={imgSrc || "https://via.placeholder.com/300x450?text=No+Image"}
        alt={movie.title || "No title"}
        //  Fallback si l'image échoue à charger
        onError={(e) => {
          e.currentTarget.onerror = null;
          e.currentTarget.src = "https://via.placeholder.com/300x450?text=No+Image";
        }}
      />
      {/*  Infos du film */}
      <h3>{movie.title}</h3>
      <p>{movie.description}</p>
      <p>⭐ {movie.rating}</p>

      {/*  Affiche l'URL utilisée pour debug */}
      <div style={{ fontSize: 11, color: "#bbb", marginTop: 6 }}>
        <strong>url:</strong> {imgSrc || "(vide)"}
      </div>
    </div>
  );
}

export default MovieCard;

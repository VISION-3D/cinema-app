import React from "react";
import { useParams, useNavigate } from "react-router-dom";

function MovieDetail({ movies }) {
  const { title } = useParams(); // récupère le titre dans l'URL
  const navigate = useNavigate();

  const movie = movies.find((m) => m.title === title);

  if (!movie) return <p>Film non trouvé</p>;

  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h2>{movie.title}</h2>
      <img src={movie.posterUrl} alt={movie.title} style={{ width: "300px", borderRadius: "10px" }} />
      <p style={{ maxWidth: "600px", margin: "20px auto" }}>{movie.description}</p>
      <div style={{ margin: "20px auto" }}>
        <iframe
          width="500"
          height="315"
          src={movie.trailer}
          title={`${movie.title} Trailer`}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <button
        onClick={() => navigate("/")}
        style={{ padding: "10px 20px", backgroundColor: "#e50914", color: "white", border: "none", borderRadius: "5px", cursor: "pointer" }}
      >
        ← Retour
      </button>
    </div>
  );
}

export default MovieDetail;

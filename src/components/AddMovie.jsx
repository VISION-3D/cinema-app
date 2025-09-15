import React, { useState } from "react";

// Formulaire d'ajout de film
function AddMovie({ addMovie }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [posterUrl, setPosterUrl] = useState("");
  const [rating, setRating] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !posterUrl) return;
    addMovie({ title, description, posterUrl, rating });
    setTitle("");
    setDescription("");
    setPosterUrl("");
    setRating(0);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Titre du film"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <input
        type="text"
        placeholder="URL de l'affiche"
        value={posterUrl}
        onChange={(e) => setPosterUrl(e.target.value)}
      />
      <input
        type="number"
        placeholder="Note"
        min="0"
        max="5"
        value={rating}
        onChange={(e) => setRating(Number(e.target.value))}
      />
      <button type="submit">➕ Ajouter</button>
    </form>
  );
}

export default AddMovie;

import React, { useState } from "react";

function AddMovie({ addMovie }) {
  //  États pour chaque champ du formulaire
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [posterUrl, setPosterUrl] = useState("");
  const [rating, setRating] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    //  Ajoute le film à la liste
    addMovie({ 
      title: title.trim(), 
      description: description.trim(), 
      posterUrl: posterUrl.trim(), 
      rating: Number(rating) 
    });
    //  Réinitialise le formulaire
    setTitle("");
    setDescription("");
    setPosterUrl("");
    setRating(0);
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: 20 }}>
      <input type="text" placeholder="Titre" value={title} onChange={(e) => setTitle(e.target.value)} required />
      <input type="text" placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} required />
      <input type="text" placeholder="URL de l'affiche" value={posterUrl} onChange={(e) => setPosterUrl(e.target.value)} required />
      <input type="number" min="0" max="5" placeholder="Note" value={rating} onChange={(e) => setRating(e.target.value)} required />
      <button type="submit">Ajouter</button>
    </form>
  );
}

export default AddMovie;

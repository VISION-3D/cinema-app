import React, { useState } from "react";
import MovieList from "./components/MovieList";
import Filter from "./components/Filter";
import AddMovie from "./components/AddMovie";
import "./App.css";

function App() {
  //  Liste initiale de films avec URL TMDB fiables
  const [movies, setMovies] = useState([
   
    {
      title: "Interstellar",
      description: "Voyage interstellaire à travers un trou noir.",
      posterUrl: "https://image.tmdb.org/t/p/w500/rAiYTfKGqDCRIIqo664sY9XZIvQ.jpg",
      rating: 4,
    },
    {
      title: "The Dark Knight",
      description: "Batman affronte le Joker dans un chaos total à Gotham.",
      posterUrl: "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
      rating: 5,
    },
    {
      title: "Tenet",
      description: "Un espion manipule le temps pour empêcher une guerre mondiale.",
      posterUrl: "https://image.tmdb.org/t/p/w500/k68nPLbIST6NP96JmTxmZijEvCA.jpg",
      rating: 4,
    },
    {
      title: "Dune",
      description: "Paul Atreides découvre son destin sur la planète désertique Arrakis.",
      posterUrl: "https://image.tmdb.org/t/p/w500/d5NXSklXo0qyIYkgV94XAgMIckC.jpg",
      rating: 5,
    },
  ]);

  //  États pour le filtre
  const [filterTitle, setFilterTitle] = useState("");
  const [filterRating, setFilterRating] = useState(0);

  //  Fonction pour ajouter un nouveau film
  const addMovie = (newMovie) => {
    const clean = { ...newMovie, posterUrl: (newMovie.posterUrl || "").trim() };
    setMovies([...movies, clean]);
  };

  return (
    <div className="App">
     <h1>🎬 CinéScope</h1>
<p style={{ fontStyle: "italic", color: "#aaa" }}>Découvrez, collectionnez, savourez vos films préférés</p>

      {/* Composant pour filtrer les films */}
      <Filter setFilterTitle={setFilterTitle} setFilterRating={setFilterRating} />
      {/* Formulaire pour ajouter un film */}
      <AddMovie addMovie={addMovie} />
      {/* Liste des films filtrés */}
      <MovieList movies={movies} filterTitle={filterTitle} filterRating={filterRating} />
    </div>
  );
}

export default App;

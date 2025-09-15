import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MovieList from "./components/MovieList";
import Filter from "./components/Filter";
import AddMovie from "./components/AddMovie";
import MovieDetail from "./components/MovieDetail";
import "./App.css";

function App() {
  // Liste des films avec description et lien de bande-annonce
  const [movies, setMovies] = useState([
    {
      title: "Inception",
      description: "Un thriller de science-fiction avec rêves imbriqués.",
      posterUrl: "https://image.tmdb.org/t/p/w500/edv5CZvWj09upOsy2Y6IwDhK8bt.jpg",
      rating: 5,
      trailer: "https://www.youtube.com/embed/YoHD9XEInc0",
    },
    {
      title: "Interstellar",
      description: "Voyage à travers l'espace et le temps.",
      posterUrl: "https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
      rating: 4,
      trailer: "https://www.youtube.com/embed/zSWdZVtXT7E",
    },
    {
      title: "The Dark Knight",
      description: "Batman affronte le Joker dans un Gotham sombre.",
      posterUrl: "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
      rating: 5,
      trailer: "https://www.youtube.com/embed/EXeTwQWrcwY",
    },
    {
      title: "Avatar",
      description: "Un film de science-fiction sur Pandora.",
      posterUrl: "https://image.tmdb.org/t/p/w500/kmcqlZGaSh20zpTbuoF0Cdn07dT.jpg",
      rating: 4,
      trailer: "https://www.youtube.com/embed/5PSNL1qE6VY",
    },
    {
      title: "Titanic",
      description: "Une histoire d'amour tragique sur le paquebot mythique.",
      posterUrl: "https://image.tmdb.org/t/p/w500/kHXEpyfl6zqn8a6YuozZUujufXf.jpg",
      rating: 5,
      trailer: "https://www.youtube.com/embed/kVrqfYjkTdQ",
    },
  ]);

  const [titleFilter, setTitleFilter] = useState("");
  const [ratingFilter, setRatingFilter] = useState(0);

  const addMovie = (newMovie) => setMovies([...movies, newMovie]);

  const filteredMovies = movies.filter(
    (movie) =>
      movie.title.toLowerCase().includes(titleFilter.toLowerCase()) &&
      movie.rating >= ratingFilter
  );

  return (
    <Router>
      <Routes>
        {/* Page d'accueil */}
        <Route
          path="/"
          element={
            <div>
              <h1>🎬 My CinéFlixPlus</h1>
              <Filter setTitleFilter={setTitleFilter} setRatingFilter={setRatingFilter} />
              <AddMovie addMovie={addMovie} />
              <MovieList movies={filteredMovies} />
            </div>
          }
        />

        {/* Page détail d'un film */}
        <Route path="/movie/:title" element={<MovieDetail movies={movies} />} />
      </Routes>
    </Router>
  );
}

export default App;

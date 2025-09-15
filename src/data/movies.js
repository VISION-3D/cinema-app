// ==========================
// movies.js
// ==========================
// Liste des films avec titre, description, poster, note et lien YouTube (bande-annonce).
// On utilise TMDB pour les images (affiche fiable) et YouTube pour les trailers.

const movies = [
  {
    id: 1,
    title: "Inception",
    description: "Un thriller de science-fiction où les rêves deviennent réalité.",
    posterUrl: "https://image.tmdb.org/t/p/w500/qmDpIHrmpJINaRKAfWQfftjCdyi.jpg",
    rating: 5,
    trailerUrl: "https://www.youtube.com/embed/YoHD9XEInc0"
  },
  {
    id: 2,
    title: "Interstellar",
    description: "Un voyage épique au-delà des étoiles à la recherche d’un nouveau foyer.",
    posterUrl: "https://image.tmdb.org/t/p/w500/rAiYTfKGqDCRIIqo664sY9XZIvQ.jpg",
    rating: 5,
    trailerUrl: "https://www.youtube.com/embed/zSWdZVtXT7E"
  },
  {
    id: 3,
    title: "The Dark Knight",
    description: "Batman affronte le Joker dans une bataille pour Gotham.",
    posterUrl: "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
    rating: 5,
    trailerUrl: "https://www.youtube.com/embed/EXeTwQWrcwY"
  },
  {
    id: 4,
    title: "Avatar",
    description: "Sur Pandora, un soldat humain découvre un monde magique et dangereux.",
    posterUrl: "https://image.tmdb.org/t/p/w500/jRXYjXNq0Cs2TcJjLkki24MLp7u.jpg",
    rating: 4,
    trailerUrl: "https://www.youtube.com/embed/5PSNL1qE6VY"
  },
  {
    id: 5,
    title: "Titanic",
    description: "Une histoire d’amour tragique à bord du légendaire paquebot.",
    posterUrl: "https://image.tmdb.org/t/p/w500/9xjZS2rlVxm8SFx8kPC3aIGCOYQ.jpg",
    rating: 5,
    trailerUrl: "https://www.youtube.com/embed/kVrqfYjkTdQ"
  }
];

export default movies;

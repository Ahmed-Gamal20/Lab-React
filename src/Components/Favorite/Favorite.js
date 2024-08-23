import { useState, useEffect } from "react";

export default function Favorites() {
  const [favorites, setFavorites] = useState(() => {
    const savedFavorites = localStorage.getItem('favorites');
    return savedFavorites ? JSON.parse(savedFavorites) : [];
  });

  const removeFromFavorites = (movieId) => {
    const newFavorites = favorites.filter((movie) => movie.id !== movieId);
    setFavorites(newFavorites);
    localStorage.setItem('favorites', JSON.stringify(newFavorites));
  };

  return (
    <div className="container">
      <h1 className="text-center text-primary p-3 m-2">Favorites</h1>
      <div className="row">
        {favorites.length > 0 ? (
          favorites.map((movie) => (
            <div className="col-md-4 mb-2" key={movie.id}>
              <div className="card">
                <img
                  src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                  className="card-img-top"
                  alt={movie.name}
                />
                <div className="card-body">
                  <h5 className="card-title">{movie.name}</h5>
                  <button
                    onClick={() => removeFromFavorites(movie.id)}
                    className="btn btn-danger"
                  >
                    Remove from Favorites
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center">No favorite movies available</p>
        )}
      </div>
    </div>
  );
}

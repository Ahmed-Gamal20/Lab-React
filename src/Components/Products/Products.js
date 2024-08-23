
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { FaStar, FaRegStar } from 'react-icons/fa'; 

export default function Products() {
  const [list, setList] = useState([]);
  const [currentPage, setCurrent] = useState(1);
  const [totalPage, setTotalPage] = useState(1);
  const [favorites, setFavorites] = useState(() => {
  
    const savedFavorites = localStorage.getItem('favorites');
    return savedFavorites ? JSON.parse(savedFavorites) : [];
  });

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/tv/popular?api_key=592d5558fe91383c9979c4a7c357bfee&language=en&page=${currentPage}`
      )
      .then((res) => {
        setList(res.data.results);
        setTotalPage(res.data.total_pages);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [currentPage]);

  const nextPage = () => {
    if (currentPage < totalPage) setCurrent(currentPage + 1);
  };

  const prevPage = () => {
    if (currentPage > 1) setCurrent(currentPage - 1);
  };

  const addToFavorites = (movie) => {
    if (!favorites.find((fav) => fav.id === movie.id)) {
      const newFavorites = [...favorites, movie];
      setFavorites(newFavorites);
      localStorage.setItem('favorites', JSON.stringify(newFavorites));
    }
  };

  const removeFromFavorites = (movieId) => {
    const newFavorites = favorites.filter((movie) => movie.id !== movieId);
    setFavorites(newFavorites);
    localStorage.setItem('favorites', JSON.stringify(newFavorites));
  };

  const isFavorite = (movieId) => {
    return favorites.some((movie) => movie.id === movieId);
  };

  return (
    <>
      <h1 className="text-center text-primary p-3 m-2">All Movies</h1>
      <div className="container">
        <div className="row">
          {list.map((movie) => (
            <div className="col-md-4 mb-2 position-relative" key={movie.id}>
              <div className="card">
                <img
                  src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                  className="card-img-top"
                  alt={movie.name}
                />
                <div className="card-body">
                  <h5 className="card-title">{movie.name}</h5>
                  <span className="position-absolute end-0 top-0 bg-warning text-center rounded">
                    {movie.vote_average}
                  </span>
                  <Link to={`/view/${movie.id}`} className="btn btn-primary">
                    View Details
                  </Link>
                  <button
                    onClick={() =>
                      isFavorite(movie.id)
                        ? removeFromFavorites(movie.id)
                        : addToFavorites(movie)
                    }
                    className="btn btn-warning m-2"
                  >
                    {isFavorite(movie.id) ? <FaStar /> : <FaRegStar />}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="d-flex justify-content-between ">
        <button onClick={prevPage} className="btn btn-primary rounded p-2 m-2">
          Prev
        </button>
        <button onClick={nextPage} className="btn btn-primary rounded p-2 m-2">
          Next
        </button>
      </div>
    </>
  );
}

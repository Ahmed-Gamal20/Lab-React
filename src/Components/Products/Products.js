// import { useEffect, useState } from "react";
// import axios from "axios";
// // import Card from "../../Card/Card";
// import { Link } from "react-router-dom/cjs/react-router-dom.min";

// export default function Products() {
//   const [list, setList] = useState([]);
//   const [currentPage, setCurrent] = useState(1);
//   const [totalPage, setTotalPage] = useState(1);
//   // using component did mount
//   useEffect(() => {
//     //   call api

//     axios
//       .get(
//         `https://api.themoviedb.org/3/tv/popular?api_key=592d5558fe91383c9979c4a7c357bfee&language=en&page=${currentPage}`
//       )
//       .then((res) => {
//         setList(res.data.results);
//         setTotalPage(res.data.total_pages);
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   }, [currentPage]);
//   //
//   const nextPage = () => {
//     if (currentPage < totalPage) setCurrent(currentPage + 1);
//   };
//   const prevPage = () => {
//     if (currentPage > 1) setCurrent(currentPage - 1);
//   };

//   return (
//     <>
//       <h1 className="text-center text-primary p-3 m-2">All Movies</h1>
//       <div className="container">
//         <div className="row">
//           {list.map((movie) => (
//             <div className="col-md-4 mb-2 position-relative" key={movie.id}>
//               <div className="card ">
//                 <img
//                   src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
//                   className="card-img-top"
//                   alt="..."
//                 />
//                 <div className="card-body">
//                   <h5 className="card-title">{movie.name}</h5>
//                   <span className="position-absolute end-0 top-0 bg-warning text-center rounded">
//                     {movie.vote_average}
//                   </span>
//                   <Link to={`/view/${movie.id}`} className="btn btn-primary">
//                     Go Detiels
//                   </Link>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//       <div className="d-flex justify-content-between ">
//         <button onClick={prevPage} className="btn btn-primary rounded p-2 m-2">
//           prev
//         </button>
//         <button onClick={nextPage} className="btn btn-primary rounded p-2 m-2">
//           Next
//         </button>
//       </div>
//     </>
//   );
// }

// // import { useEffect, useState } from "react";
// // import axios from 'axios';
// // import React from 'react';

// // export default function Products() {
// //   const [list, setList] = useState([]); // تأكد من أن القيمة الافتراضية هي مصفوفة

// //   useEffect(() => {
// //     axios.get('https://api.themoviedb.org/3/tv/popular?api_key=592d5558fe91383c9979c4a7c357bfee&language=en&page=1')
// //       .then((res) => {
// //         if (Array.isArray(res.results)) {
// //           setList(res.results);
// //         console.log(res.data);

// //         } else {
// //           console.error("The response data is not an array");
// //           setList([]); // تعيين مصفوفة فارغة لتجنب الأخطاء
// //         }
// //       })
// //       .catch((err) => {
// //         console.error(err);
// //         setList([]); // تعيين مصفوفة فارغة في حالة وجود خطأ
// //       });
// //   }, []);

// //   return (
// //     <>
// //       <h1 className="text-primary text-center">Products List</h1>
// //       {Array.isArray(list) && list.length > 0 ? (
// //         list.map((item) => (
// //           <div key={item.id}>
// //             <h2>{item.title}</h2>
// //             <p>{item.description}</p>
// //           </div>
// //         ))
// //       ) : (
// //         <p>No products available</p>
// //       )}
// //     </>
// //   );
// // }



import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

export default function Products() {
  const [list, setList] = useState([]);
  const [currentPage, setCurrent] = useState(1);
  const [totalPage, setTotalPage] = useState(1);
  const [favorites, setFavorites] = useState(() => {
    // Get favorites from local storage or initialize as an empty array
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
    const newFavorites = [...favorites, movie];
    setFavorites(newFavorites);
    localStorage.setItem('favorites', JSON.stringify(newFavorites));
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
                    onClick={() => addToFavorites(movie)}
                    className="btn btn-warning m-2"
                  >
                    Add to Favorites
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

// import axios from "axios";
// import { useParams } from 'react-router-dom';
// import { useEffect, useState } from "react";
// import Card from "../Card/Card";


// export default function ViewProduct(){
//     const [company, setCompany] = useState()
//     const params = useParams(); // func comp
//     console.log(params.id);
    
//     // component did mount
//     useEffect(()=>{
//         // axios.get(`https://api.themoviedb.org/3/tv/popular?api_key=592d5558fe91383c9979c4a7c357bfee&language=en&page=1${params.id}`)
//         // axios.get(`https://api.themoviedb.org/3/tv/${params.id}/movie/880009?api_key=592d5558fe91383c9979c4a7c357bfee&language=en&page=1`)
//         axios.get(`https://api.themoviedb.org/3/tv/${params.id}?api_key=592d5558fe91383c9979c4a7c357bfee&language=en`)
//         .then((res)=>{
//             setCompany(res.data.results)
//             console.log(res.data.results)
//         }).catch((err)=>{
//             console.log(err)
//         })
//     },[])



//     return(
//         <>
//         <h1>dfgdsfgsdf</h1>
//         {/* <img src="https://api.themoviedb.org/3/tv/12345/images?api_key=592d5558fe91383c9979c4a7c357bfee&language=en"/> */}
//         <h1 className="text-center text-primary"> {company.name}  </h1>
//         {/* <Card title= img={`https://image.tmdb.org/t/p/w500/${company.poster_path}`} /> */}
//         <img src= {`https://image.tmdb.org/t/p/w500/${company.poster_path}`}/>
//          <h1>{company.name}</h1>
//         </>
//     )

// }



//-----------------------------------------------------------------------------

import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './ViewProduct.css';
import axios from 'axios';

function ViewProduct ()  {
  const params = useParams([]);
  const [movie, setMovie] = useState(null);

  useEffect(() => {
//     // fetch(`https://api.themoviedb.org/3/tv/${params.id}?api_key=592d5558fe91383c9979c4a7c357bfee&language=en`)
//       .then(response => response.json())
//       .then(data => setMovie(data));
    const fetchData=async()=>{
        const res=await axios.get(`https://api.themoviedb.org/3/tv/${params.id}?api_key=592d5558fe91383c9979c4a7c357bfee&language=en`)
       setMovie(res.data)
       
        
      
    }
    fetchData();
      
  }, []);

  if (!movie) return <div>Loading...</div>;

  return (
    <div className="movie-details">
     
      <div className="movie-poster w-100">
        <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.name} />
      </div>
      <div className='border border-1 border-danger'>
      <h2>{movie.name}</h2>
      <p>{movie.overview}</p>
      <p>Rating: {movie.vote_average}</p>
    </div>
    </div>
  );
}

export default ViewProduct;






































// import { useEffect, useState } from "react";
// import axios from 'axios';
// import { useParams } from 'react-router-dom';
// import React from 'react';

// export default function ViewProduct() {
//   const { id } = useParams(); // استخدم id مباشرة من useParams
//   const [product, setProduct] = useState(null);

//   useEffect(() => {
//     axios.get(`https://freetestapi.com/api/v1/movies/${id}`)
//       .then((res) => {
//         setProduct(res.data); // التعامل مع البيانات
//       })
//       .catch((err) => {
//         console.error(err); // التعامل مع الأخطاء
//       });
//   }, [id]); // أضف id كمحدد لتأثير useEffect

//   return (
//     <>
//       <h1 className="text-primary text-center">Product Details</h1>
//       {product && (
//         <div>
//           <h2>{product.title}</h2>
//           <p>{product.description}</p>
//         </div>
//       )}
//     </>
//   );
// }

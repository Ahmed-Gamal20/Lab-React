
import React from 'react';
import { Link } from 'react-router-dom';


export default function Card(props){



    return (
<>
<div className="card" style={{width: "18rem"}}>
  <img src={props.img} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{props.title}</h5>
    {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" className="btn btn-primary">Go somewhere</a> */}
   
     <Link className="btn btn-info" to={props.url}>Go TO Detiels</Link>
  </div>
</div>

</>

    )
}
// src/components/AboutMe.js
import React, { Component } from 'react'

export default class AboutMe extends Component {
render(){
  return (
    <>
   <div className="container">
    <div className="row">
      <div className="col-md-4 p-3 m-3">
        <h1>About Me</h1>
      </div>
<div className="col-md-7 p-3 m-3">
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis voluptatibus corrupti distinctio nobis recusandae atque minima voluptatem sed est iste, sequi culpa, sapiente impedit harum tempora officia? Explicabo, quo ipsam.</p>
<a href="/path-to-resume.pdf" download className="btn btn-dark mt-3">Download Resume</a>
</div>
    </div>
   </div>
   </>
  )
}
};





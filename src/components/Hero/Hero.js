// src/components/Hero.js
import './Hero.css'; 
import React, { Component } from 'react'

export default class Hero extends Component {
  render() {
  return (
    <>
    <div className="hero-section d-flex align-items-center">
      <div className="container text-left">
        <h1>Welcome to My Portfolio</h1>
        <h4 className="lead">Ahmed Gamal</h4>
        <button className='btn btn-dark text=white border border-1 border-white mt-4'>Contact Me</button>
      </div>
    </div>
    </>
  )
}
};


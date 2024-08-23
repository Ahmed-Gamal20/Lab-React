// src/components/Footer.js
import { Component } from 'react';

export default class Footer extends Component{
  render(){
  return (
    <>
    <footer className="bg-dark text-white text-center py-4">
      <div className="container">
        <div className='row'>
          <div className='col-md-3'>
        
        <h2>Get In Touch</h2>
        <a href="mail@gmail.com" className="text-white mx-2">
        <i class="fa-solid fa-envelope"></i>
        mail.com
          </a>
          <br></br>
          <a href="mail@gmail.com" className="text-white mx-2">
          <i class="fa-solid fa-phone"></i>
        02-011 1111 111111
          </a>
        </div>
        <div className='col-md-6'>
        <button className='btn btn-dark border border-1 border-white mt-4'>Contact Me</button>
        </div>
        <div className='col-md-3 text-center'>
        <div className='pt-3'>
          <a href="https://www.facebook.com" className="text-white mx-2">
            <i className="fab fa-facebook"></i>
          </a>
          <a href="https://www.twitter.com" className="text-white mx-2">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="https://www.linkedin.com" className="text-white mx-2">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="https://www.github.com" className="text-white mx-2">
            <i className="fab fa-github"></i>
          </a>
          <br></br>
          <p className='pt-3'>CopyRight <i class="fa-regular fa-copyright"></i> 2019 KR</p>
        </div>
        </div>
      </div>
       </div>
        
    </footer>
    </>
  )
}
};



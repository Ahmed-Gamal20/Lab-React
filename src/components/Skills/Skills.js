import './Skills.css'; 

import React, { Component } from 'react'

export default class Skills extends Component {
  render() {
  const skills = [
    { name: 'JavaScript', level: 80 },
    { name: 'React', level: 70 },
    { name: 'HTML', level: 90 },
    { name: 'CSS', level: 85 },
    { name: 'Bootstrap', level: 75 },
    { name: 'Node.js', level: 65 },
  ];

  return (
    <>
    <div className="container my-5 bg-dark text-white pb-4 pt-2">

     
          <div className='text-center p-2 m-3'>
              <h1>Skills</h1>
              <p className='p-3 m-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis voluptatibus corrupti distinctio nobis recusandae atque minima voluptatem sed est iste, sequi culpa, sapiente impedit harum tempora officia? Explicabo, quo ipsam.</p>
          </div> 

      <div>
        {skills.map(skill => (
          <div key={skill.name} className="row align-items-center mb-3">
            <div className="col-6 text-center">
              <h5 className="mb-0">{skill.name}</h5>
            </div>
            <div className="col-6">
              <div className="progress">
                <div 
                  className="progress-bar" 
                  role="progressbar" 
                  style={{ width: `${skill.level}%` }} 
                  aria-valuenow={skill.level} 
                  aria-valuemin="0" 
                  aria-valuemax="100">
                  <span className="progress-label left-0">{skill.name} {skill.level}%</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    </>
  )
}
};


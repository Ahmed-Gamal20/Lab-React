// src/components/Portfolio.js
import Card from '../Card/Card';

import React, { Component } from 'react'

export default class Portfolio extends Component {
  render() {
  const items = [
    'Project One',
    'Project Two',
    'Project Three',
    'Project Four',
    'Project Five',
    'Project 6',

  ];

  return (
    <>
    <div className="container mb-3">
      <h2>Portfolio</h2>
      <div className="row">
        {items.map((item, index) => (
          <div className="col-md-4 border border-2 bg-dark text-white" key={index}>
            <Card title={item} />
          </div>
        ))}
      </div>
    </div>
    </>
  )
}
};

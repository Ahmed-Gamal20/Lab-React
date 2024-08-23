import React, { Component } from 'react';
import './Card.css'; 

export default class Card extends Component {
  render() {
    const { title } = this.props;
    return (
      <div className='container'>
        <div className='row'>
          <div className="card bg-dark text-white">
            <div className="card-body">
              <h5 className="card-title">{title}</h5>
            </div>
          </div>
        </div>
      </div>
    );
  }
}



import React from 'react';
import './Card.css';

const Card = (props) => {
  return (
    <div className="card">
        <h2>{props.name}</h2>
        <h4>{props.description}</h4>
        <p>{props.location}</p>
    </div>
  );
};

export default Card;

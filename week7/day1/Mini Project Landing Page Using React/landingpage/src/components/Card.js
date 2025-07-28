import React from 'react';

const Card = ({ icon, title, text }) => (
  <div className="col-md-4 mb-4">
    <div className="card h-100 text-center p-3 shadow-sm">
      <div className="card-body">
        <i className={`fas ${icon} fa-3x mb-3 text-primary`}></i>
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{text}</p>
      </div>
    </div>
  </div>
);

export default Card;

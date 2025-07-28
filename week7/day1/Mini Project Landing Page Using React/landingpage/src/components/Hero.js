import React from 'react';
import './Hero.css';

const Hero = () => (
  <div className="hero d-flex align-items-center text-white text-center">
    <div className="container">
      <h1 className="display-4">Welcome to React Landing</h1>
      <p className="lead">Build beautiful responsive landing pages with ease.</p>
      <a href="#contact" className="btn btn-primary mt-3">Get in Touch</a>
    </div>
  </div>
);

export default Hero;

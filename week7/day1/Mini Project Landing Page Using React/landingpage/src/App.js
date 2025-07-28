import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Card from './components/Card';
import Contact from './components/Contact';
import './App.css';

function App() {
  return (
    <>
      <Header />
      <Hero />
      <section className="py-5">
        <div className="container">
          <div className="row">
            <Card icon="fa-laptop-code" title="Development" text="Modern, clean code." />
            <Card icon="fa-mobile-alt" title="Responsive" text="Works on all devices." />
            <Card icon="fa-rocket" title="Performance" text="Fast and optimized." />
          </div>
        </div>
      </section>
      <Contact />
    </>
  );
}

export default App;

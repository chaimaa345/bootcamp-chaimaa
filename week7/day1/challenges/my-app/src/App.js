import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./App.css";

import hongkong from "./assets/hongkong.jpg";
import macao from "./assets/macao.jpg";
import japan from "./assets/japan.jpg";
import lasvegas from "./assets/lasvegas.jpg";

function App() {
  const images = [
    { src: hongkong, legend: "Hong Kong" },
    { src: macao, legend: "Macao" },
    { src: japan, legend: "Japan" },
    { src: lasvegas, legend: "Las Vegas" },
  ];

  return (
    <div className="carousel-container">
      <Carousel
        autoPlay
        infiniteLoop
        showStatus={false}
        interval={3000}
        transitionTime={600}
        emulateTouch
        swipeable
        thumbWidth={100} // Optional: makes thumbnails smaller like the demo
      >
        {images.map((image, index) => (
          <div key={index}>
            <img src={image.src} alt={image.legend} className="carousel-image" />
            <p className="legend">{image.legend}</p>
          </div>
        ))}
      </Carousel>
    </div>
  );
}

export default App;





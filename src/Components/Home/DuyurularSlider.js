// src/Components/Home/DuyurularSlider.js
import React, { useState, useEffect } from 'react';
import './DuyurularSlider.css';
import { Link } from 'react-router-dom';
export default function DuyurularSlider() {
  const [duyurular, setDuyurular] = useState([]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    fetch('/data/duyurular.json')
      .then((res) => res.json())
      .then((data) => setDuyurular(data));
  }, []);

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % duyurular.length);
  };

  const prevSlide = () => {
    setIndex((prev) => (prev - 1 + duyurular.length) % duyurular.length);
  };

  return (
    <div className="sliderContainer">
      {duyurular.length > 0 && (
        <>
          <div className="sliderWrapper">
            <button className="sliderArrow left" onClick={prevSlide}>‹</button>

            <div className="sliderContent" key={index}>
              <img
                src={duyurular[index].image}
                alt={duyurular[index].title}
                className="sliderImage"
              />
              <div className="sliderText">
                <h3>{duyurular[index].title}</h3>
                <p>{duyurular[index].desc}</p>
                <button className="sliderButton">
 <Link to={`/duyuru/${duyurular[index].id}`} className="sliderLink">
  Detaylı Oku
</Link>

</button>
              </div>
            </div>

            <button className="sliderArrow right" onClick={nextSlide}>›</button>
          </div>

          <div className="sliderDots">
            {duyurular.map((_, i) => (
              <span
                key={i}
                className={`dot ${i === index ? 'active' : ''}`}
                onClick={() => setIndex(i)}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

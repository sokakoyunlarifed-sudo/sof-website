// src/Components/Etkinlikler/EtkinlikDetay.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './Etkinlikler.css';

export default function EtkinlikDetay() {
  const { id } = useParams();
  const [etkinlik, setEtkinlik] = useState(null);

  useEffect(() => {
    fetch('/data/etkinlikler.json')
      .then((res) => res.json())
      .then((data) => {
        const selected = data.find((item) => item.id.toString() === id);
        setEtkinlik(selected);
      });
  }, [id]);

  if (!etkinlik) return <div className="loading">Yükleniyor...</div>;

  return (
    <div className="detayContainer">
      <h1>{etkinlik.title}</h1>
      <p className="date">{etkinlik.date}</p>
      <img src={etkinlik.image} alt={etkinlik.title} className="detayImage" />
      <p>{etkinlik.content}</p>
    </div>
  );
}

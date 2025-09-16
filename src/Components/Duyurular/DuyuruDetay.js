// src/Components/Duyurular/DuyuruDetay.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './Duyurular.css';

export default function DuyuruDetay() {
  const { id } = useParams();
  const [duyuru, setDuyuru] = useState(null);

  useEffect(() => {
    fetch('/data/duyurular.json')
      .then((res) => res.json())
      .then((data) => {
        const selected = data.find((item) => item.id.toString() === id);
        setDuyuru(selected);
      });
  }, [id]);

  if (!duyuru) return <div className="loading">Yükleniyor...</div>;

  return (
    <div className="detayContainer">
      <h1>{duyuru.title}</h1>
      <p className="date">{duyuru.date}</p>
      <img src={duyuru.image} alt={duyuru.title} className="detayImage" />
      <p>{duyuru.content}</p>
    </div>
  );
}

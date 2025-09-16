import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export default function HaberDetay() {
  const { id } = useParams();
  const [haber, setHaber] = useState(null);

  useEffect(() => {
    fetch('/data/news.json')
      .then((res) => res.json())
      .then((data) => {
        const selected = data.find(item => String(item.id) === id);
        setHaber(selected);
      });
  }, [id]);

  if (!haber) return <p>Yükleniyor...</p>;

  return (
    <div className="haberDetayContainer">
      <h2>{haber.title}</h2>
      <p className="date">{haber.date}</p>
      <img src={haber.image} alt={haber.title} style={{ width: '100%', maxWidth: 800 }} />
      <p>{haber.desc}</p>
    </div>
  );
}

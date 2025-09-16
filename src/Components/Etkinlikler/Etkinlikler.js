import React, { useEffect, useState } from 'react';
import './Etkinlikler.css';
import { useNavigate } from 'react-router-dom';
import AnimatedCard from '../common/AnimatedCard';

export default function Etkinlikler() {
  const [etkinlikler, setEtkinlikler] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch('/data/etkinlikler.json')
      .then(res => res.json())
      .then(data => setEtkinlikler(data));
  }, []);

  return (
    <div className="etkinliklerPage">
      <h1>🎉 Etkinlikler</h1>
      <div className="etkinliklerGrid">
        {etkinlikler.map(item => (
          <AnimatedCard
            key={item.id}
            onClick={() => navigate(`/etkinlik/${item.id}`)}
          >
            <img
              src={item.image}
              alt={item.title}
              style={{
                width: '100%',
                borderRadius: 12,
                marginBottom: 12,
              }}
            />
            <h3 style={{ marginBottom: 6 }}>{item.title}</h3>
            <p className="date">{item.date}</p>
            <p>{item.desc}</p>
          </AnimatedCard>
        ))}
      </div>
    </div>
  );
}

import React, { useEffect, useState } from 'react';
import './Duyurular.css';
import { useNavigate } from 'react-router-dom';
import AnimatedCard from '../common/AnimatedCard';

export default function Duyurular() {
  const [duyurular, setDuyurular] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch('/data/duyurular.json')
      .then(res => res.json())
      .then(data => setDuyurular(data));
  }, []);

  return (
    <div className="duyurularPage">
      <h1>📌 Tüm Duyurular</h1>
      <div className="duyurularGrid">
        {duyurular.map(item => (
          <AnimatedCard
            key={item.id}
            onClick={() => navigate(`/duyuru/${item.id}`)}
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

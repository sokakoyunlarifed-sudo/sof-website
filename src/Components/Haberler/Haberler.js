import React, { useEffect, useState } from 'react';
import './Haberler.css';
import { useNavigate } from 'react-router-dom';
import AnimatedCard from '../common/AnimatedCard';

export default function Haberler() {
  const [news, setNews] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch('/data/news.json')
      .then(res => res.json())
      .then(data => setNews(data));
  }, []);

  return (
    <div className="haberlerPage">
      <h1>📰 Tüm Haberler</h1>
      <div className="haberlerGrid">
        {news.map(item => (
          <AnimatedCard
            key={item.id}
            onClick={() => navigate(`/haber/${item.id}`)}
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

// src/Components/Admin/EtkinlikYonet.js
import React, { useEffect, useState } from 'react';

export default function EtkinlikYonet() {
  const [etkinlikler, setEtkinlikler] = useState([]);

  useEffect(() => {
    fetch('/data/etkinlikler.json')
      .then((res) => res.json())
      .then((data) => setEtkinlikler(data));
  }, []);

  return (
    <div style={{ padding: '30px' }}>
      <h2>🎉 Etkinlik Yönetimi</h2>
      {etkinlikler.map((item) => (
        <div key={item.id} style={{ marginBottom: '20px' }}>
          <strong>{item.title}</strong>
          <p>{item.desc}</p>
        </div>
      ))}
    </div>
  );
}

// src/Components/Admin/DuyuruYonet.js
import React, { useEffect, useState } from 'react';

export default function DuyuruYonet() {
  const [duyurular, setDuyurular] = useState([]);

  useEffect(() => {
    fetch('/data/duyurular.json')
      .then((res) => res.json())
      .then((data) => setDuyurular(data));
  }, []);

  return (
    <div style={{ padding: '30px' }}>
      <h2>📢 Duyuru Yönetimi</h2>
      {duyurular.map((item) => (
        <div key={item.id} style={{ marginBottom: '20px' }}>
          <strong>{item.title}</strong>
          <p>{item.desc}</p>
        </div>
      ))}
    </div>
  );
}

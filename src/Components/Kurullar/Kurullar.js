import React, { useEffect, useState } from 'react';
import './Kurullar.css';

export default function Kurullar() {
  const [kurullar, setKurullar] = useState([]);

  useEffect(() => {
    fetch('/data/kurullar.json')
      .then(res => res.json())
      .then(data => setKurullar(data));
  }, []);

  return (
    <div className="kurullarPage">
      <h1>🏛️ Kurullar</h1>
      <div className="kurulList">
        {kurullar.map((item) => (
          <div key={item.id} className="kurulCard">
            <h2>{item.name}</h2>
            <p>{item.description}</p>
            <ul>
              {item.members.map((member, index) => (
                <li key={index}>{member}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

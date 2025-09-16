import React, { useState, useEffect } from 'react';
    


export default function HaberYonet() {
  const [haberler, setHaberler] = useState([]);
  const [newHaber, setNewHaber] = useState({ title: '', date: '', image: '', desc: '' });

  useEffect(() => {
    fetch('/data/news.json')
      .then(res => res.json())
      .then(data => setHaberler(data))
      .catch(err => console.error('Veri alınamadı:', err));
  }, []);
  const handleChange = (e) => {
    setNewHaber({ ...newHaber, [e.target.name]: e.target.value });
  };

  const handleAdd = () => {
    setHaberler([...haberler, { ...newHaber, id: Date.now() }]);
    setNewHaber({ title: '', date: '', image: '', desc: '' });
  };

  return (
    <div style={{ padding: 40 }}>
      <h2>📰 Haber Yönetimi</h2>

      <h3>Yeni Haber Ekle</h3>
      <input name="title" placeholder="Başlık" value={newHaber.title} onChange={handleChange} />
      <input name="date" placeholder="Tarih" value={newHaber.date} onChange={handleChange} />
      <input name="image" placeholder="Resim URL" value={newHaber.image} onChange={handleChange} />
      <textarea name="desc" placeholder="Açıklama" value={newHaber.desc} onChange={handleChange} />
      <button onClick={handleAdd}>Ekle</button>

      <h3>Mevcut Haberler</h3>
      <ul>
        {haberler.map(h => (
          <li key={h.id}>
            <strong>{h.title}</strong> ({h.date}) <br />
            <img src={h.image} alt="" width="100" />
            <p>{h.desc}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

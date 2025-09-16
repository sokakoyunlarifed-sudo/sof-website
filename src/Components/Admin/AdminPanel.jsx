import React, { useState, useEffect } from 'react';
import './AdminPanel.css';

export default function AdminPanel() {
  const [section, setSection] = useState('duyurular');
  const [data, setData] = useState([]);
  const [formData, setFormData] = useState(null); // edit veya add için kullanılan form
  const [editIndex, setEditIndex] = useState(null);
const savedData = localStorage.getItem(section);
  useEffect(() => {
  let jsonPath = ''; // ❗ Bunu if dışına taşıdık

  if (savedData) {
    setData(JSON.parse(savedData));
  } else {
    if (section === 'duyurular') jsonPath = '/data/duyurular.json';
    if (section === 'haberler') jsonPath = '/data/news.json';
    if (section === 'etkinlikler') jsonPath = '/data/etkinlikler.json';

    fetch(jsonPath)
      .then(res => res.json())
      .then(json => setData(json))
      .catch(err => console.error('Veri alınamadı:', err));
  }
}, [section]);


  const handleDelete = (index) => {
  const updated = data.filter((_, i) => i !== index);
  setData(updated);
  localStorage.setItem(section, JSON.stringify(updated)); // 🌟 Silindikten sonra da kaydet
};


  const handleEdit = (item, index) => {
    setFormData(item);
    setEditIndex(index);
  };

  const handleAdd = () => {
    setFormData({ title: '', desc: '', date: '', image: '' });
    setEditIndex(null);
  };

  const handleSubmit = (e) => {
  e.preventDefault();
  let updated;
  if (editIndex !== null) {
    updated = [...data];
    updated[editIndex] = formData;
  } else {
    updated = [...data, { ...formData, id: Date.now() }];
  }
  setData(updated);
  localStorage.setItem(section, JSON.stringify(updated)); // 🌟 Veriyi kaydet
  setFormData(null);
  setEditIndex(null);
};

  const convertImageToBase64 = (e) => {
  const file = e.target.files[0];
  const reader = new FileReader();
  reader.onloadend = () => {
    setFormData({ ...formData, image: reader.result });
  };
  if (file) {
    reader.readAsDataURL(file);
  }
};


  return (
    <div className="admin-panel">
      <aside className="admin-sidebar">
        <h2>Federasyon Admin</h2>
        <ul>
          <li onClick={() => setSection('duyurular')} className={section === 'duyurular' ? 'active' : ''}>📢 Duyurular</li>
          <li onClick={() => setSection('haberler')} className={section === 'haberler' ? 'active' : ''}>📰 Haberler</li>
          <li onClick={() => setSection('etkinlikler')} className={section === 'etkinlikler' ? 'active' : ''}>🎉 Etkinlikler</li>
        </ul>
      </aside>

      <main className="admin-content">
        <div className="header">
          <h2>{section.toUpperCase()}</h2>
          <button className="btn btn-add" onClick={handleAdd}>+ Yeni {section.slice(0, -1)}</button>
        </div>

        {formData && (
          <form className="inline-form" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Title"
              value={formData.title}
              onChange={e => setFormData({ ...formData, title: e.target.value })}
              required
            />
            <input
              type="text"
              placeholder="Date (yyyy-aa-gg)"
              value={formData.date}
              onChange={e => setFormData({ ...formData, date: e.target.value })}
            />
            <input
  type="file"
  onChange={(e) => convertImageToBase64(e)}
  accept="image/*"
/>

            <textarea
              placeholder="Description"
              rows="3"
              value={formData.desc}
              onChange={e => setFormData({ ...formData, desc: e.target.value })}
            />
            <div className="buttons">
              <button className="btn btn-add" type="submit">Kaydet</button>
              <button className="btn btn-delete" type="button" onClick={() => setFormData(null)}>İptal</button>
            </div>
          </form>
        )}

        <div className="card-list">
          {data.map((item, index) => (
            <div className="card" key={item.id || index}>
              <h4>{item.title}</h4>
              {item.date && <p className="date">{item.date}</p>}
              {item.desc && <p>{item.desc}</p>}
              {item.image && <img src={item.image} alt="img" className="card-image" />}

              <div className="buttons">
                <button className="btn btn-edit" onClick={() => handleEdit(item, index)}>Düzenle</button>
                <button className="btn btn-delete" onClick={() => handleDelete(index)}>Sil</button>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

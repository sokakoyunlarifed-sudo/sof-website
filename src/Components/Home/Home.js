import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import DuyurularSlider from './DuyurularSlider';

export default function Home() {
  const [news, setNews] = useState([]);
  const [duyurular, setDuyurular] = useState([]);
  const [etkinlikler, setEtkinlikler] = useState([]);

  useEffect(() => {
    fetch('/data/news.json')
      .then((res) => res.json())
      .then((data) => setNews(data));

    fetch('/data/duyurular.json')
      .then((res) => res.json())
      .then((data) => setDuyurular(data));

    fetch('/data/etkinlikler.json')
      .then((res) => res.json())
      .then((data) => setEtkinlikler(data));
  }, []);

  return (
  <div className='mainHome'>

    {/* DUYURULAR */}
    <section className='sectionDuyurular'>
      <DuyurularSlider />
    </section>

    {/* HABERLER */}
    <section className='sectionHaberler'>
      <h2 className='sectionTitle'>📰 Haberler</h2>
      <div className='haberGrid'>
        {news.map((item) => (
          <div key={item.id} className='haberCard'>
            <div className='haberImageWrapper'>
              <img src={item.image} alt={item.title} className='haberImage' />
            </div>
            <div className='haberContent'>
              <h3 className='haberTitle'>{item.title}</h3>
              <p className='haberDate'>{item.date}</p>
              <p className='haberDesc'>{item.desc}</p>
              <Link to={`/haber/${item.id}`} className='haberReadMore'>Detaylı Oku</Link>
            </div>
          </div>
        ))}
      </div>
    </section>

    {/* ETKİNLİKLER */}
    <section className='sectionEtkinlikler'>
      <h2 className='sectionTitle'>🎉 Yaklaşan Etkinlikler</h2>
      <div className='haberGrid'>
        {etkinlikler.map((item) => (
          <div key={item.id} className='haberCard'>
            <div className='haberImageWrapper'>
              <img src={item.image} alt={item.title} className='haberImage' />
            </div>
            <div className='haberContent'>
              <h3 className='haberTitle'>{item.title}</h3>
              <p className='haberDate'>{item.date}</p>
              <p className='haberDesc'>{item.desc}</p>
              <Link to={`/etkinlik/${item.id}`} className='haberReadMore'>Detaylı Oku</Link>
            </div>
          </div>
        ))}
      </div>
    </section>

  </div>
);

}

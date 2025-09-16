import React from 'react';
import './Footer.css';
import {
  FaInstagram, FaFacebookF, FaTwitter, FaYoutube,
  FaMapMarkerAlt, FaPhoneAlt, FaEnvelope
} from 'react-icons/fa';
import logo from '../../logo.svg'; // logo yolun buysa böyle bırak

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__topline"></div>   
      <div className="footer__container">
        {/* Sol: Logo + kısa açıklama */}
        <div className="footer__brand">
          <img src={logo} alt="Sokak Oyunları Federasyonu" className="footer__logo" />
          <div>
            <h4 className="footer__title">Sokak Oyunları Federasyonu</h4>
            <p className="footer__tagline">
              Geleneksel oyunlarımızı yaşatmak ve gelecek nesillere aktarmak için çalışıyoruz.
            </p>
          </div>
        </div>

        {/* Orta: Menü (iki kolon) */}
        <nav className="footer__nav">
          <h5>Menü</h5>
          <ul className="footer__links">
            <li><a href="/">Ana Sayfa</a></li>
            <li><a href="/haberler">Haberler</a></li>
            <li><a href="/duyurular">Duyurular</a></li>
            <li><a href="/etkinlikler">Etkinlikler</a></li>
            <li><a href="/kurullar">Kurullar</a></li>
            <li><a href="/iletisim">İletişim</a></li>
          </ul>
        </nav>

        {/* Sağ: İletişim + Sosyal */}
        <div className="footer__contact">
          <h5>İletişim</h5>
          <ul className="contact__list">
            <li><FaMapMarkerAlt /><span>Ankara, Türkiye</span></li>
            <li><FaPhoneAlt /><span>+90 312 123 45 67</span></li>
            <li><FaEnvelope /><span>info@sokakoyunlari.org</span></li>
          </ul>

          <div className="footer__social">
            <a href="https://instagram.com/sofederasyonu" target="_blank" rel="noreferrer"><FaInstagram /></a>
            <a href="https://facebook.com/sofederasyonu"  target="_blank" rel="noreferrer"><FaFacebookF /></a>
            <a href="https://twitter.com/sofederasyonu"   target="_blank" rel="noreferrer"><FaTwitter /></a>
            <a href="https://youtube.com/sofederasyonu"   target="_blank" rel="noreferrer"><FaYoutube /></a>
          </div>
        </div>
      </div>

      <div className="footer__bottom">
        © {new Date().getFullYear()} Sokak Oyunları Federasyonu — Tüm hakları saklıdır.
      </div>
    </footer>
  );
}

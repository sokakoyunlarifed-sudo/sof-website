import React from 'react';
import './Iletisim.css';

export default function Iletisim() {
  return (
    <div className="iletisimPage">
      <h1>📞 İletişim</h1>
      <p>
        Her türlü soru, öneri ve iş birliği talepleriniz için bizimle iletişime geçebilirsiniz.
      </p>

      <div className="iletisimInfo">
        <p><strong>📍 Adres:</strong> Sokak Oyunları Federasyonu, Atatürk Mah. 123. Cad. No:45, Ankara</p>
        <p><strong>📧 E-posta:</strong> info@sokakoyunlari.org</p>
        <p><strong>📞 Telefon:</strong> +90 312 123 45 67</p>
      </div>

      <form className="iletisimForm">
        <input type="text" placeholder="Ad Soyad" required />
        <input type="email" placeholder="E-posta" required />
        <textarea placeholder="Mesajınız" rows="5" required></textarea>
        <button type="submit">Gönder</button>
      </form>
    </div>
  );
}

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function AdminLogin() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // Geçici sabit kullanıcı bilgisi
    if (username === 'admin' && password === '1234') {
      localStorage.setItem('isAdmin', 'true');
      navigate('/admin/panel');
    } else {
      alert('Kullanıcı adı veya şifre yanlış');
    }
  };

  return (
    <div className="adminLoginContainer">
      <h2>Admin Giriş</h2>
      <form onSubmit={handleLogin}>
        <input
          type="text"
          placeholder="Kullanıcı Adı"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        /><br />
        <input
          type="password"
          placeholder="Şifre"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        /><br />
        <button type="submit">Giriş Yap</button>
      </form>
    </div>
  );
}

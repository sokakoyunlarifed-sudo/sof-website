import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';
import { Navigate, BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import LoadingLogo from './Components/common/LoadingLogo';
import İletisim from './Components/Iletisim/İletisim';
import Duyurular from './Components/Duyurular/Duyurular';
import Etkinlikler from './Components/Etkinlikler/Etkinlikler';
import Kurullar from './Components/Kurullar/Kurullar';
import TopBar from './Components/TopBar/TopBar';
import Home from './Components/Home/Home';
import Haberler from './Components/Haberler/Haberler';
import HaberDetay from './Components/Haberler/HaberDetay';
import DuyuruDetay from './Components/Duyurular/DuyuruDetay';
import EtkinlikDetay from './Components/Etkinlikler/EtkinlikDetay';
import Hakkimizda from './Components/Hakkimizda/Hakkimizda';
import Footer from './Components/Footer/Footer';

import AdminPanel from './Components/Admin/AdminPanel';
import AdminLogin from './Components/Admin/AdminLogin';
import HaberYonet from './Components/Admin/HaberYonet';

function PrivateRoute({ children }) {
  const isAdmin = localStorage.getItem('isAdmin');
  return isAdmin === 'true' ? children : <Navigate to="/admin/login" />;
}

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Promise.all([
      fetch('/data/news.json').then(res => res.json()),
      fetch('/data/duyurular.json').then(res => res.json()),
      fetch('/data/etkinlikler.json').then(res => res.json())
    ])
      .then(() => setLoading(false))
      .catch(() => setLoading(false));
  }, []);

  if (loading) return <LoadingLogo />;

  return (
    <Router>
      <Routes>
        {/* Public routes */}
        <Route path="*" element={
          <>
            <TopBar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/haberler" element={<Haberler />} />
              <Route path="/iletisim" element={<İletisim />} />
              <Route path="/duyurular" element={<Duyurular />} />
              <Route path="/etkinlikler" element={<Etkinlikler />} />
              <Route path="/kurullar" element={<Kurullar />} />
              <Route path="/haber/:id" element={<HaberDetay />} />
              <Route path="/duyuru/:id" element={<DuyuruDetay />} />
              <Route path="/etkinlik/:id" element={<EtkinlikDetay />} />
              <Route path="/hakkimizda" element={<Hakkimizda />} />
            </Routes>
            <Footer />
          </>
        }/>

        {/* Admin routes (no TopBar / Footer) */}
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/admin/panel" element={
          <PrivateRoute>
            <AdminPanel />
          </PrivateRoute>
        } />
        <Route path="/admin/haberler" element={
          <PrivateRoute>
            <HaberYonet />
          </PrivateRoute>
        } />
      </Routes>
    </Router>
  );
}

export default App;

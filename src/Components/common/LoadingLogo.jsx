import React from 'react';
import logo from '../../logo.svg'; // kendi logon burada
import './LoadingLogo.css';

export default function LoadingLogo() {
  return (
    <div className="loading-screen">
      <img src={logo} className="loading-logo" alt="Loading..." />
    </div>
  );
}

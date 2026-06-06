import React from 'react';
// ✨ 1. Import Link dan useNavigate dari react-router-dom
import { Link, useNavigate } from 'react-router-dom'; 
import Button from '../common/Button';
import { landingData } from '../../data/landingData';

const Navbar = () => {
  // ✨ 2. Inisialisasi hook useNavigate
  const navigate = useNavigate(); 

  // ✨ 3. Buat fungsi untuk menangani klik tombol
  const handleTryBotClick = () => {
    navigate('/profile'); 
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <span className="logo-icon">🛡️</span> PERSIB AI
      </div>
      
      <ul className="navbar-links">
        {landingData.navLinks.map((link, index) => (
          <li key={index}><a href={link.href}>{link.label}</a></li>
        ))}
      </ul>
      
      <div className="navbar-actions">
        {/* ✨ 4. Ubah tag <a> menjadi <Link> untuk teks Login */}
        <Link to="/profile" className="login-link">
          Login
        </Link>
        
        {/* ✨ 5. Tambahkan event onClick pada komponen Button */}
        <Button variant="primary" onClick={handleTryBotClick}>
          Try Maung Bot
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
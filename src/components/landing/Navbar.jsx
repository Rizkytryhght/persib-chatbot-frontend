import React, { useState } from 'react'; // KUNCI 1: Import useState
import { Link, useNavigate } from 'react-router-dom'; 
import Button from '../common/Button';
import { landingData } from '../../data/landingData';
import logoPersib from '../../assets/images/persib-logo.png';
import '../../styles/landing.css';

const Navbar = () => {
  const navigate = useNavigate();
  // State untuk mengontrol Hamburger Menu
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Fungsi untuk toggle menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Fungsi untuk menutup menu saat link diklik (UX terbaik)
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={logoPersib} alt="Persib Logo" style={{ width: '32px', height: '32px' }} />
        MAUNG BOT
      </div>
      
      {/* Tombol Hamburger */}
      <div className={`hamburger ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
      
      {/* Wrapper Menu - akan menjadi flex-row di desktop, dan dropdown di mobile */}
      <div className={`navbar-menu ${isMenuOpen ? 'active' : ''}`}>
        
        {/* KUNCI 2: Ubah ul/li menjadi div dan a tag agar selaras dengan CSS */}
        <div className="navbar-links">
          {landingData.navLinks.map((link, index) => (
            <a key={index} href={link.href} onClick={closeMenu}>
              {link.label}
            </a>
          ))}
        </div>
        
        <div className="navbar-actions">
          <Link to="/profile" className="login-link" onClick={closeMenu}>Login</Link>
          <Button 
            variant="primary" 
            onClick={() => { 
              closeMenu(); 
              navigate('/profile'); 
            }}
          >
            Try Maung Bot
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
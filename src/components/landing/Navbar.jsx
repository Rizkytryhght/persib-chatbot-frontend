import React from 'react';
import { Link, useNavigate } from 'react-router-dom'; 
import Button from '../common/Button';
import { landingData } from '../../data/landingData';
import logoPersib from '../../assets/images/persib-logo.png'; // Import Logo

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={logoPersib} alt="Persib Logo" style={{ width: '32px', height: '32px' }} />
        MAUNG BOT
      </div>
      
      <ul className="navbar-links">
        {landingData.navLinks.map((link, index) => (
          <li key={index}><a href={link.href}>{link.label}</a></li>
        ))}
      </ul>
      
      <div className="navbar-actions">
        <Link to="/profile" className="login-link">Login</Link>
        <Button variant="primary" onClick={() => navigate('/profile')}>Try Maung Bot</Button>
      </div>
    </nav>
  );
};

export default Navbar;
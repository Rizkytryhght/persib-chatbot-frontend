import React from 'react';
import persibLogo from "../../assets/images/persib-logo.png";
import instagramIcon from "../../assets/images/instagram2.jpg";
import linkedinIcon from "../../assets/images/linkedin.png";
import youtubeIcon from "../../assets/images/youtube2.jpg";
import twitterIcon from "../../assets/images/X2.jpg";

const SOCIAL_LINKS = [
  { href: "https://x.com/persib", icon: twitterIcon, label: "X / Twitter" },
  { href: "https://www.instagram.com/persib/?hl=id", icon: instagramIcon, label: "Instagram" },
  { href: "https://id.linkedin.com/company/persib", icon: linkedinIcon, label: "LinkedIn" },
  { href: "https://www.youtube.com/channel/UCq9VjkTSRBvlyr0sSXwm8Kw", icon: youtubeIcon, label: "YouTube" },
];
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-brand">
          <div className="footer-logo">  
            <img src={persibLogo} alt="Persib Logo" className="footer-logo-img"/>
            <span>PERSIB</span></div>
          <p className="social-text">Cleaned social media</p>
          <div className="social-icons">
            {SOCIAL_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
              >
                <img src={link.icon} alt={link.label} className="social-icon" />
              </a>
            ))}
          </div>
        </div>
        <div className="footer-links-grid">
          <div className="footer-column">
            <h4>Produk</h4>
            <a href="#">Fitur Utama</a>
            <a href="#">AI Legends</a>
            <a href="#">Tiket VIP</a>
            <a href="#">Merchandise</a>
          </div>
          <div className="footer-column">
            <h4>Perusahaan</h4>
            <a href="#">Tentang Kami</a>
            <a href="#">Karier</a>
            <a href="#">Kontak</a>
            <a href="#">Press Kit</a>
          </div>
          <div className="footer-column">
            <h4>Legal</h4>
            <a href="#">Privasi</a>
            <a href="#">Ketentuan</a>
            <a href="#">Keamanan</a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2024 PT PERSIB Bandung Bermartabat. All rights reserved.</p>
        <p>Designed with Passion for Bobotoh.</p>
      </div>
    </footer>
  );
};

export default Footer;
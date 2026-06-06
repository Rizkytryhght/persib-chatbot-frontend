import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-brand">
          <div className="footer-logo">🛡️ PERSIB AI Branding</div>
          <p className="social-text">Cleaned social media</p>
          <div className="social-icons">
            <span>🐦</span>
            <span>📸</span>
            <span>in</span>
            <span>▶️</span>
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
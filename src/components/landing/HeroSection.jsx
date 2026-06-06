import React from 'react';
import Button from '../common/Button';

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <h1 className="hero-title">
          Jawaban Cepat untuk Bobotoh, Didukung AI & Data Resmi Persib
        </h1>
        <p className="hero-description">
          Perkenalkan Maung Bot, asisten customer service bertenaga Large Language Model (LLM) dan Retrieval-Augmented Generation (RAG) yang siap menjawab seluruh pertanyaan Anda tentang tiket, jadwal pertandingan, keanggotaan, dan informasi resmi lainnya secara instan.
        </p>
        <div className="hero-buttons">
          <Button variant="primary">Uji Coba Maung Bot</Button>
          <Button variant="outline">Pelajari Teknologi RAG &rarr;</Button>
        </div>
      </div>
      
      <div className="hero-mockup">
        <div className="chat-window">
          <div className="chat-header">
            <span className="bot-avatar">🤖</span>
            <div className="bot-info">
              <h4>MAUNG BOT</h4>
              <p><span className="status-dot"></span> Online • Master Juara Mode</p>
            </div>
          </div>
          <div className="chat-body">
            <div className="message user-message">
              <p>Kapan pertandingan Persib berikutnya?</p>
            </div>
            <div className="message bot-message">
              <p>Persib Bandung akan menghadapi Bali United pada hari Sabtu, 15 Juni pukul 16:00 WIB di Stadion Gelora Bandung Lautan Api. Tiket segera diumumkan.</p>
            </div>
            <div className="message bot-typing">
              <div className="typing-dots">
                <span></span><span></span><span></span>
              </div>
            </div>
          </div>
          <div className="chat-input-area">
            <input type="text" placeholder="Tanya Legenda..." readOnly />
            <button className="send-btn">➤</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
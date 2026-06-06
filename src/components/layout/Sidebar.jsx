import { Link } from "react-router-dom";

import "../../styles/sidebar.css";

function Sidebar() {
  return (
    <aside className="sidebar">

      <div>

        <div className="sidebar-brand">

          <div className="brand-logo">
            🤖
          </div>

          <div className="brand-text">
            <h2>MAUNG BOT</h2>
            <span>OFFICIAL AI</span>
          </div>

        </div>

        <button className="new-chat-btn">
          + Obrolan Baru
        </button>

        <div className="menu-title">
          MENU UTAMA
        </div>

        <nav>

          <Link
            to="/chat"
            className="menu-item active"
          >
            💬 Chat Sekarang
          </Link>

        </nav>

      </div>

      <div className="sidebar-footer">

        <div className="settings-menu">

          <div className="settings-title">
            ⚙ Settings
          </div>

          <Link
            to="/settings"
            className="submenu-item"
          >
            Tone
          </Link>

          <Link
            to="/settings"
            className="submenu-item"
          >
            Language
          </Link>

        </div>

        <button className="logout-btn">
          ↪ Keluar
        </button>

      </div>

    </aside>
  );
}

export default Sidebar;
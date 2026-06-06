import "../../styles/topbar.css";
import userData from "../../data/userData";
import { Link } from "react-router-dom";
import profileImage from "../../assets/images/fotoDefault.jpg"

function Topbar() {
  return (
    <header className="topbar">
      <div className="topbar-right">
        <button className="topbar-icon">💬</button>
        <button className="topbar-icon">🛡️</button>

        <Link to="/profile" className="profile-link">
          <div className="user-info">
            <div className="user-name">{userData.name}</div>
            <div className="user-role">{userData.role}</div>
          </div>
          
          {/* 2. Ganti div user-avatar lama dengan tag img */}
          <div className="user-avatar">
            <img 
              src={profileImage} 
              alt={userData.name} 
              className="avatar-image-topbar" 
            />
          </div>
        </Link>
      </div>
    </header>
  );
}

export default Topbar;
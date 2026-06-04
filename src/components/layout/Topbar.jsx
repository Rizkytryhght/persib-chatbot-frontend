import "../../styles/topbar.css";
import userData from "../../data/userData";
import { Link } from "react-router-dom";

function Topbar() {
  return (
    <header className="topbar">

      <div className="topbar-right">

        <button className="topbar-icon">
          💬
        </button>

        <button className="topbar-icon">
          🛡️
        </button>

        <Link
        to="/profile"
        className="profile-link"
        >

            <div className="user-info">

                <div className="user-name">
                {userData.name}
                </div>

                <div className="user-role">
                {userData.role}
                </div>

            </div>

            <div className="user-avatar">
                👤
            </div>

        </Link>

      </div>

    </header>
  );
}

export default Topbar;
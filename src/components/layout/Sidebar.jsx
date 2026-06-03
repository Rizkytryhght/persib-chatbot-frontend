import { Link } from "react-router-dom";
import "../../styles/sidebar.css";

function Sidebar() {
  return (
    <aside className="sidebar">

      <div className="sidebar-header">
        <div className="sidebar-title">
          MAUNG BOT
        </div>
      </div>

      <div className="sidebar-menu">

        <Link to="/profile">
          <div className="sidebar-item">
            Profile
          </div>
        </Link>

        <Link to="/settings">
          <div className="sidebar-item">
            Settings
          </div>
        </Link>

      </div>

    </aside>
  );
}

export default Sidebar;
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div
      style={{
        width: "250px",
        height: "100vh",
        background: "#071425",
        color: "white",
        padding: "20px",
      }}
    >
      <h2>MAUNG BOT</h2>

      <br />

      <Link to="/profile">
        <button>Profile</button>
      </Link>

      <br />
      <br />

      <Link to="/settings">
        <button>Settings</button>
      </Link>
    </div>
  );
}

export default Sidebar;
import Sidebar from "../components/layout/Sidebar";
import Topbar from "../components/layout/Topbar";

function Settings() {
  return (
    <div
      style={{
        display: "flex",
      }}
    >
      <Sidebar />

      <div
        style={{
          flex: 1,
          background: "#0B3AB8",
          minHeight: "100vh",
        }}
      >
        <Topbar />

        <div
          style={{
            padding: "30px",
            color: "white",
          }}
        >
          <h1>Settings</h1>

          <br />

          <h2>Notifications</h2>

          <input type="checkbox" />

          <br />
          <br />

          <h2>Languages</h2>

          <select>
            <option>English</option>
            <option>Indonesia</option>
          </select>

          <br />
          <br />

          <h2>Tone</h2>

          <select>
            <option>Formal</option>
            <option>Casual</option>
          </select>

          <br />
          <br />

          <button>Update</button>
        </div>
      </div>
    </div>
  );
}

export default Settings;
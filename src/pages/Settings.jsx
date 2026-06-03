import DashboardLayout from "../components/layout/DashboardLayout";

function Settings() {
  return (
    <DashboardLayout>
      <div
        style={{
          padding: "30px",
          background: "#0B3AB8",
          minHeight: "100%",
          color: "white",
        }}
      >
        <h1>Settings</h1>

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
    </DashboardLayout>
  );
}

export default Settings;
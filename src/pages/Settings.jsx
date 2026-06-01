// Landing.jsx
import { Link } from "react-router-dom";

function Settings() {
  return (
    <div>
      <h1>Settings Page</h1>;

      <Link to="/">
        <button>Go to Landing Page</button>
      </Link>
    </div>
  );  
}

export default Settings;
// Landing.jsx
import { Link } from "react-router-dom";

function Profile() {
  return (
    <div>
      <h1>Profile Page</h1>;

      <Link to="/settings">
        <button>Go to Settings</button>
      </Link>
    </div>
  );  
}

export default Profile;
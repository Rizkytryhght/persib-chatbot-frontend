// Landing.jsx
import { Link } from "react-router-dom";

function LandingPage(){
  return(
    <div>
      <h1>Landing Page</h1>

      <Link to="/profile">
        <button>Go to Profile</button>
      </Link>
    </div>
  );
}

export default LandingPage;
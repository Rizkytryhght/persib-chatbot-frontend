import Input from "../common/Input";

import userData from "../../data/userData";

function ProfileInfoSection() {
  return (
    <div className="profile-section">

      <h2>
        Personal Information
      </h2>

      <div className="profile-grid">

        <Input
          label="Your fullname*"
          value={userData.name}
        />

        <Input
          label="Your email*"
          type="email"
          value={userData.email}
        />

      </div>

    </div>
  );
}

export default ProfileInfoSection;
import ProfileAvatar from "./ProfileAvatar";
import ProfileInfoSection from "./ProfileInfoSection";
import PasswordSection from "./PasswordSection";

import Button from "../common/Button";

function ProfileForm() {
  return (
    <div className="profile-card">

      <ProfileAvatar />

      <ProfileInfoSection />

      <div className="profile-divider"></div>

      <PasswordSection />

      <div className="profile-actions">

      <Button className="profile-update-btn">
        Update →
      </Button>

      </div>

    </div>
  );
}

export default ProfileForm;
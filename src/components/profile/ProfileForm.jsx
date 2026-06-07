import { useState } from "react";
import userData from "../../data/userData";
import ProfileAvatar from "./ProfileAvatar";
import ProfileInfoSection from "./ProfileInfoSection";
import PasswordSection from "./PasswordSection";
import Button from "../common/Button";

function ProfileForm() {
  // Mengambil data dari localStorage saat pertama kali load
  const [formData, setFormData] = useState(() => {
    const savedData = localStorage.getItem("userProfile");
    return savedData ? JSON.parse(savedData) : userData;
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSave = () => {
    // Menyimpan data ke localStorage
    localStorage.setItem("userProfile", JSON.stringify(formData));
    alert("Profil berhasil disimpan di browser!");
  };

  return (
    <div className="profile-card">
      <ProfileAvatar />
      <ProfileInfoSection formData={formData} onChange={handleInputChange} />
      <div className="profile-divider"></div>
      <PasswordSection formData={formData} onChange={handleInputChange} />
      
      <div className="profile-actions">
        <Button className="profile-update-btn" onClick={handleSave}>
          Update →
        </Button>
      </div>
    </div>
  );
}
export default ProfileForm;
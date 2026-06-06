// components/profile/PasswordSection.jsx
import Input from "../common/Input";

function PasswordSection({ formData, onChange }) {
  return (
    <div className="profile-section">
      <h2>Password</h2>
      <div className="profile-grid">
        <Input
          label="Password*"
          name="password"
          type="password"
          value={formData.password || ""} // Tambahkan || "" agar tidak error saat kosong
          onChange={onChange}
          placeholder="Masukkan password baru" // << Ini yang bikin placeholder muncul
        />
        <Input
          label="Confirm Password*"
          name="confirmPassword"
          type="password"
          value={formData.confirmPassword || ""} // Tambahkan || ""
          onChange={onChange}
          placeholder="Konfirmasi password baru" // << Ini yang bikin placeholder muncul
        />
      </div>
    </div>
  );
}
export default PasswordSection;
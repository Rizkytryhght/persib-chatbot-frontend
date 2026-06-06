import Input from "../common/Input";

function PasswordSection() {
  return (
    <div className="profile-section">

      <h2>
        Password
      </h2>

      <div className="profile-grid">

        <Input
          label="Password*"
          type="password"
          value="password123"
        />

        <Input
          label="Confirm Password*"
          type="password"
          value="password123"
        />

      </div>

    </div>
  );
}

export default PasswordSection;
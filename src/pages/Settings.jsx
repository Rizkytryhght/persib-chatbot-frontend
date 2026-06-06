import { useState } from "react";
import DashboardLayout from "../components/layout/DashboardLayout";
import NotificationCard from "../components/settings/NotificationCard";
import LanguageCard from "../components/settings/LanguageCard";
import ToneCard from "../components/settings/ToneCard";
import Button from "../components/common/Button";
import "../styles/settings.css";

function Settings() {
  const [notifications, setNotifications] = useState(() => 
    JSON.parse(localStorage.getItem("settings_notifications")) ?? true
  );
  const [systemLanguage, setSystemLanguage] = useState(() => 
    localStorage.getItem("settings_systemLanguage") ?? "English"
  );
  const [generationLanguage, setGenerationLanguage] = useState(() => 
    localStorage.getItem("settings_generationLanguage") ?? "English"
  );
  const [tone, setTone] = useState(() => 
    localStorage.getItem("settings_tone") ?? "Formal"
  );
  const [formalityLevel, setFormalityLevel] = useState(() => 
    localStorage.getItem("settings_formalityLevel") ?? "Casual"
  );

  // Fungsi yang dijalankan saat tombol diklik
  const handleSave = () => {
    localStorage.setItem("settings_notifications", JSON.stringify(notifications));
    localStorage.setItem("settings_systemLanguage", systemLanguage);
    localStorage.setItem("settings_generationLanguage", generationLanguage);
    localStorage.setItem("settings_tone", tone);
    localStorage.setItem("settings_formalityLevel", formalityLevel);
    
    alert("Pengaturan berhasil disimpan!");
  };

  return (
    <DashboardLayout>
      <div className="settings-page">
        <h1 className="settings-title">Settings</h1>
        <div className="settings-grid">
          <NotificationCard notifications={notifications} setNotifications={setNotifications} />
          <LanguageCard 
            systemLanguage={systemLanguage} setSystemLanguage={setSystemLanguage}
            generationLanguage={generationLanguage} setGenerationLanguage={setGenerationLanguage} 
          />
          <ToneCard 
            tone={tone} setTone={setTone}
            formalityLevel={formalityLevel} setFormalityLevel={setFormalityLevel} 
          />
        </div>
        <div className="settings-actions">
          {/* Tambahkan onClick ke tombol */}
          <Button className="profile-update-btn" onClick={handleSave}>
            Update →
          </Button>
        </div>
      </div>
    </DashboardLayout>
  );
}

export default Settings;
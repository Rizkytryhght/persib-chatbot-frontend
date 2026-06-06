import { useState } from "react";

import DashboardLayout from "../components/layout/DashboardLayout";

import NotificationCard from "../components/settings/NotificationCard";
import LanguageCard from "../components/settings/LanguageCard";
import ToneCard from "../components/settings/ToneCard";

import Button from "../components/common/Button";

import "../styles/settings.css";

function Settings() {

  const [notifications, setNotifications] =
    useState(true);

  const [systemLanguage, setSystemLanguage] =
    useState("English");

  const [
    generationLanguage,
    setGenerationLanguage,
  ] = useState("English");

  const [tone, setTone] =
    useState("Formal");

  const [
    formalityLevel,
    setFormalityLevel,
  ] = useState("Casual");

  return (
    <DashboardLayout>

      <div className="settings-page">

        <h1 className="settings-title">
          Settings
        </h1>

        <div className="settings-grid">

          <NotificationCard
            notifications={notifications}
            setNotifications={setNotifications}
          />

          <LanguageCard
            systemLanguage={systemLanguage}
            setSystemLanguage={setSystemLanguage}
            generationLanguage={generationLanguage}
            setGenerationLanguage={
              setGenerationLanguage
            }
          />

          <ToneCard
            tone={tone}
            setTone={setTone}
            formalityLevel={formalityLevel}
            setFormalityLevel={
              setFormalityLevel
            }
          />

        </div>

        <div className="settings-actions">

        <Button className="profile-update-btn">
          Update →
        </Button>

        </div>

      </div>

    </DashboardLayout>
  );
}

export default Settings;
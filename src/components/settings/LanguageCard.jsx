import CustomSelect from "../common/CustomSelect";

function LanguageCard({
  systemLanguage,
  setSystemLanguage,

  generationLanguage,
  setGenerationLanguage,
}) {
  const languages = [
    "English",
    "Indonesia",
  ];

  return (
    <div className="settings-card">

      <h2>Language</h2>

      <div className="settings-row">

        <span>
          System Language
        </span>

        <CustomSelect
          value={systemLanguage}
          options={languages}
          onChange={(e) =>
            setSystemLanguage(e.target.value)
          }
        />

      </div>

      <div className="settings-row">

        <span>
          Generation Language
        </span>

        <CustomSelect
          value={generationLanguage}
          options={languages}
          onChange={(e) =>
            setGenerationLanguage(e.target.value)
          }
        />

      </div>

    </div>
  );
}

export default LanguageCard;
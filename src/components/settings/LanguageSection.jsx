import CustomSelect from "../common/CustomSelect";

const LANGUAGES = ["English", "Indonesia"];

function LanguageSection({
  systemLanguage,
  setSystemLanguage,
  generationLanguage,
  setGenerationLanguage,
}) {
  return (
    <div className="language-section">
      <CustomSelect
        label="System Language"
        value={systemLanguage}
        options={LANGUAGES}
        onChange={(e) => setSystemLanguage(e.target.value)}
      />

      <CustomSelect
        label="Generation Language"
        value={generationLanguage}
        options={LANGUAGES}
        onChange={(e) => setGenerationLanguage(e.target.value)}
      />
    </div>
  );
}

export default LanguageSection;
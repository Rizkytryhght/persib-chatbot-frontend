import CustomSelect from "../common/CustomSelect";

function LanguageSection({
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
    <>
      <CustomSelect
        label="System Language"
        value={systemLanguage}
        options={languages}
        onChange={(e) =>
          setSystemLanguage(e.target.value)
        }
      />

      <br />

      <CustomSelect
        label="Generation Language"
        value={generationLanguage}
        options={languages}
        onChange={(e) =>
          setGenerationLanguage(e.target.value)
        }
      />
    </>
  );
}

export default LanguageSection;
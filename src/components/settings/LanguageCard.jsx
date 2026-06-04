import Card from "../common/Card";
import CustomSelect from "../common/CustomSelect";

function LanguageCard({
  systemLanguage,
  setSystemLanguage,

  generationLanguage,
  setGenerationLanguage,
}) {
  return (
    <Card title="Language">

      <div className="settings-row">

        <span>
          System Language
        </span>

        <CustomSelect
          value={systemLanguage}
          options={[
            "English",
            "Indonesia",
          ]}
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
          options={[
            "English",
            "Indonesia",
          ]}
          onChange={(e) =>
            setGenerationLanguage(
              e.target.value
            )
          }
        />

      </div>

    </Card>
  );
}

export default LanguageCard;
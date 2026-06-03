import CustomSelect from "../common/CustomSelect";

function ToneCard({
  tone,
  setTone,

  formalityLevel,
  setFormalityLevel,
}) {
  return (
    <div className="settings-card">

      <h2>Tone</h2>

      <div className="settings-row">

        <span>
          Tone Style
        </span>

        <CustomSelect
          value={tone}
          options={[
            "Formal",
            "Casual",
          ]}
          onChange={(e) =>
            setTone(e.target.value)
          }
        />

      </div>

      <div className="settings-row">

        <span>
          Formality Level
        </span>

        <CustomSelect
          value={formalityLevel}
          options={[
            "Formal",
            "Casual",
          ]}
          onChange={(e) =>
            setFormalityLevel(e.target.value)
          }
        />

      </div>

    </div>
  );
}

export default ToneCard;
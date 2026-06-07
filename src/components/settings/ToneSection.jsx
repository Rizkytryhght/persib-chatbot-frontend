import CustomSelect from "../common/CustomSelect";

const TONE_OPTIONS = ["Formal", "Casual"];

function ToneSection({ tone, setTone, formalityLevel, setFormalityLevel }) {
  return (
    <div className="tone-section">
      <CustomSelect
        label="Tone"
        value={tone}
        options={TONE_OPTIONS}
        onChange={(e) => setTone(e.target.value)}
      />

      <CustomSelect
        label="Formality Level"
        value={formalityLevel}
        options={TONE_OPTIONS}
        onChange={(e) => setFormalityLevel(e.target.value)}
      />
    </div>
  );
}

export default ToneSection;
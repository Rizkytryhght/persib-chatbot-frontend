import CustomSelect from "../common/CustomSelect";

function ToneSection({
  tone,
  setTone,

  formalityLevel,
  setFormalityLevel,
}) {
  return (
    <>
      <CustomSelect
        label="Tone"
        value={tone}
        options={[
          "Formal",
          "Casual",
        ]}
        onChange={(e) =>
          setTone(e.target.value)
        }
      />

      <br />

      <CustomSelect
        label="Formality Level"
        value={formalityLevel}
        options={[
          "Formal",
          "Casual",
        ]}
        onChange={(e) =>
          setFormalityLevel(e.target.value)
        }
      />
    </>
  );
}

export default ToneSection;
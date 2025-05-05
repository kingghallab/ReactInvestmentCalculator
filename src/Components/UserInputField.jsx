export default function UserInput({ InputLabel, handleChange }) {
  return (
    <p>
      <label>{InputLabel}</label>
      <input
        type="number"
        required
        onChange={(event) => handleChange(event, InputLabel)}
      />
    </p>
  );
}

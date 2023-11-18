function InputField({ name }) {
  return (
  <div className="flex flex-row gap-4">
    <label>{name}</label>
    <input type="text" />
  </div>
  );
}

export default InputField
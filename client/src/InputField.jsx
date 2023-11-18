function InputField({ name, type, value, onChange }) {
  return (
    <div className="flex flex-row items-center gap-4 p-4 ">
      <label htmlFor={name} className="w-52 text-white text-2xl">
        {name}
      </label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="rounded-md p-2 bg-gray-200"
      />
    </div>
  );
}

export default InputField;

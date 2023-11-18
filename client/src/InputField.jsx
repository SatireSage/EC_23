function InputField({ name, type }) {
  return (
    <div className="flex flex-row items-center gap-4 p-4 ">
      <label htmlFor={name} className="w-40 text-black">
        {name}
      </label>
      <input
        type={type}
        name={name}
        className="rounded-md shadow-inner shadow-black p-2 bg-gray-200"
      />
    </div>
  );
}

export default InputField;

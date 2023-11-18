import InputField from "./InputField";

function Form() {
  return (
    <form className="flex w-fit flex-col justify-center items-center gap-4 bg-white shadow-md shadow-gray-800 rounded-md pb-4">
      <h2 className="w-full font-bold text-white text-center text-2xl rounded-t-md p-4 bg-blue-400">
        Sign-Up
      </h2>
      <InputField name="First Name" type="text" />
      <InputField name="Last Name" type="text" />
      <InputField name="Phone Number" type="tel" />
    </form>
  );
}

export default Form;

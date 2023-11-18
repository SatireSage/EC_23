import InputField from "./InputField";

function App() {
  return (
    <div>
      <form className="w-full h-full flex justify-center items-center bg-white">
        <InputField name="First Name" />
        <InputField name="Last Name" />
        <InputField name="Phone Number" />
      </form>
    </div>
  );
}

export default App;

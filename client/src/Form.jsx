import { useState } from "react";
import InputField from "./InputField";

function Form() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    fetch("https://cors-anywhere.herokuapp.com/http://localhost:5000/process_phone_number", {
      method: "POST",
      body: JSON.stringify({
        phoneNumber: phoneNumber,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="z-20 p-2 flex w-fit flex-col justify-center items-center gap-4 shadow-md shadow-gray-800 rounded-md pb-4 bg-[#8ecae6]"
    >
      <h2 className="w-full font-bold text-white text-center text-2xl rounded-md p-4 bg-blue-400">
        Sign-Up
      </h2>
      <InputField
        name="First Name"
        type="text"
        value={firstName}
        onChange={setFirstName}
      />
      <InputField
        name="Last Name"
        type="text"
        value={lastName}
        onChange={setLastName}
      />
      <InputField
        name="Phone Number"
        type="tel"
        value={phoneNumber}
        onChange={setPhoneNumber}
      />
      <button className="w-1/2 rounded-md p-2 text-white text-2xl bg-blue-400">
        Submit
      </button>
    </form>
  );
}

export default Form;

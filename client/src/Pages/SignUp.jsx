import Banner from "../Banner";
import Form from "../Form";

function SignUp() {
  return (
    <div className="w-full h-full flex flex-col justify-start items-center gap-4">
      <Banner />
      <Form />
    </div>
  );
}

export default SignUp;

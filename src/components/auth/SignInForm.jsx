import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import baseUrl from "../../api";

const SignInForm = () => {
  const [inputs, setInputs] = useState({});
  const [errorMessage, setErrorMessage] = useState('');

  const navigate = useNavigate();

  const handleChange = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const model = {
      email: inputs.email,
      password: inputs.password,
    };

    try {
      const { data } = await baseUrl.post("/login", model);
      navigate("/");
      localStorage.setItem("token", data.access_token);
      localStorage.setItem("user", JSON.stringify(data.user));
    } catch (error) {
      console.log(error);
      setErrorMessage('Invalid email or password')
    }
  };

  return (
    <div className="flex flex-col gap-6 justify-center items-start w-full px-14">
      <div className="flex items-center gap-4">
        <h1 className="text-3xl font-semibold">Sign In</h1>
        <span className="text-white text-xl">or</span>
        <h1 className="text-white text-3xl font-semibold">Sign Up</h1>
      </div>

      <form className="flex flex-col gap-2 w-96" onSubmit={handleSubmit}>
        <fieldset className="flex flex-col gap-1">
          <label htmlFor="email" className="text-white mx-3">
            E-mail
          </label>
          <input
            id="email"
            type="text"
            placeholder="Enter your email address"
            className="py-2 px-4 rounded-full w-full"
            required
            name="email"
            onChange={handleChange}
          />
        </fieldset>
        <fieldset className="flex flex-col gap-1">
          <label htmlFor="password" className="text-white mx-3">
            Password
          </label>
          <input
            id="password"
            type="password"
            placeholder="Enter your password"
            className="py-2 px-4 rounded-full w-full"
            required
            name="password"
            onChange={handleChange}
          />
        </fieldset>
      <span className="text-red">
        {errorMessage}
      </span>
        <div className="flex flex-col items-center gap-4 mt-6">
          <button
            type="submit"
            className="py-2 px-14 rounded-full bg-[#1D7A85] text-white font-semibold"
          >
            Sign In
          </button>
          <Link to="/auth/sign-up" className="text-[#1D7A85] underline">
            Forget your Password ?
          </Link>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;

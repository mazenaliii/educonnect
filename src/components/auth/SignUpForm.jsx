import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import baseUrl from "../../api";

const SignUpForm = () => {
  const [inputs, setInputs] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const model = {
      name: `${inputs.first_name} ${inputs.last_name}`,
      email: inputs.email,
      password: inputs.password,
      re_password: inputs.re_password,
    };

    try {
      await baseUrl.post("/register", model);
      navigate("/auth/sign-in");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex flex-col gap-6 justify-center items-start w-full px-14">
      <div className="flex items-center gap-4">
        <h1 className="text-white text-3xl font-semibold">Sign In</h1>
        <span className="text-white text-xl">or</span>
        <h1 className="text-3xl font-semibold">Sign Up</h1>
      </div>

      <form className="flex flex-col gap-2 w-96" onSubmit={handleSubmit}>
        <fieldset className="flex flex-col gap-1">
          <label htmlFor="first_name" className="text-white mx-3">
            First Name
          </label>
          <input
            id="first_name"
            type="text"
            placeholder="Enter your first name"
            className="py-2 px-4 rounded-full w-full"
            required
            name="first_name"
            onChange={handleChange}
          />
        </fieldset>
        <fieldset className="flex flex-col gap-1">
          <label htmlFor="last_name" className="text-white mx-3">
            Last Name
          </label>
          <input
            id="last_name"
            type="text"
            placeholder="Enter your last name"
            className="py-2 px-4 rounded-full w-full"
            required
            name="last_name"
            onChange={handleChange}
          />
        </fieldset>
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
        <fieldset className="flex flex-col gap-1">
          <label htmlFor="re_password" className="text-white mx-3">
            Re-Password
          </label>
          <input
            id="re_password"
            type="password"
            placeholder="Enter your re-password"
            className="py-2 px-4 rounded-full w-full"
            required
            name="re_password"
            onChange={handleChange}
          />
        </fieldset>

        <div className="flex items-center gap-4 mt-6">
          <button
            type="submit"
            className="py-2 px-8 rounded-full bg-[#1D7A85] text-white font-semibold"
          >
            Sign Up
          </button>
          <Link to="/auth/sign-in" className="text-[#1D7A85] underline">
            I’m already have an account
          </Link>
        </div>
      </form>
    </div>
  );
};

export default SignUpForm;

import React from 'react';
import { Button } from 'react-bootstrap';
import 'tailwindcss/tailwind.css';

const Profile = ({ name, email, logout }) => {
  return (
    <div className="wrapper flex flex-col justify-center items-center w-full my-5">
      <h4 className="title text-gray-800 font-bold mb-5 text-2xl">Your Profile</h4>
      <div className="info flex flex-row justify-around w-full max-w-4xl bg-white p-6 rounded-lg shadow-md">
        <div className="labels flex flex-col">
          <span className="my-4 mx-5 text-gray-700 font-bold">Name:</span>
          <span className="my-4 mx-5 text-gray-700 font-bold">Email:</span>
        </div>
        <div className="inputs flex flex-col">
          <input
            type="text"
            value={name}
            disabled
            readOnly
            className="my-3 p-2 border rounded bg-gray-100 text-gray-700"
          />
          <input
            type="email"
            value={email}
            disabled
            readOnly
            className="my-3 p-2 border rounded bg-gray-100 text-gray-700"
          />
        </div>
      </div>
        <button className="borded border-red-500 border-[3px] px-6 py-4 rounded-xl my-5 text-red-500" onClick={logout}>
          Log out
        </button>
    </div>
  );
};

export default Profile;

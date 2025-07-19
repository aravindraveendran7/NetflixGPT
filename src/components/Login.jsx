import React, { useRef, useState } from "react";
import Home from "./Home";
import { checkValidData } from "../utils/checkValidData";

const Login = () => {
  const email = useRef("");
  const password = useRef("");

  const HandleSubmit = (e) => {
    const message = checkValidData(email.current.value, password.current.value);
    console.log(message);
  };

  return (
    <>
      <Home onlyHeader={true} />
      <form
        onSubmit={(e) => e.preventDefault()}
        className="flex flex-col items-start justify-center bg-black opacity-70 w-1/4  my-60 mx-auto p-3 rounded-lg"
      >
        <h1 className="text-3xl font-extrabold mb-4 text-white py-6 ml-14  ">
          Sign In
        </h1>
        <input
          ref={email}
          type="email"
          placeholder="Email"
          className="p-2 border border-gray-400 mb-3  text-gray-200 ml-14 w-3/4"
        />
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-2 border border-gray-400 mb-3  text-gray-200 ml-14 w-3/4"
        />

        <button
          type="submit"
          className="bg-red-700 p-1 text-white mb-8 ml-14 w-3/4 cursor-pointer rounded-sm hover:bg-red-800 transition duration-300"
          onClick={HandleSubmit}
        >
          Sign In
        </button>
      </form>
    </>
  );
};

export default Login;

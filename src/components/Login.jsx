import React from "react";
import Home from "./Home";

const Login = () => {
  return (
    <>
      <Home onlyHeader={true} />
      <form className="flex flex-col items-start justify-center bg-black opacity-70 w-1/4  my-60 mx-auto p-3 rounded-lg">
        <h1 className="text-3xl font-extrabold mb-4 text-white py-6 ml-14  ">
          Sign In
        </h1>
        <input
          type="email"
          placeholder="Email"
          className="p-2 border border-gray-400 mb-3  text-gray-200 ml-14 w-3/4"
        />
        <input
          type="password"
          placeholder="Password"
          className="p-2 border border-gray-400 mb-3  text-gray-200 ml-14 w-3/4"
        />

        <button
          type="submit"
          className="bg-red-700 p-1 text-white mb-8 ml-14 w-3/4 cursor-pointer rounded-sm hover:bg-red-800 transition duration-300"
        >
          Sign In
        </button>
      </form>
    </>
  );
};

export default Login;

import React from "react";
import { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    console.log("Email is",email);
    console.log("Password is",password);

    setEmail("")
    setPassword("")
  };

  return (
    <div className="h-screen w-screen flex items-center justify-center">
      <div className="border-2 border-emerald-600 p-20 rounded-xl">
        <form
          onSubmit={(e) => {
            submitHandler(e);
          }}
          className="flex flex-col items-center justify-center"
        >
          <input
            value={email}
            onChange={(e)=>{
                setEmail(e.target.value)
            }}
            required
            className="border-2 border-emerald-600 rounded-full py-3 px-5 text-xl text-black outline-none bg-transparent placeholder:text-gray-400"
            type="email"
            placeholder="Email"
          />
          <input
            value={password}
            onChange={(e)=>{
                setPassword(e.target.value)
            }}
            required
            className="border-2 border-emerald-600 rounded-full py-3 px-5 text-xl outline-none bg-transparent placeholder:text-gray-400 mt-3"
            type="password"
            placeholder="Password"
          />
          <button className="border-2 border-none bg-emerald-600 rounded-full py-3 px-5 text-xl text-white outline-none placeholder:text-white mt-5 w-full">
            Log in
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;

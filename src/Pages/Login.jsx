import React, { useState } from "react";
import show from "../assets/show.svg"; // 👁️ your custom icon
import hide from "../assets/hide.svg"; // 👈 optional if you have a "hide" icon

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false); // 👁️ toggle state

  const handleSubmit = (e) => {
    e.preventDefault();
    const validUsername = "manish";
    const validPassword = "143";

    if (username === validUsername && password === validPassword) {
      onLogin();
    } else {
      alert("Invalid username or password!");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-pink-600 to-purple-500">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-2xl shadow-md w-80"
      >
        <h2 className="text-2xl mb-4 font-semibold text-center">Login</h2>

        {/* Username */}
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="border rounded-md w-full p-2 mb-3"
        />

        {/* Password with toggle */}
        <div className="relative mb-4">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border rounded-md w-full p-2 pr-10"
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-2 top-2 cursor-pointer"
          >
            <img
              src={showPassword ? hide : show}
              alt="toggle visibility"
              className="w-6 h-6 hover:scale-110 transition-transform duration-200"
            />
          </button>
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="bg-blue-500 text-white w-full py-2 rounded-md hover:bg-blue-600"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;

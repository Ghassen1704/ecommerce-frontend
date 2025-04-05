import React, { useState } from "react";
import axios from "axios";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/login/",
        { username, password }, // Send username and password as plain fields
        { headers: { "Content-Type": "application/json" } }
      );
      const token = response.data.token;  // Adjust this based on your backend response
      localStorage.setItem('token', token);

      alert("Login successful!");
      // You can now store the token for authenticated API requests
    } catch (error) {
      alert("Login Failed: " + (error.response?.data?.detail || "Something went wrong"));
    }
  };
  
  return (
    <div className="p-10">
      <h1 className="text-2xl">Login</h1>
      <input
        type="text"
        className="border p-2 mt-2"
        placeholder="Username"
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        className="border p-2 mt-2"
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <button
        onClick={handleLogin}
        className="bg-blue-600 text-white px-4 py-2 mt-4"
      >
        Login
      </button>
    </div>
  );
};

export default Login;

import React, { useState } from "react";
import axios from "axios";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async () => {
    try {
      // Send plain password, the backend will hash it
      const response = await axios.post(
        "http://127.0.0.1:8000/register/",
        { email, username: email, password }, // Send plain password, not hashed_password
        { headers: { "Content-Type": "application/json" } }
      );
      alert("Registered successfully!");
    } catch (error) {
      alert("Registration Failed: " + (error.response?.data?.detail || "Something went wrong"));
    }
  };

  return (
    <div className="p-10">
      <h1 className="text-2xl">Register</h1>
      <input
        type="email"
        className="border p-2 mt-2"
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        className="border p-2 mt-2"
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <button
        onClick={handleRegister}
        className="bg-green-600 text-white px-4 py-2 mt-4"
      >
        Register
      </button>
    </div>
  );
};

export default Register;

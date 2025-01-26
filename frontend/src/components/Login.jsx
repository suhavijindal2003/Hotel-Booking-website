import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Image1 from "../assets/Log.jpg";
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate(); // useNavigate hook for navigation

  const sendSigninData = () => {
    const userData = { email, password };
    setLoading(true);

    axios
      .post("http://localhost:5000/api/users/login", userData)
      .then((response) => {
        localStorage.setItem("token", response.data.token);
        console.log("login successfully ");
        navigate("/"); // Navigate to the home page after successful login
      })
      .catch((error) => setMsg(error.response?.data?.message || error.message))
      .finally(() => setLoading(false));
  };

  return (
    <div id="Login" className="flex bg-gray-100 h-screen">
      {/* Left Section with Image */}
      <div className="w-1/2 relative">
        <img
          src={Image1}
          alt="Scenic Tour"
          className="w-full h-full object-cover absolute inset-0 z-0"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 z-10 flex items-center justify-center">
          <div className="text-center text-white px-8">
            <h1 className="text-4xl font-bold leading-tight">
              Experience the Freedom
            </h1>
            <p className="mt-4 text-lg">
              Travel is the only purchase that enriches you in ways beyond material wealth.
            </p>
          </div>
        </div>
      </div>

      {/* Right Section with Login Form */}
      <div className="w-1/2 flex items-center justify-center bg-white relative p-8">
        <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-3xl font-bold text-blue-600 mb-6 text-center">
            Welcome Back
          </h2>
          <form>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700" htmlFor="email">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                placeholder="yourname@mail.com"
                className="w-full mt-2 p-3 border rounded-lg shadow-sm focus:ring focus:ring-blue-300 focus:outline-none"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700" htmlFor="password">
                Password
              </label>
              <input
                type="password"
                id="password"
                placeholder="********"
                className="w-full mt-2 p-3 border rounded-lg shadow-sm focus:ring focus:ring-blue-300 focus:outline-none"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="mt-6">
              <button
                type="button"
                onClick={sendSigninData}
                className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-lg font-medium transition"
              >
                {loading ? "Logging In..." : "Login"}
              </button>
            </div>
          </form>
          <h2 className="mt-6 text-center text-sm text-gray-600">{msg}</h2>

          <div className="mt-6 text-center">
            <p className="text-sm text-gray-600">
              Don’t have an account?{" "}
              <Link to="/signup" className="text-blue-500 hover:underline font-medium">
                Sign up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

import { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import axios from "axios";
import useAppContext from "../../../context/useAppContext.jsx";
import { setAuthenticated } from "../../../../../utils/auth.js";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import "./login.css";

const Login = () => {
  const {
    loggedIn,
    setLoggedIn,
    error,
    setError,
    email,
    setEmail,
    password,
    setPassword,
    togglePasswordVisibility,
  } = useAppContext();
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Send a GET request to the server to authenticate the user
      const response = await axios.get(
        `http://localhost:3000/users/email/${email}`
      );

      // If user not found or password doesn't match, set error message
      if (!response.data || response.data.password !== password) {
        setError("Invalid email or password");
        return;
      }

      // If authentication is successful, set loggedIn state to true
      setLoggedIn(true);
      // Set authentication status in localStorage
      setAuthenticated();
      console.log("User logged in:", response.data);
    } catch (error) {
      // Handle server errors
      console.error("Error logging in:", error);
      setError("Internal server error");
    }
  };

  const handleTogglePasswordVisibility = () => {
    togglePasswordVisibility();
    setShowPassword(!showPassword);
  };

  if (loggedIn) {
    return <Navigate to="/products" />;
  }

  return (
    <form name="login" onSubmit={handleSubmit} className="login-form">
      <h2 className="log-greeting">
        Returning customer? Welcome back!
        <br />
        Please log-in to view your cart or make additional orders.
      </h2>
      {error && <div className="error">{error}</div>}
      <label>
        Email:{" "}
        <input
          type="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>
      <label>
        Password:{" "}
        <input
          type={showPassword ? "text" : "password"}
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <span
          className="toggle-password"
          onClick={handleTogglePasswordVisibility}
        >
          {showPassword ? <FaEyeSlash /> : <FaEye />}
        </span>
      </label>
      <button className="submit" type="submit">
        Submit
      </button>
      <div className="signup-container">
        <h3 className="signup-greeting">New around here?</h3>
        <Link className="signup-link" to="/signup">
          Sign-Up!
        </Link>
      </div>
    </form>
  );
};

export default Login;

import { useState, useEffect } from "react";
import { Link, Navigate } from "react-router-dom"; // Import Redirect
import axios from "axios";
import useAppContext from "../../../context/useAppContext.jsx";
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

  useEffect(() => {
    console.log(loggedIn);
  }, [loggedIn]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get("http://localhost:3000/users", {
        email,
        password,
      });
      console.log("User logged in:", response.data);
      setLoggedIn(true);
    } catch (error) {
      console.error(
        "Error logging in. Please double-check that user and password are correct.",
        error.response.data.error
      );
      setError(error.response.data.error);
    }
  };

  const handleTogglePasswordVisibility = () => {
    togglePasswordVisibility();
    setShowPassword(!showPassword);
  };

  // Redirect to products page if logged in
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

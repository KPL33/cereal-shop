import { Link, Navigate } from "react-router-dom";
import axios from "axios";
import useAppContext from "../../../context/useAppContext.jsx";
import { setAuthenticated } from "../../../../../utils/auth.js";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import "./login-signup.css";

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
    showPassword,
    setShowPassword,
  } = useAppContext();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`http://localhost:3000/users/login`, {
        email: email,
        password: password,
      });

      if (response.status === 200) {
        setLoggedIn(true);
        setAuthenticated();
        console.log("User logged in:", response.data);
      } else {
        console.log("Login failed:", response.statusText);
        setError("Invalid email or password");
      }
    } catch (error) {
      // Handle server errors
      console.error("Error logging in:", error);
      setError("Internal server error");
    }
  };

  if (loggedIn) {
    return <Navigate to="/products" />;
  }

  return (
    <form name="login" onSubmit={handleSubmit} className="login-signup-form">
      <h2 className="log-greeting">
        Returning customer? Welcome back!
        <br />
        Please log-in to view your cart or make additional orders.
      </h2>
      {error && <div className="error">{error}</div>}
      <label className="field-title">
        Email:{" "}
        <input
          type="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>
      <label className="field-title">
        Password:{" "}
        <input
          type={showPassword ? "text" : "password"}
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <span
          className="toggle-password"
          onClick={() => setShowPassword(!showPassword)}
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

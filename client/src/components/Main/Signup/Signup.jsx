import { Navigate } from "react-router-dom";
import { setAuthenticated } from "../../../../../utils/auth.js";
import axios from "axios";
import useAppContext from "../../../context/useAppContext.jsx";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import "../Login/login-signup.css";

const SignUp = () => {
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
      // Send POST request to backend endpoint
      const response = await axios.post("http://localhost:3000/users/", {
        email,
        password,
      });
      console.log("User signed up:", response.data);
      setLoggedIn(true);
      setAuthenticated();
    } catch (error) {
      console.error("Error signing up:", error.response.data.error);
      // Handle signup error (e.g., display error message)
      setError(error.response.data.error);
    }
  };

  if (loggedIn) {
    return <Navigate to="/products" />;
  }

  return (
    <form name="signup" onSubmit={handleSubmit} className="login-signup-form">
      <h2 className="log-greeting">
        Welcome to Against the Grains! Please register to start eating healthier
        today!
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
    </form>
  );
};

export default SignUp;

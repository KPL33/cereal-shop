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
        const { userId } = response.data; // Extract userId from response
        setLoggedIn(true);
        setAuthenticated();

        // Store userId in localStorage
        localStorage.setItem("userId", userId);

        // Fetch currentCartId after storing userId
        fetchCurrentCartId(userId);

      } else {
        setError("Invalid email or password");
      }
    } catch (error) {
      console.error("Error logging in:", error);
      setError("Invalid email or password.");
    }
  };

  const fetchCurrentCartId = async (userId) => {
    try {
      const response = await axios.get(`http://localhost:3000/users/${userId}`);
      console.log("Fetch currentCartId response:", response.data);
      const { currentCartId } = response.data;

      // Store currentCartId in localStorage
      localStorage.setItem("currentCartId", currentCartId);
    } catch (error) {
      console.error("Error fetching currentCartId:", error);
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

      <div className="email-row">
        <label htmlFor="email-input" className="field-title">
          Email:{" "}
          <input
            id="email-input"
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>

        <div className="spacer"></div>
      </div>

      <div className="password-row">
        <label htmlFor="password-input" className="field-title">
          Password:{" "}
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>

        <span
          className="toggle-password"
          onClick={() => setShowPassword(!showPassword)}
        >
          {showPassword ? <FaEyeSlash /> : <FaEye />}
        </span>
      </div>
      
      <div className="error-container">
        {error && <div className="error">{error}</div>}
      </div>

      <button className="submit" type="submit">
        Submit
      </button>

      <h4 className="signup-greeting">New around here?</h4>

      <Link className="signup-link" to="/signup">
        <h4>Sign-Up!</h4>
      </Link>
    </form>
  );
};

export default Login;

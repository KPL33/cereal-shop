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
      const response = await axios.post("http://localhost:3000/users/", {
        email,
        password,
      });

      if (response.status === 201) {
        const { id: userId } = response.data;

        setAuthenticated(userId);

        console.log("Retrieved userId:", userId);

        // Store userId in localStorage
        localStorage.setItem("userId", userId);

        // Fetch currentCartId after storing userId
        fetchCurrentCartId(userId);

        setLoggedIn(true);

        // Reset form fields upon successful signup
        setEmail("");
        setPassword("");
        setShowPassword(false);

        console.log("User signed up:", response.data);
      } else {
        console.log("Signup failed:", response.statusText);
        setError("Error signing up. Please try again.");
      }
    } catch (error) {
      console.error("Error signing up:", error);
      // Handle signup error (e.g., display error message)
      setError(
        error.response.data.error || "Error signing up. Please try again."
      );
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
    <form
      name="signup"
      onSubmit={handleSubmit}
      className="login-signup-form"
      id="signup-form"
    >
      <h2 className="log-greeting">
        Welcome to Against the Grains! Please register to start eating healthier
        today!
      </h2>

      <div className="fields-container">
        <div className="form-fields">
          <label htmlFor="email-input" className="field-title">
            Email:
            <input
              id="email-input"
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </label>

          <label htmlFor="password-input" className="field-title">
            Password:
            <input
              id="password-input"
              type={showPassword ? "text" : "password"}
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </label>
        </div>

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
    </form>
  );
};

export default SignUp;

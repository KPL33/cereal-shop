import { useEffect } from "react";
import axios from "axios";
import useAppContext from "../../../context/useAppContext.jsx";
import "./signup.css";

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
  } = useAppContext();

  useEffect(() => {
    console.log(loggedIn);
  }, [loggedIn]);

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
    } catch (error) {
      console.error("Error signing up:", error.response.data.error);
      // Handle signup error (e.g., display error message)
      setError(error.response.data.error);
    }
  };

  return (
    <form name="signup" onSubmit={handleSubmit} className="signup-form">
      <h2 className="signup-greeting">
        Welcome to Cereal! Please register to start.
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
          type="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </label>
      <button className="submit" type="submit">
        Submit
      </button>
    </form>
  );
};

export default SignUp;

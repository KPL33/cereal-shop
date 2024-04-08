// root/client/src/components/Main/Signup/Signup.jsx

import React, { useState } from "react";
import "./signup.css";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
        const response = await fetch("http://localhost:3000/api/users", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, password }),
        });


      if (!response.ok) {
        throw new Error("Failed to create user");
      }

      // User created successfully, handle response here if needed
      console.log("User created successfully");
    } catch (error) {
      console.error("Error creating user:", error);
    }
  };

  return (
    <form name="signup" onSubmit={handleSubmit} className="signup-form">
      <h2 className="signup-greeting">
        Welcome to Cereal! Please register to start.
      </h2>

      <label>
        Email:
        <input
          type="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </label>

      <label>
        Password:
        <input
          type="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </label>

      <button className="submit" type="submit">
        Submit
      </button>
    </form>
  );
};

export default SignUp;

import User from "../../models/User.js";
import { passwordRegex } from "../../../utils/validation.js"; // Import the password regex

// Function to create a new user
const createUser = async (userData) => {
  try {
    // Validate the password format using regex
    if (!passwordRegex.test(userData.password)) {
      throw new Error("Password does not meet complexity requirements");
    }

    // Create a new user based on the provided data
    const newUser = await User.create(userData);
    return newUser;
  } catch (error) {
    // If an error occurs, throw it to be handled by the route
    throw error;
  }
};

export default createUser;

import User from "../../models/User.js";

// Function to retrieve all users
export const getAllUsers = async () => {
  try {
    const users = await User.findAll(); // Retrieve all users from the database
    return users; // Return the retrieved users
  } catch (error) {
    throw error; // Throw any errors encountered during retrieval
  }
};

// Function to retrieve a user by ID
export const getUserById = async (id) => {
  try {
    const user = await User.findByPk(id); // Find the user by ID in the database
    return user; // Return the retrieved user
  } catch (error) {
    throw error; // Throw any errors encountered during retrieval
  }
};

// Function to retrieve a user by email
export const getUserByEmail = async (email) => {
  try {
    const user = await User.findOne({ where: { email } }); // Find the user by email in the database
    return user; // Return the retrieved user
  } catch (error) {
    throw error; // Throw any errors encountered during retrieval
  }
};

// Export an object containing all functions
export default {
  getAllUsers,
  getUserById,
  getUserByEmail,
};

import UserModel from "../../models/User.js";

const { User } = UserModel;

// Function to delete a user by ID
export const deleteUserById = async (userId) => {
  try {
    // Find the user by ID and delete it
    const deletedUser = await User.destroy({
      where: {
        id: userId,
      },
    });

    // Check if any user was deleted
    if (deletedUser === 0) {
      // No user found with the given ID
      return { success: false, message: "User not found" };
    }

    // User successfully deleted
    return { success: true, message: "User deleted successfully" };
  } catch (error) {
    // Error handling
    console.error("Error deleting user:", error);
    throw new Error("Internal server error");
  }
};

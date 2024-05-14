// Function to set authentication status in localStorage
// Modify setAuthenticated function to store userId and cartId in localStorage
export const setAuthenticated = (userId, cartId) => {
  localStorage.setItem("authenticated", "true");
  localStorage.setItem("userId", userId);
  localStorage.setItem("cartId", cartId);

  // Log the values that are being stored in localStorage
  console.log("Authenticated set to true");
  console.log("Stored userId:", userId);
  console.log("Stored cartId:", cartId);
};

// Function to check if the user is authenticated and retrieve user info
export const isAuthenticated = () => {
  const authenticated = localStorage.getItem("authenticated") === "true";
  const userId = localStorage.getItem("userId");
  const cartId = localStorage.getItem("cartId");

  // Log the retrieved values from localStorage
  console.log("Is authenticated:", authenticated);
  console.log("Retrieved userId:", userId);
  console.log("Retrieved cartId:", cartId);

  return authenticated && userId && cartId;
};

// Function to clear authentication status and user info from localStorage
export const clearAuthenticated = () => {
  localStorage.removeItem("authenticated");
  localStorage.removeItem("userId");
  localStorage.removeItem("cartId");

  // Log that authentication status and user info are cleared
  console.log("Authentication cleared");
  console.log(`user ${userId} and cart ${cartId} cleared`);
  console.log("Authentication cleared");
};

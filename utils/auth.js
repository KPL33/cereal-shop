// Function to set authentication status in localStorage
export const setAuthenticated = () => {
  localStorage.setItem("authenticated", "true");
};

// Function to check if the user is authenticated
export const isAuthenticated = () => {
  return localStorage.getItem("authenticated") === "true";
};

// Function to clear authentication status from localStorage
export const clearAuthenticated = () => {
  localStorage.removeItem("authenticated");
};

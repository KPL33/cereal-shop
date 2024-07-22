import express from "express";

const app = express();

// Define a route for the root path
app.get("/", (req, res) => {
  res.send("Hello, World!");
});

// Handle other routes or API endpoints here

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

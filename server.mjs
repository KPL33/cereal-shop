import express from "express";
import path from "path";

const app = express();

// Serve static files from the dist directory
app.use(express.static(path.resolve("./client/dist")));

// Define a route for the root path
app.get("/", (req, res) => {
  res.sendFile(path.resolve("./client/dist/index.html"));
});
console.log(`Serving static files from ${path.resolve("./client/dist")}`);
console.log(
  `Serving index.html from ${path.resolve("./client/dist/index.html")}`
);

// Handle other routes or API endpoints here

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

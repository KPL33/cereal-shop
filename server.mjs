import express from "express";
import path from "path";

const app = express();

// Calculate paths relative to the module location
const clientDistPath = path.join("client", "dist");
const indexPath = path.join(clientDistPath, "index.html");

// Serve static files from the dist directory
app.use(express.static(clientDistPath));

// Define a route for the root path
app.get("/", (req, res) => {
  res.sendFile(indexPath, { root: "." });
});

console.log(`Serving static files from ${clientDistPath}`);
console.log(`Serving index.html from ${indexPath}`);

// Handle other routes or API endpoints here

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

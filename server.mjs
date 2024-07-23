import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const app = express();

// Get the current directory name
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Serve static files from the dist directory
app.use(express.static(path.join(__dirname, "client/dist")));

// Define a route for the root path
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "client/incorrect", "index.html"));
});
console.log(`Serving static files from ${path.join(__dirname, "client/dist")}`);
console.log(
  `Serving index.html from ${path.join(__dirname, "client/dist", "index.html")}`
);

// Handle other routes or API endpoints here

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

import express from "express";
import path from "path";
import { fileURLToPath } from "url";

// Create an instance of Express
const app = express();

// Convert the current file URL to a path
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Serve static files from the 'client/dist' directory
app.use(express.static(path.join(__dirname, "../client/dist")));

// Handle the index.html file for all requests
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/dist/index.html"));
});

// Define the port and start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

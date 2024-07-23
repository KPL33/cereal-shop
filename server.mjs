import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const app = express();
const port = process.env.PORT || 3000;

// Get the directory name of the current module
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Serve static files from the 'dist' directory
app.use(express.static(path.join(__dirname, "../client/dist")));

// Serve the index.html file for all routes that are not handled by the static middleware
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/dist/index.html"));
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

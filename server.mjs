import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const app = express();

// Get the current module URL and convert it to a path
const currentFilePath = fileURLToPath(import.meta.url);
const currentDirPath = path.dirname(currentFilePath);

// Serve static files from the 'client/dist' directory
app.use(express.static(path.join(currentDirPath, "client", "dist")));

// Serve index.html for all other routes
app.get("*", (req, res) => {
  res.sendFile(path.join(currentDirPath, "client", "dist", "index.html"));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));

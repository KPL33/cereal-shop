import express from "express";
import path from "path";
import routesIndex from "./server/api-routes/routesIndex.js"; // Import routesIndex

const app = express();

// Middleware to parse JSON request bodies
app.use(express.json());

// Serve static files from the dist directory
const clientDistPath = path.join("client", "dist");
const indexPath = path.join(clientDistPath, "index.html");

app.use(express.static(clientDistPath));

// Define a route for the root path
app.get("/", (req, res) => {
  res.sendFile(indexPath, { root: "." });
});

// Use the routes defined in routesIndex.js
app.use("/", routesIndex); // Prefix routes with /api

console.log(`Serving static files from ${clientDistPath}`);
console.log(`Serving index.html from ${indexPath}`);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

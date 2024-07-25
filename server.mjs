import "./utils/config.mjs";
import express from "express";
import session from "express-session";
import path from "path";
import cors from "cors";
import routesIndex from "./server/api-routes/routesIndex.js";

const app = express();

// CORS configuration
const corsOptions = {
  origin: process.env.CORS_ORIGIN || "*", // Adjust this to specify allowed origins
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
  credentials: true, // If your server supports cookies and sessions
};

app.use(cors(corsOptions));

// Middleware to parse JSON request bodies
app.use(express.json());

app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
      secure: process.env.NODE_ENV === "production", // Set secure flag based on environment
      httpOnly: true,
      maxAge: 30 * 24 * 60 * 60 * 1000, // 30 days
      sameSite: "lax", // Adjust as needed
    },
  })
);

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

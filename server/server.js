import express from "express";
import session from "express-session";
import sequelize from "./config/connection.js";
import routes from "./api-routes/routesIndex.js"; // Import the routesIndex.js file

// Create an Express application
const app = express();

// Middleware to parse JSON request bodies
app.use(express.json());

// Middleware for session management
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
  })
);

// Mount the routes defined in routesIndex.js at the root level
app.use("/", routes);

// Start the server
const port = process.env.PORT || 3000;
sequelize.sync().then(() => {
  // Sync the sequelize models with the database before starting the server
  app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
  });
});

// Export the app instance for testing purposes
export default app;

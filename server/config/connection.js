import path from "path";
import { config as dotenvConfig } from "dotenv";
import { Sequelize } from "sequelize";
import { fileURLToPath } from "url";
import { dirname } from "path";

// Get directory name
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Load environment variables from .env file
dotenvConfig({ path: path.resolve(__dirname, "../../.env") });

// Extract environment variables
const {
  DB_NAME,
  DB_USER,
  DB_PASSWORD,
  DB_HOST,
  DB_PORT,
  DB_DIALECT,
  DATABASE_URL,
} = process.env;

// Create Sequelize instance
let sequelize;

if (DATABASE_URL) {
  // Use Heroku's DATABASE_URL
  sequelize = new Sequelize(DATABASE_URL, {
    dialect: "postgres", // Adjust dialect if necessary
    ssl: {
      rejectUnauthorized: false, // Disable SSL certificate validation temporarily
    },
  });
} else {
  // Use local environment variables
  sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASSWORD, {
    host: DB_HOST,
    port: DB_PORT,
    dialect: DB_DIALECT || "mysql", // Default to MySQL if not specified
  });
}

export default sequelize;

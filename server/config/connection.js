import path from "path";
import { config } from "dotenv";
import { Sequelize } from "sequelize";
import { fileURLToPath } from "url";
import { dirname } from "path";

// Get directory name
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Load environment variables from .env file
config({ path: path.resolve(__dirname, "../../.env") });

// Extract environment variables
const {
  DB_NAME,
  DB_USER,
  DB_PASSWORD,
  DB_HOST,
  DB_PORT,
  DB_DIALECT,
  NODE_ENV,
} = process.env;

// Define default configurations
const defaultConfig = {
  development: {
    DB_NAME: DB_NAME || "development_db",
    DB_USER: DB_USER || "root",
    DB_PASSWORD: DB_PASSWORD || "",
    DB_HOST: DB_HOST || "localhost",
    DB_PORT: DB_PORT || 3306,
    DB_DIALECT: DB_DIALECT || "mysql",
  },
  production: {
    DB_NAME: DB_NAME || "production_db",
    DB_USER: DB_USER || "prod_user",
    DB_PASSWORD: DB_PASSWORD || "",
    DB_HOST: DB_HOST || "prod.example.com",
    DB_PORT: DB_PORT || 3306,
    DB_DIALECT: DB_DIALECT || "mysql",
  },
};

// Select configuration based on NODE_ENV or default to development
const configOptions = defaultConfig[NODE_ENV || "development"];

// Create Sequelize instance
const sequelize = new Sequelize(
  configOptions.DB_NAME,
  configOptions.DB_USER,
  configOptions.DB_PASSWORD,
  {
    host: configOptions.DB_HOST,
    port: configOptions.DB_PORT,
    dialect: configOptions.DB_DIALECT,
  }
);

export default sequelize;

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

// Extract environment variables or use defaults
const {
  DATABASE_URL,
  DB_NAME,
  DB_USER,
  DB_PASSWORD,
  DB_HOST,
  DB_PORT,
  DB_DIALECT = "mysql",
} = process.env;

// Create Sequelize instance
const sequelize = DATABASE_URL
  ? new Sequelize(DATABASE_URL, {
      dialect: DB_DIALECT,
      protocol: "mysql",
      dialectOptions: {
        ssl: {
          require: true,
          rejectUnauthorized: false,
        },
      },
    })
  : new Sequelize(DB_NAME, DB_USER, DB_PASSWORD, {
      host: DB_HOST,
      port: DB_PORT,
      dialect: DB_DIALECT || "mysql",
    });

export default sequelize;

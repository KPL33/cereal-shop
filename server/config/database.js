import Sequelize from "sequelize";
import dotenv from "dotenv";
import path from "path";

// Load environment variables from .env file
dotenv.config({ path: path.resolve(process.cwd(), ".env") });

let sequelize;

if (process.env.NODE_ENV === "production") {
  // Use JAWSDB configuration for Heroku
  sequelize = new Sequelize(process.env.JAWSDB_URL, {
    dialect: "mysql",
  });
} else {
  // Use local development configuration
  const { DB_NAME, DB_USER, DB_PASSWORD, DB_HOST, DB_PORT, DB_DIALECT } =
    process.env;

  sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASSWORD, {
    host: DB_HOST,
    port: DB_PORT,
    dialect: DB_DIALECT || "mysql", // Use "mysql" as the default dialect
  });
}

export default sequelize;

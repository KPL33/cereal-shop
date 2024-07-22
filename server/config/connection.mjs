import path from "path";
import { config } from "dotenv";
import { Sequelize } from "sequelize";
import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

config({ path: path.resolve(__dirname, "../../.env") });

const {
  DB_NAME,
  DB_USER,
  DB_PASSWORD,
  DB_HOST,
  DB_PORT,
  DB_DIALECT,
  JAWSDB_URL,
} = process.env;

// const sequelize = JAWSDB_URL
//   ? new Sequelize(JAWSDB_URL, { dialect: "mysql" })
//   : new Sequelize(DB_NAME, DB_USER, DB_PASSWORD, {
//       host: DB_HOST,
//       port: DB_PORT,
//       dialect: DB_DIALECT || "mysql",
//     });

let sequelize;

if (process.env.JAWSDB_URL) {
  sequelize = new Sequelize(process.env.JAWSDB_URL);
} else {
  sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
      host: DB_HOST,
      port: DB_PORT,
      dialect: DB_DIALECT
    }
  );
}
export default sequelize;

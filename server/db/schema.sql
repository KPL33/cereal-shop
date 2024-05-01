DROP DATABASE IF EXISTS cereal_db;
CREATE DATABASE cereal_db;
USE cereal_db;

SOURCE db/tables/create_products_table.sql;
SOURCE db/tables/create_users_table.sql;
SOURCE db/tables/create_carts_table.sql;
SOURCE db/tables/create_purchases_table.sql;
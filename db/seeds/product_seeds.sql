-- Sample product seeds for product_seeds.sql

-- Insert 10 sample products into the products table
INSERT INTO products (name, description, price, amount_in_stock, category, value)
VALUES
  ('Product 1', 'Description for Product 1', 19.99, 50, 'Electronics', 999.50),
  ('Product 2', 'Description for Product 2', 29.99, 30, 'Clothing', 899.70),
  ('Product 3', 'Description for Product 3', 9.99, 100, 'Books', 999.00),
  ('Product 4', 'Description for Product 4', 49.99, 20, 'Home & Garden', 999.80),
  ('Product 5', 'Description for Product 5', 39.99, 40, 'Electronics', 1599.60),
  ('Product 6', 'Description for Product 6', 14.99, 80, 'Toys', 1199.20),
  ('Product 7', 'Description for Product 7', 59.99, 10, 'Appliances', 599.90),
  ('Product 8', 'Description for Product 8', 24.99, 60, 'Health & Beauty', 1499.40),
  ('Product 9', 'Description for Product 9', 34.99, 35, 'Sports', 1224.65),
  ('Product 10', 'Description for Product 10', 79.99, 15, 'Furniture', 1199.85);

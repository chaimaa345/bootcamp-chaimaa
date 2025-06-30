
-- Add sample orders
INSERT INTO product_orders DEFAULT VALUES;
INSERT INTO product_orders DEFAULT VALUES;

-- Add items linked to orders
INSERT INTO items (name, price, quantity, order_id) VALUES
('Book', 10.00, 2, 1),
('Pen', 2.50, 3, 1),
('Notebook', 5.00, 1, 2);






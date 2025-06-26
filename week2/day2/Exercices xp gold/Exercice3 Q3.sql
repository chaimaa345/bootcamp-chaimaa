--Yes, this insert works, but only because the item_id column in the purchases 
--table is not defined as NOT NULL.
--In PostgreSQL, if a column is not explicitly marked as NOT NULL, it accepts NULL values by default — even if it's a foreign key.
INSERT INTO purchases (customer_id, item_id, quantity_purchased)
VALUES (1, NULL, 1);












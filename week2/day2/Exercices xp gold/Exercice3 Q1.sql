CREATE TABLE purchases (
    id SERIAL PRIMARY KEY,
    customer_id INT REFERENCES customers(customer_id),
    item_id INT REFERENCES items(item_id),
    quantity_purchased INT
);


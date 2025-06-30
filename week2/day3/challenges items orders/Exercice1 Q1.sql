CREATE TABLE product_orders (
    id SERIAL PRIMARY KEY,
    order_date DATE DEFAULT CURRENT_DATE
);
CREATE TABLE items (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100),
    price NUMERIC(10,2),
    quantity INTEGER DEFAULT 1,
    order_id INTEGER REFERENCES product_orders(id) ON DELETE CASCADE
);






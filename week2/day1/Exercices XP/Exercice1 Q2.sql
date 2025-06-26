CREATE TABLE items (
    item_id SERIAL PRIMARY KEY,
    desk VARCHAR(50) NOT NULL,
    price SMALLINT NOT NULL
);

-- Créer la table customers
CREATE TABLE customers (
    customer_id SERIAL PRIMARY KEY,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(100) NOT NULL
);
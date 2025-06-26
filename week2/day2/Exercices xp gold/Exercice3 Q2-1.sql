-- Scott Scott bought one fan
INSERT INTO purchases (customer_id, item_id, quantity_purchased)
VALUES (
    (SELECT customer_id FROM customers WHERE first_name = 'Scott' AND last_name = 'Scott'),
    (SELECT item_id FROM items WHERE desk = 'Fan'),
    1
);

-- Melanie Johnson bought ten large desks
INSERT INTO purchases (customer_id, item_id, quantity_purchased)
VALUES (
    (SELECT customer_id FROM customers WHERE first_name = 'Melanie' AND last_name = 'Johnson'),
    (SELECT item_id FROM items WHERE desk = 'Large desk'),
    10
);




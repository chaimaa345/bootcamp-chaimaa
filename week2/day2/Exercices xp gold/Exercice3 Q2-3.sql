
-- Greg Jones bought two small desks
INSERT INTO purchases (customer_id, item_id, quantity_purchased)
VALUES (
    (SELECT customer_id FROM customers WHERE first_name = 'Greg' AND last_name = 'Jones'),
    (SELECT item_id FROM items WHERE desk = 'Small Desk'),
    2
);






INSERT INTO customer_profile (isLoggedIn, customer_id)
VALUES 
(TRUE, (SELECT id FROM customer WHERE first_name = 'John')),
(FALSE, (SELECT id FROM customer WHERE first_name = 'Jerome'));

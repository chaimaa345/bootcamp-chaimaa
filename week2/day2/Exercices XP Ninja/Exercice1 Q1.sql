SELECT first_name, last_name
FROM customer
ORDER BY first_name ASC
OFFSET (
    SELECT COUNT(*) FROM customer
) - 2
LIMIT 2;





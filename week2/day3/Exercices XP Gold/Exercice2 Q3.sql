SELECT DISTINCT c.customer_id, c.first_name, c.last_name
FROM customer c
JOIN address a ON c.address_id = a.address_id
WHERE a.city_id IN (
    SELECT a.city_id
    FROM store s
    JOIN address a ON s.address_id = a.address_id
);
















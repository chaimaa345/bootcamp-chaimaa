SELECT c.customer_id, c.first_name, c.last_name, COUNT(*) AS rentals_out
FROM rental r
JOIN customer c ON r.customer_id = c.customer_id
WHERE r.return_date IS NULL
GROUP BY c.customer_id, c.first_name, c.last_name
ORDER BY rentals_out DESC;












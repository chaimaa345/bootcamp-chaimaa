SELECT customer_id
FROM purchases p
JOIN items i ON p.item_id = i.item_id
WHERE i.desk IN ('Large desk', 'Small Desk')
GROUP BY customer_id
HAVING COUNT(DISTINCT i.desk) = 2;










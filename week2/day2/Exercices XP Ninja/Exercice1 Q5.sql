SELECT 
    p.payment_id,
    c.first_name,
    c.last_name,
    p.amount,
    p.payment_date
FROM payment p
INNER JOIN customer c ON p.customer_id = c.customer_id;







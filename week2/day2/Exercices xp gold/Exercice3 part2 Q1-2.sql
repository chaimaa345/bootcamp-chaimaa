SELECT 
    p.id,
    c.first_name,
    c.last_name,
    p.item_id,
    p.quantity_purchased
FROM purchases p
JOIN customers c ON p.customer_id = c.customer_id;






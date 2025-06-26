SELECT 
    c.first_name, 
    c.last_name, 
    i.desk AS item_name
FROM purchases p
JOIN customers c ON p.customer_id = c.customer_id
JOIN items i ON p.item_id = i.item_id;











SELECT * FROM film
WHERE film_id NOT IN (
    SELECT film_id FROM inventory
);













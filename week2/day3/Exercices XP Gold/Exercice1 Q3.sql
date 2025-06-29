
CREATE VIEW film_actor_category AS
SELECT 
    f.title, 
    a.first_name, 
    a.last_name, 
    c.name AS category
FROM film f
JOIN film_actor fa ON f.film_id = fa.film_id
JOIN actor a ON fa.actor_id = a.actor_id
JOIN film_category fc ON f.film_id = fc.film_id
JOIN category c ON fc.category_id = c.category_id;

SELECT title 
FROM film_actor_category 
WHERE first_name = 'Joe' AND last_name = 'Swank' AND category = 'Action';













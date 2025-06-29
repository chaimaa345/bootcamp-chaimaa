
SELECT f.film_id, f.title, COUNT(w.id) AS num_waiting
FROM children_waiting_list w
JOIN film f ON w.film_id = f.film_id
GROUP BY f.film_id, f.title
ORDER BY num_waiting DESC;





















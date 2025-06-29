SELECT 
    SUM(f.length) AS minutes,
    ROUND(SUM(f.length)/60.0, 2) AS hours,
    ROUND(SUM(f.length)/60.0/24.0, 2) AS days
FROM film f
WHERE f.film_id NOT IN (
    SELECT fc.film_id
    FROM film_category fc
    JOIN category c ON fc.category_id = c.category_id
    WHERE c.name = 'Horror'
)
AND f.title NOT ILIKE ANY (ARRAY[
    '%beast%', '%monster%', '%ghost%', '%dead%', '%zombie%', '%undead%'
])
AND f.description NOT ILIKE ANY (ARRAY[
    '%beast%', '%monster%', '%ghost%', '%dead%', '%zombie%', '%undead%'
]);






















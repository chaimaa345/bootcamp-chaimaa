SELECT 
    SUM(f.length) AS total_safe_minutes,
    ROUND(SUM(f.length)/60.0, 2) AS total_safe_hours,
    ROUND(SUM(f.length)/60.0/24, 2) AS total_safe_days
FROM film f
JOIN film_category fc ON f.film_id = fc.film_id
JOIN category c ON fc.category_id = c.category_id
WHERE c.name != 'Horror'
  AND f.title NOT ILIKE ANY (ARRAY[
      '%beast%',
      '%monster%',
      '%ghost%',
      '%dead%',
      '%zombie%',
      '%undead%'
  ])
  AND f.description NOT ILIKE ANY (ARRAY[
      '%beast%',
      '%monster%',
      '%ghost%',
      '%dead%',
      '%zombie%',
      '%undead%'
  ]);





















SELECT * FROM (
    SELECT *, ROW_NUMBER() OVER (ORDER BY rental_rate ASC) AS row_num
    FROM film
) AS ranked
WHERE row_num > 10 AND row_num <= 20;











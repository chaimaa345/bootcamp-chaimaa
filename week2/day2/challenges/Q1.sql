--SQL won’t match any rows because it’s uncertain.

That’s why the final count is 0
 SELECT COUNT(*) 
    FROM FirstTab AS ft WHERE ft.id NOT IN ( SELECT id FROM SecondTab WHERE id IS NULL )

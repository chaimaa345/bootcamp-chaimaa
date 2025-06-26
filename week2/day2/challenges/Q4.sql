--The output is 2 because the subquery returns only 5, 
--so rows with id 6 and 7 match the NOT IN (5) condition, while NULL is ignored
  SELECT COUNT(*) 
    FROM FirstTab AS ft WHERE ft.id NOT IN ( SELECT id FROM SecondTab WHERE id IS NOT NULL )
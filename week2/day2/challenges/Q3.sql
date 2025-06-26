--The output is 0 because the subquery returns (5, NULL), 
--and NOT IN (NULL) causes the whole condition to return UNKNOWN
--so no rows match.
SELECT COUNT(*) 
FROM FirstTab AS ft WHERE ft.id NOT IN ( SELECT id FROM SecondTab )
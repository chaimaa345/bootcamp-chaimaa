--The query returns 2 because only the rows with id 6 and 7 are not in the list (5), and the row with NULL is ignored
	SELECT COUNT(*) 
    FROM FirstTab AS ft WHERE ft.id NOT IN ( SELECT id FROM SecondTab WHERE id = 5 )
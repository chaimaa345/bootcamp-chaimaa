SELECT first_name, last_name FROM students 
WHERE SUBSTRING(first_name FROM LENGTH(first_name)-1 FOR 1) = 'a';






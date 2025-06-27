--Since customer_review has ON DELETE CASCADE, 
--the review for film id = 1 will also be automatically deleted
DELETE FROM new_film WHERE id = 1;


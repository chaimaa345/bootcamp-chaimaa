
INSERT INTO library (book_fk_id, student_fk_id, borrowed_date)
VALUES 
(
  (SELECT book_id FROM book WHERE title = 'Alice In Wonderland'),
  (SELECT student_id FROM student WHERE name = 'John'),
  '2022-02-15'
),
(
  (SELECT book_id FROM book WHERE title = 'To kill a mockingbird'),
  (SELECT student_id FROM student WHERE name = 'Bob'),
  '2021-03-03'
),
(
  (SELECT book_id FROM book WHERE title = 'Alice In Wonderland'),
  (SELECT student_id FROM student WHERE name = 'Lera'),
  '2021-05-23'
),
(
  (SELECT book_id FROM book WHERE title = 'Harry Potter'),
  (SELECT student_id FROM student WHERE name = 'Bob'),
  '2021-08-12'
);





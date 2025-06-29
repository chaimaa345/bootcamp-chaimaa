CREATE TABLE student (
    student_id SERIAL PRIMARY KEY,
    name VARCHAR(100) UNIQUE NOT NULL,
    age INTEGER CHECK (age <= 15)
);


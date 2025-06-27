
CREATE TABLE new_film (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255)
);

-- Insert example films
INSERT INTO new_film (name) VALUES
('Storm of Honor'),
('Galaxy Smashers');

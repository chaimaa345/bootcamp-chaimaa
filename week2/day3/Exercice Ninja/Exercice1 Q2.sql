CREATE TABLE children_waiting_list (
    id SERIAL PRIMARY KEY,
    child_name VARCHAR(100) NOT NULL,
    film_id INTEGER NOT NULL REFERENCES film(film_id),
    date_added TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);























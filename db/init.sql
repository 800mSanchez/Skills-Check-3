CREATE TABLE users (
    user_id SERIAL PRIMARY KEY,
    email VARCHAR(60),
    password TEXT,
    img TEXT
);

CREATE TABLE posts(
    post_id SERIAL PRIMARY KEY,
    body TEXT,
    img TEXT,
    user_id INT REFERENCES users(user_id)
);

ALTER TABLE users 
ALTER COLUMN password TEXT;
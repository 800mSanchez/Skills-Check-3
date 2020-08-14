INSERT INTO users (email, password, img)
VALUES
($1, $2, $3)
RETURNING *;
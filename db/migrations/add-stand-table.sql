DROP TABLE IF EXISTS stands;

CREATE TABLE stands(
  id SERIAL PRIMARY KEY NOT NULL,
  name VARCHAR,
  stand_user VARCHAR,
  photo_url VARCHAR,
  description TEXT
);

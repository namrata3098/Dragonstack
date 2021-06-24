module.export = 
"CREATE TABLE( id SERIAL PRIMARY KEY, birthname TIMESTAMP NOT NULL, nickname  VARCHAR(64), 'generationId' INTEGER, FOREIGN KEY 'generationId' REFERENCES generation(id) )"


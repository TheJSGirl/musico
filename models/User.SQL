CREATE TABLE users(
    id INTEGER AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(255) UNIQUE NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(100) NOT NULL,
    created_at TIMESTAMP DEFAULT NOW()
);

INSERT INTO users(username, email, password) VALUES('anish', 'akshit@gmail.com', 'myapp123');
INSERT INTO users(username, email, password) VALUES('akriti', 'akrit@gmail.com', 'myapp123');
INSERT INTO users(username, email, password) VALUES('ayush', 'ayush@gmail.com', 'myapp123');
INSERT INTO users(username, email, password) VALUES('nisha', 'nish@gmail.com', 'myapp123');
INSERT INTO users(username, email, password) VALUES('monika', 'monika@gmail.com', 'myapp123');


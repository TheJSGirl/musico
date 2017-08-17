CREATE TABLE (
    id INTEGER AUTO_INCREMENT PRIMARY KEY,
    token VARCHAR(40) UNIQUE ,
    user_id INTEGER NOT NULL,
    type VARCHAR(100) NOT NULL,
    expiry INTEGER DEFAULT 10,
    created_at TIMESTAMP DEFAULT NOW()
);


INSERT INTO tokens(token, user_id, type)
VALUES
('abcdef', 2, 'regiester'),
('ghijkl', 3, 'login'),
('mnopqr', 1, 'forget password');
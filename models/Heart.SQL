CREATE TABLE hearts(
    post_id INTEGER NOT NULL,
    user_id INTEGER NOT NULL,
    created_at TIMESTAMP DEFAULT NOW()
    FOREIGN KEY (user_id) REFERENCES users(id),
    FOREIGN KEY (post_id) REFERENCES posts(id),
    PRIMARY KEY (user_id, post_id)
);

INSERT INTO hearts (post_id, user_id) 
VALUES 
(1, 2),
(1, 1),
(1, 3),
(2, 1),
(3, 1),
(4, 1),
(2, 3),
(3, 1),
(3, 5);
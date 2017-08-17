CREATE TABLE bookmarks(
    post_id INTEGER NOT NULL,
    user_id INTEGER NOT NULL,
    created_at TIMESTAMP DEFAULT NOW(),
    FOREIGN KEY (post_id) REFERENCES posts(id),
    FOREIGN KEY (user_id) REFERENCES users(id),
    
    PRIMARY KEY (post_id, user_id)
);

INSERT INTO bookmarks(post_id, user_id)
VALUES
(1, 2),
(1, 3),
(2, 4),
(2, 2);
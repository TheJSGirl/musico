CREATE TABLE comments(
    id INTEGER AUTO_INCREMENT PRIMARY KEY,
    user_id INTEGER NOT NULL,
    post_id INTEGER NOT NULL,
    comment_body VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT NOW(),
    FOREIGN KEY (user_id) REFERENCES users(id),
    FOREIGN KEY (post_id) REFERENCES posts(id)
);

INSERT INTO comments(user_id, post_id, comment_body) 
VALUES 
(1, 2, 'its amazing'),
(2, 2, 'its good'),
(4, 2, 'wow'),
(5, 1, 'thanks'),
(2, 1, 'its amazing'),
(3, 1, 'its nyc'),
(1, 5, 'its amazing'),
(1, 5, 'its a great post'),
(2, 3, 'its great'),
(1, 1, 'well written');
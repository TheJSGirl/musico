CREATE TABLE posts(
    id INTEGER AUTO_INCREMENT PRIMARY KEY,
    created_by INTEGER NOT NULL,
    created_at TIMESTAMP DEFAULT NOW(),
    post_title VARCHAR(100) NOT NULL UNIQUE,
    post_body VARCHAR(255) NOT NULL,
    slug VARCHAR(100) NOT NULL UNIQUE,
    FOREIGN KEY (created_by) REFERENCES users(id)
);

INSERT INTO posts (created_by, post_title, post_body, slug)
VALUES (2, "how to start with nodejs?", "this is just for testing", "how_to_start_with_nodejs?");

INSERT INTO posts (created_by, post_title, post_body, slug)
VALUES (2, "how to start with html/css/js?", "this is just for testing", "how_to_start_with_js?");

INSERT INTO posts (created_by, post_title, post_body, slug) 
VALUES (3, "how to start with google go?", "this is just for testing", "how_to_start_with_goggle_go?"); 

INSERT INTO posts (created_by, post_title, post_body, slug)
VALUES (4, "how to start with angular?", "this is just for testing", "how_to_start_with_angular?"); 

INSERT INTO posts (created_by, post_title, post_body, slug)
VALUES (2, "how to start with react?", "this is just for testing", "how_to_start_with_react?"); 


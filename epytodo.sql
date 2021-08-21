CREATE DATABASE IF NOT EXISTS epytodo;
USE epytodo;
CREATE TABLE IF NOT EXISTS user(
    id INT UNSIGNED NOT NULL AUTO_INCREMENT primary key,
    email VARCHAR(50) NOT NULL UNIQUE,
    user_password CHAR(50),
    name VARCHAR(50) NOT NULL,
    firstname VARCHAR(50) NOT NULL,
    created_at TIMESTAMP
);

CREATE TABLE IF NOT EXISTS todo(
    id INT NOT NULL AUTO_INCREMENT primary key,
    title VARCHAR(50) NOT NULL,
    description VARCHAR(50),
    created_at TIMESTAMP,
    due_time datetime NOT NULL,
    firstname VARCHAR(50) NOT NULL,
    status enum ('not started', 'todo', 'in progress', 'done') DEFAULT 'not started',
    user_id INT UNSIGNED NOT NULL,
    FOREIGN KEY(user_id) REFERENCES user(id)
);
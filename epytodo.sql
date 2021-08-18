CREATE DATABASE IF NOT EXISTS epytodo;
USE epytodo;
CREATE TABLE IF NOT EXISTS user(
    id INT NOT NULL AUTO_INCREMENT,
    email VARCHAR(50) NOT NULL UNIQUE,
    password PASSWORD(CHAR(50)),
    name VARCHAR(50) NOT NULL,
    firstname VARCHAR(50) NOT NULL,
    created_at TIMESTAMP,
);

CREATE TABLE IF NOT EXISTS todo(
    id INT NOT NULL AUTO_INCREMENT,
    title VARCHAR(50) NOT NULL,
    description VARCHAR(50),
    created_at TIMESTAMP,
    due_time VARCHAR(50) NOT NULL,
    firstname VARCHAR(50) NOT NULL,
    status DEFAULT(not started)
    user_id VARCHAR(50) NOT NULL
);
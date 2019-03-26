CREATE DATABASE if not exists foodlette_DB CHARACTER SET utf8;

CREATE TABLE if not exists foodlette_DB.user_accounts(
  id INT NOT NULL PRIMARY KEY AUTO_INCREMENT
);

-- dummy database
use foodlette_DB
INSERT INTO user_accounts (id)
VALUES ('1')

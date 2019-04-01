-- Used to create the database if it does not already exist
CREATE DATABASE if not exists foodlette_DB CHARACTER SET utf8;

-- Creates the table userAccounts in the database foodlette_DB if it does not exist already
CREATE TABLE if not exists foodlette_DB.userAccounts(
  user_ID INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  user_Email VARCHAR(50) NOT NULL,
  user_Password VARCHAR(20) NOT NULL
);

-- Creates the table userFavourites in the database foodlette_DB if it does not exist already
CREATE TABLE if not exists foodlette_DB.userFavourites(
  fav_ID INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  fav_RouletteName VARCHAR(50) NOT NULL,
  fav_user_ID INT NOT NULL,
  FOREIGN KEY (fav_user_ID) REFERENCES userAccounts(user_ID)
);

-- Creates the table userRoulettesLarge in the database foodlette_DB if it does not exist already
CREATE TABLE if not exists foodlette_DB.userRoulettesLarge(
  rl_ID INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  rl_Name VARCHAR(25) NOT NULL,
  rl_Items VARCHAR(100) NOT NULL,
  rl_user_ID INT NOT NULL,
  FOREIGN KEY (rl_user_ID) REFERENCES userAccounts(user_ID)
);

-- Creates the table userRoulettesSmall in the database foodlette_DB if it does not exist already
CREATE TABLE if not exists foodlette_DB.userRoulettesSmall(
  rs_ID INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  rs_Name VARCHAR(25) NOT NULL,
  rs_Items VARCHAR(100) NOT NULL,
  rs_user_ID INT NOT NULL,
  FOREIGN KEY (rs_user_ID) REFERENCES userAccounts(user_ID)
);

-- Creates the table roulettePopularity in the database foodlette_DB if it does not exist already
CREATE TABLE if not exists foodlette_DB.roulettePopularity(
  rp_ID INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  rp_HTML VARCHAR(25) NOT NULL,
  rp_Items VARCHAR(100) NOT NULL,
  rp_Clicks INT NOT NULL
);

-- Below is dummy data to be insterted into the corresponding table within the foodlette_DB database
-- The dummy data allows tests to be performed on the database when it is first setup to ensure it works
use foodlette_DB
INSERT INTO userAccounts (user_ID, user_Email, user_Password) VALUES ('1', 'testemail@test.com', 'testpassword');

INSERT INTO userFavourites (fav_ID, fav_RouletteName, fav_user_ID) VALUES ('1', 'comfortCreations', '1');

INSERT INTO userRoulettesLarge (rl_ID, rl_Name, rl_Items, rl_user_ID) VALUES ('1', 'Test Name Large', 'item1, item2, item3, item4, item5, item6, item7, item8, item9, item10', '1');

INSERT INTO userRoulettesSmall (rs_ID, rs_Name, rs_Items, rs_user_ID) VALUES ('1', 'Test Name Small', 'item1, item2, item3, item4, item5, item6, item7, item8, item9, item10', '1');

INSERT INTO roulettePopularity (rp_ID, rp_HTML, rp_Items, rp_Clicks) VALUES ('1', 'comfortCreations', 'item1, item2, item3, item4, item5, item6, item7, item8, item9, item10', '10');


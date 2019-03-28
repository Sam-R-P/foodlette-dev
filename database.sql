CREATE DATABASE if not exists foodlette_DB CHARACTER SET utf8;

CREATE TABLE if not exists foodlette_DB.userAccounts(
  user_ID INT NOT NULL AUTO_INCREMENT,
  user_Email VARCHAR(50) NOT NULL,
  user_Password VARCHAR(20) NOT NULL,
  PRIMARY KEY (user_ID)
);

CREATE TABLE if not exists foodlette_DB.userFavourites(
  fav_ID INT NOT NULL AUTO_INCREMENT,
  fav_RouletteID VARCHAR(50) NOT NULL,
  user_ID INT NOT NULL,
  PRIMARY KEY (fav_ID),
  FOREIGN KEY (user_ID) REFERENCES userAccounts(user_ID)
);

CREATE TABLE if not exists foodlette_DB.userRoulettesLarge(
  rl_ID INT NOT NULL AUTO_INCREMENT,
  rl_Name VARCHAR(25) NOT NULL,
  rl_Items VARCHAR(100) NOT NULL,
  user_ID INT NOT NULL,
  PRIMARY KEY (rl_ID),
  FOREIGN KEY (user_ID) REFERENCES userAccounts(user_ID)
);

CREATE TABLE if not exists foodlette_DB.userRoulettesSmall(
  rs_ID INT NOT NULL AUTO_INCREMENT,
  rs_Name VARCHAR(25) NOT NULL,
  rs_Items VARCHAR(100) NOT NULL,
  user_ID INT NOT NULL,
  PRIMARY KEY (rs_ID),
  FOREIGN KEY (user_ID) REFERENCES userAccounts(user_ID)
);

CREATE TABLE if not exists foodlette_DB.roulettePopularity(
  rp_ID INT NOT NULL AUTO_INCREMENT,
  rp_HTML VARCHAR(25) NOT NULL,
  rp_Items VARCHAR(100) NOT NULL,
  rp_Clicks INT NOT NULL,
  PRIMARY KEY (rp_ID)
);

-- dummy data
use foodlette_DB
INSERT INTO userAccounts (user_ID, user_Email, user_Password)
VALUES ('1', 'testemail@test.com', 'testpassword')

INSERT INTO userFavourites (fav_ID, fav_RouletteID, user_ID)
VALUES ('1', '#comfortCreations', '1')

INSERT INTO userRoulettesLarge (rl_ID, rl_Name, rl_Items, user_ID)
VALUES ('1', 'Test Name Large', 'item1, item2, item3, item4, item5, item6, item7, item8, item9, item10', '1')

INSERT INTO userRoulettesSmall (rs_ID, rs_Name, rs_Items, user_ID)
VALUES ('1', 'Test Name Small', 'item1, item2, item3, item4, item5, item6, item7, item8, item9, item10', '1')

INSERT INTO roulettePopularity (rp_ID, rp_Name, rp_Items, user_ID)
VALUES ('1', '#comfortCreations', 'item1, item2, item3, item4, item5, item6, item7, item8, item9, item10', '10')
VALUES ('2', '#spicySensations', 'item1, item2, item3, item4, item5, item6, item7, item8, item9, item10', '1')

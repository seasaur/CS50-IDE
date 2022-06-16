CREATE TABLE Users (
  userID INT UNSIGNED NOT NULL AUTO_INCREMENT,
  email VARCHAR UNSIGNED NOT NULL,
  password VARCHAR UNSIGNED NOT NULL,
  PRIMARY KEY  (userID),
)

CREATE TABLE Films (
  filmID INT UNSIGNED NOT NULL AUTO_INCREMENT,
  name VARCHAR UNSIGNED NOT NULL,
  dates DATE UNSIGNED NOT NULL,
  time TIME UNSIGNED NOT NULL,
  PRIMARY KEY  (filmID),
)

CREATE TABLE Seats (
  seatID INT UNSIGNED NOT NULL AUTO_INCREMENT,
  name VARCHAR UNSIGNED NOT NULL,
  dates DATE UNSIGNED NOT NULL,
  time TIME UNSIGNED NOT NULL,
  PRIMARY KEY  (seatID),
  FOREIGN KEY (city_id) REFERENCES city (city_id)
)
DROP DATABASE IF EXISTS Cinemas;
CREATE DATABASE Cinemas;
USE Cinemas;

CREATE TABLE Users (
  userID INT UNSIGNED NOT NULL AUTO_INCREMENT,
  email VARCHAR(63),
  password VARCHAR(63),
  PRIMARY KEY  (userID)
);

CREATE TABLE Films (
  filmID INT UNSIGNED NOT NULL AUTO_INCREMENT,
  name VARCHAR(63),
  dates DATE,
  time TIME,
  PRIMARY KEY  (filmID)
);

CREATE TABLE Seats (
  seatID INT UNSIGNED NOT NULL AUTO_INCREMENT,
  seat VARCHAR(3),
  booked BOOLEAN,
  filmID INT,
  PRIMARY KEY  (seatID),
  FOREIGN KEY (filmID) REFERENCES Films (filmID)
);

CREATE TABLE Bookings (
  seatID INT,
  userID INT,
  FOREIGN KEY (seatID) REFERENCES Seats (seatID),
  FOREIGN KEY (userID) REFERENCES Users (userID)
);
CREATE TABLE Users (
  userID INT UNSIGNED NOT NULL AUTO_INCREMENT,
  email VARCHAR(63),
  password VARCHAR(63),
  PRIMARY KEY  (userID)
);

CREATE TABLE Films (
  filmID INT UNSIGNED NOT NULL AUTO_INCREMENT,
  name VARCHAR(63) UNSIGNED NOT NULL,
  dates DATE UNSIGNED NOT NULL,
  time TIME UNSIGNED NOT NULL,
  PRIMARY KEY  (filmID),
);

CREATE TABLE Seats (
  seatID INT UNSIGNED NOT NULL AUTO_INCREMENT,
  seat VARCHAR(3) UNSIGNED NOT NULL,
  booked BOOLEAN NOT NULL,
  PRIMARY KEY  (seatID),
  FOREIGN KEY (filmID) REFERENCES Film (filmID)
);

CREATE TABLE Bookings (
  FOREIGN KEY (seatID) REFERENCES Seats (seatID),
  FOREIGN KEY (userID) REFERENCES Users (userID)
);
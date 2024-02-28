use cardpark;

CREATE TABLE Users (
UID int,
Fname varchar(20),
Lname varchar(20),
Email varchar(50) NOT NULL,
Passwrd varchar(255) NOT NULL,
PRIMARY KEY(UID)
);

CREATE TABLE ParkingLot (
LID varchar(1),
amt_spots int,
Geo_Data varchar(255),
PRIMARY KEY (LID)
);

CREATE TABLE ParkingSpot (
LID varchar(1),
spot_num varchar(3),
category varchar(1),
CONSTRAINT spot PRIMARY KEY (LID, spot_num),
FOREIGN KEY (LID) REFERENCES ParkingLot(LID)
);

CREATE TABLE Reservation (
arrv_time time,
check_in bool,
UID int,
LID varchar(1),
spot_num varchar(3),
CONSTRAINT reservation PRIMARY KEY (UID, LID, spot_num),
FOREIGN KEY (UID) REFERENCES Users(UID), 
FOREIGN KEY (LID) REFERENCES ParkingSpot(LID)
#FOREIGN KEY (spot_num) REFERENCES ParkingSpot(spot_num)
);


ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'cardpark';
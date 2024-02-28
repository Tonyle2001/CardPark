use CardPark;

INSERT INTO  users (UID, Fname, Lname, email, passwrd) VALUES (1, 'John', 'Doe', 'jdoe@noctrl.edu', '123');

INSERT INTO ParkingLot (LID, amt_spots, geo_data) VALUES ('A', 20, 'Naperville');  

INSERT INTO ParkingSpot (LID, spot_num, category) VALUES ('A', 1, 'N');  
INSERT INTO ParkingSpot (LID, spot_num, category) VALUES ('A', 2, 'H');  

INSERT INTO Reservation (arrv_time, check_in, UID, LID, spot_num) VALUES ('20:00:00', FALSE, 1, 'A', 2);
INSERT INTO Reservation (arrv_time, check_in, UID, LID, spot_num) VALUES ('20:00:00', FALSE, 1, 'A', 1);


UPDATE Users SET Fname = 'Jack', Lname = 'Doe', email = 'jdoe@noctrl.edu', passwrd = '123' WHERE uid = '1';


Select * from parkingspot;
Select * from users;
SELECT * FROM reservation;

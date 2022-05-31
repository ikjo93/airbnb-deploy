DROP TABLE IF EXISTS reservation;
DROP TABLE IF EXISTS member;
DROP TABLE IF EXISTS schedule;
DROP TABLE IF EXISTS accommodation;
DROP TABLE IF EXISTS accommodation_facility;

CREATE TABLE member (
    member_id INT NOT NULL AUTO_INCREMENT,
    email VARCHAR(32),
    PRIMARY KEY (member_id)
);

CREATE TABLE accommodation_facility (
    accommodation_facility_id INT NOT NULL AUTO_INCREMENT,
    maximum_capacity INT,
    options VARCHAR(255),
    PRIMARY KEY (accommodation_facility_id)
);

CREATE TABLE accommodation (
    accommodation_id INT NOT NULL AUTO_INCREMENT,
    accommodation_facility_id INT NOT NULL,
    name VARCHAR(64),
    description VARCHAR(255),
    image_path VARCHAR(64),
    price_per_day INT,
    location POINT,
    PRIMARY KEY (accommodation_id),
    FOREIGN KEY (accommodation_facility_id) REFERENCES accommodation_facility (accommodation_facility_id)
);

CREATE TABLE schedule (
    schedule_id INT NOT NULL AUTO_INCREMENT,
    accommodation_id INT NOT NULL,
    stay_date TIMESTAMP,
    vacant_room_quantity INT,
    PRIMARY KEY (schedule_id),
    FOREIGN KEY (accommodation_id) REFERENCES accommodation (accommodation_id)
);

CREATE TABLE reservation (
    reservation_id INT NOT NULL AUTO_INCREMENT,
    member_id INT NOT NULL,
    accommodation_id INT NOT NULL,
    reservation_price INT,
    checkin_date TIMESTAMP,
    checkout_date TIMESTAMP,
    reservation_datetime TIMESTAMP,
    status VARCHAR(16),
    PRIMARY KEY (reservation_id),
    FOREIGN KEY (member_id) REFERENCES member (member_id) ,
    FOREIGN KEY (accommodation_id) REFERENCES accommodation (accommodation_id)
);

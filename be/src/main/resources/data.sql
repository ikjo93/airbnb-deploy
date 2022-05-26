INSERT INTO accommodation_facility (maximum_capacity, options) VALUES (3, "침실 1개, 침대 2개, 욕실 1개");

INSERT INTO accommodation (accommodation_facility_id, location_name, description, price_per_day, image_path, position_x, position_y)
VALUES (1, "강북구 호텔", "좋아요!", 20000, "img/1_ma.png", 10, 10);
INSERT INTO accommodation (accommodation_facility_id, location_name, description, price_per_day, image_path, position_x, position_y)
VALUES (1, "노원구 호텔", "좋아요!", 25000, "img/2_ma.png", 20, 20);
INSERT INTO accommodation (accommodation_facility_id, location_name, description, price_per_day, image_path, position_x, position_y)
VALUES (1, "강남구 호텔", "좋아요!", 30000, "img/3_ma.png", 30, 30);
INSERT INTO accommodation (accommodation_facility_id, location_name, description, price_per_day, image_path, position_x, position_y)
VALUES (1, "강서구 호텔", "좋아요!", 20000, "img/4_ma.png", 40, 40);
INSERT INTO accommodation (accommodation_facility_id, location_name, description, price_per_day, image_path, position_x, position_y)
VALUES (1, "강동구 호텔", "좋아요!", 20000, "img/5_ma.png", 50, 50);
INSERT INTO accommodation (accommodation_facility_id, location_name, description, price_per_day, image_path, position_x, position_y)
VALUES (1, "양천구 호텔", "좋아요!", 20000, "img/6_ma.png", 10, 10);
INSERT INTO accommodation (accommodation_facility_id, location_name, description, price_per_day, image_path, position_x, position_y)
VALUES (1, "구로구 호텔", "좋아요!", 20000, "img/7_ma.png", 10, 10);
INSERT INTO accommodation (accommodation_facility_id, location_name, description, price_per_day, image_path, position_x, position_y)
VALUES (1, "영등포구 호텔", "좋아요!", 20000, "img/8_ma.png", 10, 10);

INSERT INTO schedule (accommodation_id, stay_date, vacant_room_quantity) VALUES (1, NOW(), 3);
INSERT INTO schedule (accommodation_id, stay_date, vacant_room_quantity) VALUES (1, NOW() + INTERVAL 1 DAY, 3);
INSERT INTO schedule (accommodation_id, stay_date, vacant_room_quantity) VALUES (1, NOW() + INTERVAL 2 DAY, 3);
INSERT INTO schedule (accommodation_id, stay_date, vacant_room_quantity) VALUES (1, NOW() + INTERVAL 3 DAY, 3);
INSERT INTO schedule (accommodation_id, stay_date, vacant_room_quantity) VALUES (1, NOW() + INTERVAL 4 DAY, 3);

INSERT INTO schedule (accommodation_id, stay_date, vacant_room_quantity) VALUES (2, NOW(), 3);
INSERT INTO schedule (accommodation_id, stay_date, vacant_room_quantity) VALUES (2, NOW() + INTERVAL 1 DAY, 3);
INSERT INTO schedule (accommodation_id, stay_date, vacant_room_quantity) VALUES (2, NOW() + INTERVAL 2 DAY, 3);
INSERT INTO schedule (accommodation_id, stay_date, vacant_room_quantity) VALUES (2, NOW() + INTERVAL 3 DAY, 3);
INSERT INTO schedule (accommodation_id, stay_date, vacant_room_quantity) VALUES (2, NOW() + INTERVAL 4 DAY, 3);

INSERT INTO schedule (accommodation_id, stay_date, vacant_room_quantity) VALUES (3, NOW(), 3);
INSERT INTO schedule (accommodation_id, stay_date, vacant_room_quantity) VALUES (3, NOW() + INTERVAL 1 DAY, 3);
INSERT INTO schedule (accommodation_id, stay_date, vacant_room_quantity) VALUES (3, NOW() + INTERVAL 2 DAY, 3);
INSERT INTO schedule (accommodation_id, stay_date, vacant_room_quantity) VALUES (3, NOW() + INTERVAL 3 DAY, 3);
INSERT INTO schedule (accommodation_id, stay_date, vacant_room_quantity) VALUES (3, NOW() + INTERVAL 4 DAY, 3);

INSERT INTO schedule (accommodation_id, stay_date, vacant_room_quantity) VALUES (4, NOW(), 3);
INSERT INTO schedule (accommodation_id, stay_date, vacant_room_quantity) VALUES (4, NOW() + INTERVAL 1 DAY, 3);
INSERT INTO schedule (accommodation_id, stay_date, vacant_room_quantity) VALUES (4, NOW() + INTERVAL 2 DAY, 3);
INSERT INTO schedule (accommodation_id, stay_date, vacant_room_quantity) VALUES (4, NOW() + INTERVAL 3 DAY, 3);
INSERT INTO schedule (accommodation_id, stay_date, vacant_room_quantity) VALUES (4, NOW() + INTERVAL 4 DAY, 3);

INSERT INTO schedule (accommodation_id, stay_date, vacant_room_quantity) VALUES (5, NOW() + INTERVAL 5 DAY, 3);
INSERT INTO schedule (accommodation_id, stay_date, vacant_room_quantity) VALUES (5, NOW() + INTERVAL 6 DAY, 3);
INSERT INTO schedule (accommodation_id, stay_date, vacant_room_quantity) VALUES (5, NOW() + INTERVAL 7 DAY, 3);
INSERT INTO schedule (accommodation_id, stay_date, vacant_room_quantity) VALUES (5, NOW() + INTERVAL 8 DAY, 3);
INSERT INTO schedule (accommodation_id, stay_date, vacant_room_quantity) VALUES (5, NOW() + INTERVAL 9 DAY, 3);

INSERT INTO schedule (accommodation_id, stay_date, vacant_room_quantity) VALUES (6, NOW() + INTERVAL 5 DAY, 3);
INSERT INTO schedule (accommodation_id, stay_date, vacant_room_quantity) VALUES (6, NOW() + INTERVAL 6 DAY, 3);
INSERT INTO schedule (accommodation_id, stay_date, vacant_room_quantity) VALUES (6, NOW() + INTERVAL 7 DAY, 3);
INSERT INTO schedule (accommodation_id, stay_date, vacant_room_quantity) VALUES (6, NOW() + INTERVAL 8 DAY, 3);
INSERT INTO schedule (accommodation_id, stay_date, vacant_room_quantity) VALUES (6, NOW() + INTERVAL 9 DAY, 3);

INSERT INTO schedule (accommodation_id, stay_date, vacant_room_quantity) VALUES (7, NOW() + INTERVAL 5 DAY, 3);
INSERT INTO schedule (accommodation_id, stay_date, vacant_room_quantity) VALUES (7, NOW() + INTERVAL 6 DAY, 3);
INSERT INTO schedule (accommodation_id, stay_date, vacant_room_quantity) VALUES (7, NOW() + INTERVAL 7 DAY, 3);
INSERT INTO schedule (accommodation_id, stay_date, vacant_room_quantity) VALUES (7, NOW() + INTERVAL 8 DAY, 3);
INSERT INTO schedule (accommodation_id, stay_date, vacant_room_quantity) VALUES (7, NOW() + INTERVAL 9 DAY, 3);

INSERT INTO schedule (accommodation_id, stay_date, vacant_room_quantity) VALUES (8, NOW() + INTERVAL 5 DAY, 3);
INSERT INTO schedule (accommodation_id, stay_date, vacant_room_quantity) VALUES (8, NOW() + INTERVAL 6 DAY, 3);
INSERT INTO schedule (accommodation_id, stay_date, vacant_room_quantity) VALUES (8, NOW() + INTERVAL 7 DAY, 3);
INSERT INTO schedule (accommodation_id, stay_date, vacant_room_quantity) VALUES (8, NOW() + INTERVAL 8 DAY, 3);
INSERT INTO schedule (accommodation_id, stay_date, vacant_room_quantity) VALUES (8, NOW() + INTERVAL 9 DAY, 3);;

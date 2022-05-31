INSERT INTO accommodation_facility (maximum_capacity, options) VALUES (3, "침실 1개, 침대 2개, 욕실 1개");

INSERT INTO accommodation (accommodation_facility_id, name, description, price_per_day, image_path, location)
VALUES (1, "로데오", "좋아요!", 20000, "img/1_ma.png", ST_GeomFromText('POINT(126.7518 37.4902)')),
       (1, "마루", "좋아요!", 25000, "img/2_ma.png", ST_GeomFromText('POINT(126.7518 37.4902)')),
       (1, "요기", "좋아요!", 30000, "img/3_ma.png", ST_GeomFromText('POINT(126.756 37.4895)')),
       (1, "A+", "좋아요!", 20000, "img/4_ma.png", ST_GeomFromText('POINT(126.7562 37.4903)')),
       (1, "알프스", "좋아요!", 20000, "img/5_ma.png", ST_GeomFromText('POINT(126.7522 37.491)')),
       (1, "MOMO", "좋아요!", 20000, "img/6_ma.png", ST_GeomFromText('POINT(126.7556 37.4904)')),
       (1, "자생", "좋아요!", 20000, "img/7_ma.png", ST_GeomFromText('POINT(126.7515 37.4894)')),
       (1, "써브웨이", "좋아요!", 20000, "img/8_ma.png", ST_GeomFromText('POINT(126.7569 37.4902)'));

INSERT INTO schedule (accommodation_id, stay_date, vacant_room_quantity)
VALUES (1, NOW(), 3),
       (1, NOW() + INTERVAL 1 DAY, 3),
       (1, NOW() + INTERVAL 2 DAY, 3),
       (1, NOW() + INTERVAL 3 DAY, 3),
       (1, NOW() + INTERVAL 4 DAY, 3),

       (2, NOW(), 3),
       (2, NOW() + INTERVAL 1 DAY, 3),
       (2, NOW() + INTERVAL 2 DAY, 3),
       (2, NOW() + INTERVAL 3 DAY, 3),
       (2, NOW() + INTERVAL 4 DAY, 3),

       (3, NOW(), 3),
       (3, NOW() + INTERVAL 1 DAY, 3),
       (3, NOW() + INTERVAL 2 DAY, 3),
       (3, NOW() + INTERVAL 3 DAY, 3),
       (3, NOW() + INTERVAL 4 DAY, 3),

       (4, NOW(), 3),
       (4, NOW() + INTERVAL 1 DAY, 3),
       (4, NOW() + INTERVAL 2 DAY, 3),
       (4, NOW() + INTERVAL 3 DAY, 3),
       (4, NOW() + INTERVAL 4 DAY, 3),

       (5, NOW() + INTERVAL 5 DAY, 3),
       (5, NOW() + INTERVAL 6 DAY, 3),
       (5, NOW() + INTERVAL 7 DAY, 3),
       (5, NOW() + INTERVAL 8 DAY, 3),
       (5, NOW() + INTERVAL 9 DAY, 3),

       (6, NOW() + INTERVAL 5 DAY, 3),
       (6, NOW() + INTERVAL 6 DAY, 3),
       (6, NOW() + INTERVAL 7 DAY, 3),
       (6, NOW() + INTERVAL 8 DAY, 3),
       (6, NOW() + INTERVAL 9 DAY, 3),

       (7, NOW() + INTERVAL 5 DAY, 3),
       (7, NOW() + INTERVAL 6 DAY, 3),
       (7, NOW() + INTERVAL 7 DAY, 3),
       (7, NOW() + INTERVAL 8 DAY, 3),
       (7, NOW() + INTERVAL 9 DAY, 3),

       (8, NOW() + INTERVAL 5 DAY, 3),
       (8, NOW() + INTERVAL 6 DAY, 3),
       (8, NOW() + INTERVAL 7 DAY, 3),
       (8, NOW() + INTERVAL 8 DAY, 3),
       (8, NOW() + INTERVAL 9 DAY, 3);

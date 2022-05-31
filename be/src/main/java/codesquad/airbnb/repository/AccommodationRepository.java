package codesquad.airbnb.repository;

import codesquad.airbnb.domain.Accommodation;
import codesquad.airbnb.dto.AccommodationDto;
import java.time.LocalDate;
import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface AccommodationRepository extends JpaRepository<Accommodation, Long> {

    @Query(value = "select a.price_per_day "
        + "from accommodation a "
        + "join schedule s "
        + "on a.accommodation_id = s.accommodation_id "
        + "where ST_Distance_Sphere(a.location, ST_GeomFromText(:point)) <= 1000 "
        + "and s.stay_date between :checkInDate and :checkOutDate "
        + "and s.vacant_room_quantity > 0 "
        + "group by (a.accommodation_id) "
        + "having count(a.accommodation_id) = :stayDays", nativeQuery = true)
    List<Integer> findPricesByStayDate(
        @Param("checkInDate") LocalDate checkIndDate,
        @Param("checkOutDate") LocalDate checkOutDate,
        @Param("stayDays") long stayDays,
        @Param("point") String point);

    @Query(value = "select a.description as description, a.image_path as imagePath, "
        + "ST_ASTEXT(a.location) as location, f.maximum_capacity as maximumCapacity, "
        + "a.name as name, f.options as options, a.price_per_day as pricePerDay "
        + "from accommodation a "
        + "join accommodation_facility f "
        + "on a.accommodation_facility_id = f.accommodation_facility_id "
        + "join schedule s "
        + "on a.accommodation_id = s.accommodation_id "
        + "where ST_Distance_Sphere(a.location, ST_GeomFromText(:point)) <= 1000 "
        + "and s.stay_date between :checkInDate and :checkOutDate "
        + "and s.vacant_room_quantity > 0 "
        + "and a.price_per_day between :minimumMoney and :maximumMoney "
        + "and f.maximum_capacity >= :personnel "
        + "group by (a.accommodation_id) "
        + "having count(a.accommodation_id) = :stayDays", nativeQuery = true)
    List<AccommodationDto> findAllByCriteria(
        @Param("checkInDate") LocalDate checkInDate,
        @Param("checkOutDate") LocalDate checkOutDate,
        @Param("stayDays") long stayDays,
        @Param("point") String point,
        @Param("personnel") int personnel,
        @Param("minimumMoney") int minimumMoney,
        @Param("maximumMoney") int maximumMoney);
}

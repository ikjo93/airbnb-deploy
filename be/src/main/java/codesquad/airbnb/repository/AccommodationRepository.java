package codesquad.airbnb.repository;

import codesquad.airbnb.domain.Accommodation;
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
        + "and s.vacant_room_quantity > 0 "
        + "and s.stay_date between :checkInDate and :checkOutDate "
        + "group by (a.accommodation_id) "
        + "having count(a.accommodation_id) = :stayDays", nativeQuery = true)
    List<Integer> findPricesByStayDate(
        @Param("checkInDate") LocalDate checkIndDate,
        @Param("checkOutDate") LocalDate checkOutDate,
        @Param("stayDays") long stayDays,
        @Param("point") String point);
}

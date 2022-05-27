package codesquad.airbnb.repository;

import codesquad.airbnb.domain.Accommodation;
import java.time.LocalDate;
import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface AccommodationRepository extends JpaRepository<Accommodation, Long> {

    @Query("select a.pricePerDay from Accommodation a join a.schedules s where s.stayDate between :checkInDate and :checkOutDate and s.vacantRoomQuantity > 0 group by (a.id) having count(a.id) = :stayDays")
    List<Integer> findPricesByStayDate(@Param("checkInDate") LocalDate checkIndDate,
        @Param("checkOutDate") LocalDate checkOutDate,
        @Param("stayDays") long stayDays);
}

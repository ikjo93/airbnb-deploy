package codesquad.airbnb.repository;

import java.time.LocalDate;
import java.util.List;
import javax.persistence.EntityManager;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Repository;

@Repository
@RequiredArgsConstructor
public class AccommodationRepository {

    private final EntityManager em;

    public List<Integer> findAllByStayDate(LocalDate checkIndDate, LocalDate checkOutDate, long stayDays) {
        StringBuilder jpql = new StringBuilder();
        jpql.append("select a.pricePerDay ")
            .append("from Accommodation a ")
            .append("join a.schedules s ")
            .append("where s.stayDate between :checkInDate and :checkOutDate and s.vacantRoomQuantity > 0 ")
            .append("group by (a.id) having count(a.id) = :stayDays");

        return em.createQuery(jpql.toString(), Integer.class)
            .setParameter("checkInDate", checkIndDate)
            .setParameter("checkOutDate", checkOutDate.plusDays(1))
            .setParameter("stayDays", stayDays)
            .getResultList();
    }
}

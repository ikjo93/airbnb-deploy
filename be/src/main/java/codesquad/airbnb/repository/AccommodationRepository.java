package codesquad.airbnb.repository;

import codesquad.airbnb.domain.Accommodation;
import java.time.LocalDate;
import java.util.List;
import javax.persistence.EntityManager;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Repository;

@Repository
@RequiredArgsConstructor
public class AccommodationRepository {

    private final EntityManager em;

    public List<Accommodation> findAllByStayDate(LocalDate checkIndDate, LocalDate checkOutDate) {
        String query = "select a from Accommodation a join a.schedules s where s.stayDate between :checkInDate and :checkOutDate group by a.id";

        return em.createQuery(query, Accommodation.class)
            .setParameter("checkInDate", checkIndDate)
            .setParameter("checkOutDate", checkOutDate)
            .getResultList();
    }
}

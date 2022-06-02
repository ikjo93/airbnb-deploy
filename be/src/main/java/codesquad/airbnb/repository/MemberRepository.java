package codesquad.airbnb.repository;

import codesquad.airbnb.domain.Member;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MemberRepository extends JpaRepository<Member, Long> {

    Long findByEmail(String email);

}

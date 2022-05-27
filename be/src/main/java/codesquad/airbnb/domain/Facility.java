package codesquad.airbnb.domain;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToOne;
import javax.persistence.Table;
import lombok.Getter;

@Entity
@Table(name = "accommodation_facility")
@Getter
public class Facility {

    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "accommodation_facility_id")
    private Long id;

    @OneToOne(mappedBy = "facility", fetch = FetchType.LAZY)
    private Accommodation accommodation;

    private Integer maximumCapacity;
    private String options;
}

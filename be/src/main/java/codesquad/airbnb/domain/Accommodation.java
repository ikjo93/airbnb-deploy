package codesquad.airbnb.domain;

import java.util.ArrayList;
import java.util.List;
import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;
import lombok.Getter;

@Entity
@Table(name = "accommodation")
@Getter
public class Accommodation {

    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "accommodation_id")
    private Long id;

    @OneToOne(mappedBy = "accommodation", fetch = FetchType.LAZY)
    private Reservation reservation;

    @OneToMany(mappedBy = "accommodation")
    private List<Schedule> schedules = new ArrayList<>();

    @OneToOne(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    @JoinColumn(name = "facility_id")
    private Facility facility;

    private String locationName;
    private String description;
    private String imagePath;

    private int pricePerDay;

    @Column(name = "position_x")
    private int positionX;
    @Column(name = "position_y")
    private int positionY;
}

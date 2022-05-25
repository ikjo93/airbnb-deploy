package codesquad.airbnb.domain;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.Period;
import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;
import javax.persistence.Table;
import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "reservation")
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class Reservation {

    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "reservation_id")
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "member_id")
    private Member member;

    @OneToOne(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    @JoinColumn(name = "accommodation_id")
    private Accommodation accommodation;

    private int reservationPrice;

    @Column(name = "checkin_date")
    private LocalDate checkInDate;
    @Column(name = "checkout_date")
    private LocalDate checkOutDate;
    @Column(name = "reservation_datetime")
    private LocalDateTime reservationDateTime;

    @Enumerated(EnumType.STRING)
    private ReservationStatus status;

    private Reservation(Member member, Accommodation accommodation, int reservationPrice, LocalDate checkInDate,
        LocalDate checkOutDate, LocalDateTime reservationDateTime,
        ReservationStatus status) {
        this.member = member;
        this.accommodation = accommodation;
        this.reservationPrice = reservationPrice;
        this.checkInDate = checkInDate;
        this.checkOutDate = checkOutDate;
        this.reservationDateTime = reservationDateTime;
        this.status = status;
    }

    public static Reservation createReservation(Member member, Accommodation accommodation, int reservationPrice,
        LocalDate checkInDate, LocalDate checkOutDate) {
        Reservation reservation = new Reservation(member, accommodation, reservationPrice, checkInDate,
            checkOutDate, LocalDateTime.now(), ReservationStatus.ORDER);
        return reservation;
    }
}

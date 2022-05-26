package codesquad.airbnb.controller;

import codesquad.airbnb.dto.AccommodationPriceListDto;
import codesquad.airbnb.service.AccommodationService;
import java.time.LocalDate;
import lombok.RequiredArgsConstructor;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api")
public class AccommodationController {

    private final AccommodationService accommodationService;

    @GetMapping("/prices")
    public AccommodationPriceListDto prices(@RequestParam("checkin") @DateTimeFormat(pattern = "yyyy-MM-dd") LocalDate checkInDate,
                                            @RequestParam("checkout") @DateTimeFormat(pattern = "yyyy-MM-dd") LocalDate checkOutDate) {

        return accommodationService.getPricesByStayDate(checkInDate, checkOutDate);
    }
}

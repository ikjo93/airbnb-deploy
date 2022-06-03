package codesquad.airbnb.controller;

import codesquad.airbnb.dto.AccommodationListDto;
import codesquad.airbnb.dto.AccommodationPriceListDto;
import codesquad.airbnb.service.AccommodationService;
import java.time.LocalDate;
import lombok.RequiredArgsConstructor;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
public class AccommodationController {

    private final AccommodationService accommodationService;

    @GetMapping("/api/accommodation/prices")
    public AccommodationPriceListDto prices(@RequestParam @DateTimeFormat(pattern = "yyyy-MM-dd") LocalDate in,
                                            @RequestParam @DateTimeFormat(pattern = "yyyy-MM-dd") LocalDate out,
                                            @RequestParam double latitude,
                                            @RequestParam double longitude) {

        return accommodationService.getPricesByStayDate(in, out, latitude, longitude);
    }

    @GetMapping("/api/accommodations")
    public AccommodationListDto accommodations(@RequestParam @DateTimeFormat(pattern = "yyyy-MM-dd") LocalDate in,
                                               @RequestParam @DateTimeFormat(pattern = "yyyy-MM-dd") LocalDate out,
                                               @RequestParam int minimum_money,
                                               @RequestParam int maximum_money,
                                               @RequestParam int personnel,
                                               @RequestParam double latitude,
                                               @RequestParam double longitude) {

        return accommodationService.getAccommodationInfoByCriteria(in, out, minimum_money, maximum_money, personnel, latitude, longitude);
    }
}

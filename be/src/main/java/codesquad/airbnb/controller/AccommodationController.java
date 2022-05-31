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

    /* 사용자 현재 위치 좌표 미 전송 시 '서울 시청 좌표'로 검색 */
    private static final String DEFAULT_LATITUDE = "126.9808";
    private static final String DEFAULT_LONGITUDE = "37.5662";

    private final AccommodationService accommodationService;

    @GetMapping("/api/accommodation/prices")
    public AccommodationPriceListDto prices(@RequestParam @DateTimeFormat(pattern = "yyyy-MM-dd") LocalDate in,
                                            @RequestParam @DateTimeFormat(pattern = "yyyy-MM-dd") LocalDate out,
                                            @RequestParam(defaultValue = DEFAULT_LATITUDE) double latitude,
                                            @RequestParam(defaultValue = DEFAULT_LONGITUDE) double longitude) {

        return accommodationService.getPricesByStayDate(in, out, latitude, longitude);
    }

    @GetMapping("/api/accommodations")
    public AccommodationListDto accommodations(@RequestParam @DateTimeFormat(pattern = "yyyy-MM-dd") LocalDate in,
                                               @RequestParam @DateTimeFormat(pattern = "yyyy-MM-dd") LocalDate out,
                                               @RequestParam int minimum_money,
                                               @RequestParam int maximum_money,
                                               @RequestParam int personnel,
                                               @RequestParam(defaultValue = DEFAULT_LATITUDE) double latitude,
                                               @RequestParam(defaultValue = DEFAULT_LONGITUDE) double longitude) {

        return accommodationService.getAccommodationInfoByCriteria(in, out, minimum_money, maximum_money, personnel, latitude, longitude);
    }
}

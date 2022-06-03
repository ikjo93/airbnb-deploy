package codesquad.airbnb.service;

import codesquad.airbnb.dto.AccommodationDto;
import codesquad.airbnb.dto.AccommodationListDto;
import codesquad.airbnb.dto.AccommodationPriceDto;
import codesquad.airbnb.dto.AccommodationPriceListDto;
import codesquad.airbnb.repository.AccommodationRepository;
import java.time.LocalDate;
import java.time.temporal.ChronoUnit;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@RequiredArgsConstructor
@Transactional(readOnly = true)
public class AccommodationService {

    private final AccommodationRepository accommodationRepository;

    public AccommodationPriceListDto getPricesByStayDate(LocalDate checkInDate, LocalDate checkOutDate, Double latitude, Double longitude) {
        Long stayDays = checkInDate.until(checkOutDate, ChronoUnit.DAYS) + 1;
        String point = String.format("POINT(%s %s)", latitude, longitude);

        List<Integer> prices = accommodationRepository.findPricesByStayDate(checkInDate, checkOutDate.plusDays(1), stayDays, point);

        Map<Integer, Integer> countOfPrices = prices.stream().collect(Collectors.toMap(
            price -> price,
            count -> 1,
            (existingCount, newCount) -> existingCount + 1
        ));

        List<AccommodationPriceDto> accommodationPrices = new ArrayList<>();

        for (Integer price : countOfPrices.keySet()) {
            accommodationPrices.add(new AccommodationPriceDto(price, countOfPrices.get(price)));
        }

        return new AccommodationPriceListDto(accommodationPrices);
    }

    public AccommodationListDto getAccommodationInfoByCriteria(LocalDate checkInDate, LocalDate checkOutDate, Integer minimumMoney, Integer maximumMoney, Integer personnel, Double latitude, Double longitude) {
        long stayDays = checkInDate.until(checkOutDate, ChronoUnit.DAYS) + 1;
        String point = String.format("POINT(%s %s)", latitude, longitude);

        List<AccommodationDto> accommodation = accommodationRepository.findAllByCriteria(
            point, checkInDate, checkOutDate.plusDays(1), minimumMoney, maximumMoney, personnel, stayDays);

        return new AccommodationListDto(accommodation);
    }
}

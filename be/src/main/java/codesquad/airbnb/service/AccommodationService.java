package codesquad.airbnb.service;

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

    public AccommodationPriceListDto getPricesByStayDate(LocalDate checkInDate, LocalDate checkOutDate) {
        long stayDays = checkInDate.until(checkOutDate, ChronoUnit.DAYS) + 1;
        List<Integer> prices = accommodationRepository.findPricesByStayDate(checkInDate, checkOutDate.plusDays(1), stayDays);
        Map<Integer, Integer> countOfPrices = calculateCountOfPrices(prices);

        List<AccommodationPriceDto> accommodationPrices = new ArrayList<>();

        for (Integer price : countOfPrices.keySet()) {
            accommodationPrices.add(new AccommodationPriceDto(price, countOfPrices.get(price)));
        }

        return new AccommodationPriceListDto(accommodationPrices);
    }

    private Map<Integer, Integer> calculateCountOfPrices(List<Integer> prices) {
        return prices.stream().collect(Collectors.toMap(
            price -> price,
            count -> 1,
            (existingCount, newCount) -> existingCount + 1
        ));
    }
}

package codesquad.airbnb.service;

import codesquad.airbnb.domain.Accommodation;
import codesquad.airbnb.dto.AccommodationPriceDto;
import codesquad.airbnb.dto.AccommodationPriceListDto;
import codesquad.airbnb.repository.AccommodationRepository;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@RequiredArgsConstructor
@Transactional(readOnly = true)
public class AccommodationService {

    private final AccommodationRepository accommodationRepository;

    public AccommodationPriceListDto getPrices(LocalDate checkInDate, LocalDate checkOutDate) {
        List<Accommodation> accommodations = accommodationRepository.findAllByStayDate(checkInDate, checkOutDate);
        Map<Integer, Integer> map = new HashMap<>();

        for (Accommodation accommodation : accommodations) {
            Integer price = accommodation.getPricePerDay();
            map.put(price, map.getOrDefault(price, 0) + 1);
        }

        List<AccommodationPriceDto> accommodationPrices = new ArrayList<>();

        for (Integer price : map.keySet()) {
            accommodationPrices.add(new AccommodationPriceDto(price, map.get(price)));
        }

        return new AccommodationPriceListDto(accommodationPrices);
    }
}

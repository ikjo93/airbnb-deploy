package codesquad.airbnb.dto;

import java.util.List;
import lombok.Getter;

@Getter
public class AccommodationPriceListDto {

    private final List<AccommodationPriceDto> accommodationPrices;

    public AccommodationPriceListDto(List<AccommodationPriceDto> accommodationPrices) {
        this.accommodationPrices = accommodationPrices;
    }
}

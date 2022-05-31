package codesquad.airbnb.dto;

import java.util.List;
import lombok.AllArgsConstructor;
import lombok.Getter;

@AllArgsConstructor
@Getter
public class AccommodationPriceListDto {

    private final List<AccommodationPriceDto> accommodationPrices;

}

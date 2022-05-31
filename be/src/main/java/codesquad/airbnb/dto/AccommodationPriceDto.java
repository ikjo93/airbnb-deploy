package codesquad.airbnb.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;

@AllArgsConstructor
@Getter
public class AccommodationPriceDto {

    private final Integer price;
    private final Integer count;
}

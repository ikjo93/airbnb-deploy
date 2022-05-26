package codesquad.airbnb.dto;

import lombok.Getter;

@Getter
public class AccommodationPriceDto {

    private final Integer price;
    private final Integer count;

    public AccommodationPriceDto(Integer price, Integer count) {
        this.price = price;
        this.count = count;
    }
}

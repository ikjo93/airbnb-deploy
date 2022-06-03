package codesquad.airbnb.dto;

public interface AccommodationDto {

    Long getId();
    String getName();
    String getDescription();
    String getImagePath();
    Integer getPricePerDay();
    Integer getMaximumCapacity();
    String getOptions();
    Double getLatitude();
    Double getLongitude();
}

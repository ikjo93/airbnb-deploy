package codesquad.airbnb.dto;

import java.time.LocalDate;
import lombok.AllArgsConstructor;
import lombok.Getter;
import org.springframework.format.annotation.DateTimeFormat;

@AllArgsConstructor
@Getter
public class UserSearchForm {

    @DateTimeFormat(pattern = "yyyy-MM-dd")
    private LocalDate in;
    @DateTimeFormat(pattern = "yyyy-MM-dd")
    private LocalDate out;
    private int minimum_money;
    private int maximum_money;
    private int personnel;
    private double latitude;
    private double longitude;
}

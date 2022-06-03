package codesquad.airbnb.dto;

import com.fasterxml.jackson.annotation.JsonProperty;

public class OAuthAccessToken {

    @JsonProperty("access_token")
    private String accessToken;
    @JsonProperty("token_type")
    private String tokenType;

    public String getAuthorizationValue() {
        return this.tokenType + " " + this.accessToken;
    }
}

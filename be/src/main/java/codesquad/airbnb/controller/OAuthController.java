package codesquad.airbnb.controller;

import codesquad.airbnb.service.OAuthService;
import java.io.IOException;
import javax.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
public class OAuthController {

    private final OAuthService oAuthService;

    @GetMapping("/api/github-login")
    public void login(HttpServletResponse response,
        @RequestParam String code) throws IOException {
        String email = oAuthService.authorizeForThirdParty(code);

        // TODO : JWT 발급

        response.sendRedirect("http://3.36.67.143/");
    }
}

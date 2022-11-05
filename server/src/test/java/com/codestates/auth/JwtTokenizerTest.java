package com.codestates.auth;

import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.Matchers.is;
import static org.hamcrest.Matchers.notNullValue;
import static org.junit.jupiter.api.Assertions.assertDoesNotThrow;
import static org.junit.jupiter.api.Assertions.assertThrows;

import java.util.Calendar;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.concurrent.TimeUnit;

import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.TestInstance;

import io.jsonwebtoken.ExpiredJwtException;
import io.jsonwebtoken.io.Decoders;

@TestInstance(TestInstance.Lifecycle.PER_CLASS)
public class JwtTokenizerTest {
	private static JwtTokenizer jwtTokenizer;
	private String secretKey;
	private String base64EncodedSecretKey;

	// Secret Key 인코딩
	@BeforeAll
	public void init() {
		jwtTokenizer = new JwtTokenizer();
		secretKey = "hello!baskinrobbins31wearemakestackoverflow!";

		base64EncodedSecretKey = jwtTokenizer.encodeBase64SecretKey(secretKey);
	}

	@DisplayName("Secret Key 인코딩 테스트")
	@Test
	public void encodeBase64SecretKeyTest() {
		assertThat(secretKey, is(new String(Decoders.BASE64.decode(base64EncodedSecretKey))));
	}

	@DisplayName("Access Token 테스트")
	@Test
	public void generatedAccessToken() {
		Map<String, Object> claims = new HashMap<>();
		claims.put("userId", 1);
		claims.put("roles", List.of("USER"));

		String subject = "Test Access Token";
		Calendar calendar = Calendar.getInstance();
		calendar.add(Calendar.MINUTE, 10);
		Date expiration = calendar.getTime();

		String accessToken = jwtTokenizer.generateAccessToken(claims, subject, expiration, base64EncodedSecretKey);
		assertThat(accessToken, notNullValue());
	}

	@DisplayName("Refresh Token 테스트")
	@Test
	public void generatedRefreshToken() {
		String subject = "Test Refresh Token";
		Calendar calendar = Calendar.getInstance();
		calendar.add(Calendar.HOUR, 24);
		Date expiration = calendar.getTime();

		String refreshToken = jwtTokenizer.generateRefreshToken(subject, expiration, base64EncodedSecretKey);
		assertThat(refreshToken, notNullValue());
	}

	@DisplayName("시그니처 검증 테스트")
	@Test
	public void verifySignatureTest() {
		String accessToken = getAccessToken(Calendar.MINUTE, 10);
		assertDoesNotThrow(() -> jwtTokenizer.verifySignature(accessToken, base64EncodedSecretKey));
	}

	@DisplayName("JWT 만료 테스트")
	@Test
	public void verifyExpirationTest() throws InterruptedException {
		String accessToken = getAccessToken(Calendar.SECOND, 1);
		assertDoesNotThrow(() -> jwtTokenizer.verifySignature(accessToken, base64EncodedSecretKey));

		TimeUnit.MILLISECONDS.sleep(1500);

		assertThrows(ExpiredJwtException.class, ()->jwtTokenizer.verifySignature(accessToken, base64EncodedSecretKey));
	}

	private String getAccessToken(int timeUnit, int timeAmount) {
		Map<String, Object> claims = new HashMap<>();
		claims.put("memberId", 1);
		claims.put("roles", List.of("USER"));

		String subject = "엑세스 토큰 테스트";
		Calendar calendar = Calendar.getInstance();
		calendar.add(timeUnit, timeAmount);
		Date expiration = calendar.getTime();
		String accessToken = jwtTokenizer.generateAccessToken(claims, subject, expiration, base64EncodedSecretKey);

		return accessToken;
	}
}

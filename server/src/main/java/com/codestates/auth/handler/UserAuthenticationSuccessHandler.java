package com.codestates.auth.handler;

import java.io.IOException;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.security.core.Authentication;
import org.springframework.security.web.authentication.AuthenticationSuccessHandler;

import com.codestates.auth.LoginResponse;
import com.codestates.auth.UsersDetailService;
import com.google.gson.Gson;

import lombok.extern.slf4j.Slf4j;

// @Component
@Slf4j
public class UserAuthenticationSuccessHandler implements AuthenticationSuccessHandler {

	@Override
	public void onAuthenticationSuccess(HttpServletRequest request,
		HttpServletResponse response, Authentication authentication) throws IOException {
		log.info("# 인증 성공");
		// log.info("response.getHeader() : {}", response.getHeader("Authorization"));

		Gson gson = new Gson();
		String cookieValue = response.getHeader("Authorization");
		Cookie cookie = new Cookie("Authorization", cookieValue);

		UsersDetailService.UsersDetail usersDetail = (UsersDetailService.UsersDetail) authentication.getPrincipal();

		LoginResponse loginResponse =
			new LoginResponse(usersDetail.getId(), usersDetail.getDisplayName(), usersDetail.getAvatarColor());
		response.setHeader("Authorization", response.getHeader("Authorization"));
		response.addCookie(cookie);
		response.setContentType(MediaType.APPLICATION_JSON_VALUE);
		response.setStatus(HttpStatus.OK.value());
		response.setCharacterEncoding("UTF-8");
		response.getWriter().write(gson.toJson(loginResponse, LoginResponse.class));
	}
}

package com.codestates.auth;

import lombok.Getter;

@Getter
public class LoginResponse {
	private long userId;

	public LoginResponse(long userId) {
		this.userId = userId;
	}
}

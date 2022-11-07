package com.codestates.auth;

import lombok.Getter;

@Getter
public class LoginResponse {
	private long userId;
	private String displayName;

	public LoginResponse(long userId, String displayName) {
		this.userId = userId;
		this.displayName = displayName;
	}
}

package com.codestates.auth;

import lombok.Getter;

@Getter
public class LoginResponse {
	private long userId;
	private String displayName;
	private String avatarColor;

	public LoginResponse(long userId, String displayName, String avatarColor) {
		this.userId = userId;
		this.displayName = displayName;
		this.avatarColor = avatarColor;
	}
}

package com.codestates.user.dto;

import com.codestates.status.UserStatus;

import lombok.Builder;
import lombok.Getter;

@Getter
@Builder
public class UserResponseDto {
	private long id;
	private String email;
	private String password;
	private String displayName;
	private UserStatus userStatus;
}

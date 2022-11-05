package com.codestates.user.dto;

import com.codestates.status.UserStatus;

import lombok.Builder;
import lombok.Getter;

@Getter
@Builder
public class UserResponseDto {
	private long id;
	private String email;
	private String displayName;
	private String avatarColor;
	private UserStatus userStatus;
}
